# Link Repair Script v5

This script was used to perform a robust, mapping-based repair of mangled wiki links (specifically `[[|Label]]` syntax) within the HASTRAL wiki. It builds an index of all files and maps normalized labels (based on filename, spaces/hyphens/underscores, and YAML titles) to their canonical relative paths.

```powershell
$wikiRoot = "C:\Users\Marika\matheraptor\projects\HASTRAL\03_MEMORY\wiki"

# Create a mapping: normalized label -> relative path
$labelMap = @{}

# Helper to normalize a label
function Get-Normalized-Label ($name) {
    return $name.ToLower().Replace("-", " ").Replace("_", " ").Trim()
}

# Scan all files and index them by multiple possible label forms
Get-ChildItem -Path $wikiRoot -Recurse -Filter *.md | ForEach-Object {
    $relativePath = $_.FullName.Replace($wikiRoot, "").Replace("\", "/").TrimStart("/").Replace(".md", "")
    
    # Forms: exact name, spaces, title
    $possibleLabels = @($_.BaseName)
    if ($_.BaseName -match '-') { $possibleLabels += $_.BaseName.Replace("-", " ") }
    if ($_.BaseName -match '_') { $possibleLabels += $_.BaseName.Replace("_", " ") }
    
    $content = Get-Content $_.FullName -Raw
    if ($content -match 'title: ([^\r\n]+)') {
        $possibleLabels += $matches[1].Trim()
    }
    
    foreach ($label in $possibleLabels) {
        $normalized = Get-Normalized-Label $label
        if (-not $labelMap.ContainsKey($normalized)) {
            $labelMap[$normalized] = $relativePath
        }
    }
}

$files = Get-ChildItem -Path $wikiRoot -Recurse -Filter *.md

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Repair [[|Label]]
    $newContent = [regex]::Replace($content, '\[\[\|([^\]]+)\]\]', {
        param($match)
        $label = $match.Groups[1].Value.Trim()
        $normalizedLabel = Get-Normalized-Label $label
        
        if ($labelMap.ContainsKey($normalizedLabel)) {
            $link = $labelMap[$normalizedLabel]
            return "[[$link|$label]]"
        }
        return $match.Value
    })
    
    if ($newContent -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Repaired links in $($file.FullName)"
    }
}
```

**Last updated**: 2026-05-15
