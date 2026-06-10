---
title: "I just realized that markdown has stuff like> [!WARNING]> This payload should only be transmitted if the user's validated role permits access.[!IMPORTANT]that automatically renders"
source: "https://www.google.com/search?q=I+just+realized+that+markdown+has+stuff+like%0A%0A%3E+%5B%21WARNING%5D%0A%3E+This+payload+should+only+be+transmitted+if+the+user%27s+validated+role+permits+access.%0A%5B%21IMPORTANT%5D%0A%0Athat+automatically+renders&sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=22&ved=0ahUKEwit98GbzMyTAxUq0QIHHTbKJ-IQteYPCBc&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mstk=AUtExfCaNHr6ZTNoVNLZDlOPTOjtKZB-4Gp7Jq8uR1tDGQmUq3ZIp27pXf-fObBFnenqSzgUAY11rfM-1LKiwmNYAX9Gw5qWgilxisf8S04PQ74sp_othhLfUwm2jQIYJaxdYEnwpLKXA1EmvC7J3cg8MaLV4QZ0iakYQPN9_SSncT5-y6_tHL847aYpQG3PEk3Aag9pcRhT7TDuFF0CLwi7mlU7z7llX2VagFdjIlVzK1TOSsf5evuwU0iCZtg7M6hck71BghNrtmJCErasvG9vueyFuxsd7RrAtYY&csuir=1&mtid=ZCLyadu6D7Poi-gPm9rk4Qs&udm=50"
author:
published:
created: 2026-04-29
description:
tags:
  - "clippings"
---
## Search Results

I just realized that markdown has stuff like> \[!WARNING\]> This payload should only be transmitted if the user's validated role permits access.\[!IMPORTANT\]that automatically renders

17:23

Actually, those are called **Markdown Admonitions** (or callouts). While they look like standard Markdown, they aren't part of the original spec—they were popularized by platforms like **GitHub**, **Obsidian**, and **Microsoft Learn** to make alerts pop up visually. \[1, 2, 4\]

The standard syntax usually looks like this:

```
> [!NOTE]
> This is a helpful tip.

> [!WARNING]
> This is a warning.
```

Each platform renders them differently; for example, GitHub supports `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, and `[!CAUTION]`. \[1, 2\] If you use them in an editor that doesn't support them, they just look like a standard blockquote. \[4\]

Are you looking to use these in a **specific app** or just exploring how to style your own docs?

- Why You Shouldn’t Use “Markdown” for Documentation: r/programming
	I think a lot of people choose Markdown because they're not qualified to make a choice and GitHub has popularised this one format.![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5cyClOYofcj6Z6Ftwu5F-BEAaB0V1nn-x_6y76j76gr8mxYnc)
	Reddit
- Markdown for dummies
	Table There are some features which might not work on some platforms because there are different flavors (versions) of markdown. E...![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQz_4jl4Xh0RqghOtXyPHxRMktd4daZRd_jyOXCjc32CUzhJEmS)
	DEV Community
- Questtion about formatting · community · Discussion #64835 · GitHub
	You are right, the \[! IMPORTANT\] syntax is documented in the GitHub documentation, but it is not supported by the GitHub Markdown...
	GitHub

Show all

I mostly work in VSCode and Antigravity, and use both their default preview as well as Markdown Preview Enhanced. Can you give me a full set of supported callouts?

17:24

The set of supported callouts depends on whether you are using the built-in [VS Code](https://code.visualstudio.com/docs/languages/markdown) preview or the more feature-rich [Markdown Preview Enhanced (MPE)](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) extension. Antigravity typically follows VS Code's default behavior unless configured otherwise.

1\. Built-in VS Code & Antigravity (GFM Alerts)

VS Code’s native preview recently added support for **GitHub-Style Alerts**. These use a simple blockquote syntax and support exactly five types:

- **`[!NOTE]`**: Highlights useful background information.
- **`[!TIP]`**: Provides advice for efficiency or better results.
- **`[!IMPORTANT]`**: Identifies essential requirements or steps.
- **`[!WARNING]`**: Alerts users to potential problems or breaking changes.
- **`[!CAUTION]`**: Warns about high-risk actions like data loss.

**Syntax Example:**

```
> [!TIP]
> Use standard GFM for the best compatibility across VS Code and GitHub.
```

2\. Markdown Preview Enhanced (MPE)

Markdown Preview Enhanced is significantly more powerful. It supports the standard GFM alerts above, but it also natively includes support for **admonitions** (often via integrated plugins like `markdown-it-admonition`).

Depending on your MPE settings, it can render **MkDocs/Python-Markdown** style alerts using the `!!!` syntax:

<table><tbody><tr><th colspan="undefined">Admonition Type</th><th colspan="undefined">Common Aliases / Use Case</th></tr><tr><td colspan="undefined"><strong><code>note</code></strong></td><td colspan="undefined"><code>seealso</code></td></tr><tr><td colspan="undefined"><strong><code>abstract</code></strong></td><td colspan="undefined"><code>summary</code>, <code>tldr</code></td></tr><tr><td colspan="undefined"><strong><code>info</code></strong></td><td colspan="undefined"><code>todo</code></td></tr><tr><td colspan="undefined"><strong><code>tip</code></strong></td><td colspan="undefined"><code>hint</code></td></tr><tr><td colspan="undefined"><strong><code>success</code></strong></td><td colspan="undefined"><code>check</code>, <code>done</code></td></tr><tr><td colspan="undefined"><strong><code>question</code></strong></td><td colspan="undefined"><code>help</code>, <code>faq</code></td></tr><tr><td colspan="undefined"><strong><code>warning</code></strong></td><td colspan="undefined"><code>caution</code>, <code>attention</code></td></tr><tr><td colspan="undefined"><strong><code>failure</code></strong></td><td colspan="undefined"><code>fail</code>, <code>missing</code></td></tr><tr><td colspan="undefined"><strong><code>danger</code></strong></td><td colspan="undefined"><code>error</code></td></tr><tr><td colspan="undefined"><strong><code>bug</code></strong></td><td colspan="undefined">General issue tracking</td></tr><tr><td colspan="undefined"><strong><code>example</code></strong></td><td colspan="undefined"><code>snippet</code></td></tr><tr><td colspan="undefined"><strong><code>quote</code></strong></td><td colspan="undefined"><code>cite</code></td></tr></tbody></table>

**Syntax Example (MPE):**

```
!!! warning "Custom Title"
    This is an MkDocs-style admonition supported by MPE.
```

Summary of Support

<table><tbody><tr><th colspan="undefined">Preview Mode</th><th colspan="undefined">Supports <code>> [!TYPE]</code></th><th colspan="undefined">Supports <code>!!! type</code></th></tr><tr><td colspan="undefined"><strong>Default VS Code</strong></td><td colspan="undefined">✅ Yes</td><td colspan="undefined">❌ No</td></tr><tr><td colspan="undefined"><strong>Antigravity</strong></td><td colspan="undefined">✅ Yes</td><td colspan="undefined">❌ No</td></tr><tr><td colspan="undefined"><strong>Markdown Preview Enhanced</strong></td><td colspan="undefined">✅ Yes</td><td colspan="undefined">✅ Yes (Configurable)</td></tr></tbody></table>

Would you like a set of **VS Code snippets** to help you insert these callouts faster?

- vscode-markdown-preview-enhanced/CHANGELOG.md at...
	Supports CommonMark, GFM tables, strikethrough, subscript, superscript, mark/highlight, math, emoji, wikilinks, CriticMarkup, abbr...
	GitHub
- Basic writing and formatting syntax - GitHub Docs
	Alerts. Alerts, also sometimes known as callouts or admonitions, are a Markdown extension based on the blockquote syntax that you...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAhFBMVEX///8AAAD3+Pnp7fD8/Pz09PTs7Ozx8fGxsbKhoqO4uLmkpabj4+NcXmFucHOcnZ7c3N29vr5mZmfPz9AaHSIAAA1dXV2PkJGCg4VSUlPHx8hVV1rU1dVJS0+qq6x3eHkhJCoqLTJDREY5Oz8UFRYkJScACRMKDRIRGB4zNDUdHh8sLS1Jc7FnAAAE+0lEQVRYhe2YDY+jOAyGbY4ESgNJSNvwnULa6TD9///vHJjpzna6e9JpVyfd1lKBxOaJ40TlBYCn/WFWxN81Yxbdrm3LfnSXbptwki1/4Cyj75qitLeOFpMfIbeYLvmgeODkECVxQoMxzilhczzwj7zzgIw5p1yTAI+TKISFy+GGjPg6bsLZ+xkcDF5OLaQ97hzn42703Sdk4o771kDhKZ2t15D1ONv4GzJrXyaqAbMj1hmd5YhwgA2+tlZcfFqh48XRO/EJ2aKT46vYooSo3CmN07bE6obcn12+nwVUWGw8NmAxlwvSAqQUB+kQi7GkYuim0YKQTIdug1bsSlD0m0Mt8ld2y3IIBy0wp2XYuTjdUG9AaqLM6As6q5HWS+PLCwXnGA173/cT9lCOIiPMZdf3/RG74dPyWNQGRwrb90mc5f0HEtjGjZhHC1LI7VaqkOWAhZRyk9IsTIlRfJlDc8u/IPMlLOrR2Q9kYxUk04sg5G2jLhOnokRSQ4zulUoy72ld9YbdITmSjw0Zw+nbxBv0qXypGfdHyb8tT3zAavAhoMRwzNAPFR7gDgkOi6GmWl1Qbm4TT3eIbdgpiJ83ES8Qd8FPax12QkZhjn9BsgrxQkvVjDg+2PzRz9sxPLYf9T/taf/C/vrl9l/P6GlPe9r/x5hZxZ0wX32xCSqxeyRXIXkQ/24GF50LEh/cFp7i/Gof3adxTSioziiMStLUhOe24uq0Did3a0IsCANBeomEA0OSknzaJipEqOUoFkHRcYOgSW14Uj4DzujAXa5vaEhVXuvdDdnghFVHWQ+YOAru3pHe4xnY+XydE+ZPM6qoxmt7gTpBm8hj91YlW+zspVG+Urjl7tVEQgiQx3iqaDqqrqAtDKq4KPmKzEnAKTkl3EtlBT/LBjNeIvQk80Lp3hqqzmAPEeTVMHPoTt0WT8g3ZzFPfX9qJA3ebLHv/SRWpAR10e7Y9yRzh7ze2xSDXgPTEZJnzUmDOKfhvSSv0p0AfTHcdB3Is7ha1TVcoPWUFvUZfkOeGteqzqhhr828IDOEEsa5aSfWzzo/J1VNSMewTaeX91peoJgbixw81VpQUX21Ij0hsdE4ZKd02DcSrdqX2SuCAlFNRReOpYEtvfXYDWTtYXBq3RQFcHKRHtQHWlRzmCyPKBKSKgNRGBjqWoYQWaX0vnFIi3Xrrsd4vYzX6w9xF3+41p6PqHfH987P9z3tV1j0y+13IJ/2tKf9CSYWAcTuVU4s6G+ff/3yxhOu/gk5ZuHY1HefAjk9GKHYfAl3Mj3+JD+VMMVuyFipKMgfESWdWJFOChUDNWNgnWLAlHAyUrHgXQKxEvx+bvtpOMz57gNZ9n1JSklcTN3OmxXpWxzAH7xN+to7KN/acZONHeZzH1ksx/oOmUcNRslFd8NWNQdzMc3FTN2mGCaRoVqQDqzLvNJI+aWTvnbMb7RXmMQoUEOV3yELyK4Ab1o71zQHfaqs5FVVNHK2VooFuYFNJWdyiLoopnSKoJABCUBjksRpvyC7oEKWietaoFGOKdyDnoWpFmQhQTpzVp0zyOVszoNBmfluQdZt6u+zlBAPU+UWyWuqKKtbCVDST/aHJslpA8kMMqLWrWZVbasorZ3NjBMlVU0IOVT3WQa9wT5ESPgwG/ZRtPRG65csaiyOKHx8Dj0sJotgcRcu9Q8F9r83trXZryU+7ffa3z9hYNlqRLxYAAAAAElFTkSuQmCC)
	GitHub Docs
- The markdown preview doesn't render callouts #245064
	mjbvz commented. mjbvz. on Mar 31, 2025. Collaborator. More actions. Our built-in Markdown support targets common mark. Callouts a...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAtFBMVEX////a4/IAasEyeMYAAAD4+Pj8/Pzy8vPU1dbR0tP19fXv8PDd3t/n5+jX2Nnq6uvLzM3Cw8SGiYxJTlOvsbOpq62ho6VCR027vL6qr7RxdHgAER4ADBtdYWZjZ2s7QUeTlZglLTV7foJQVVsAAAowNz6UnKOzub8UHykMGSSgpq0AABJWV1kbJS7i3dinoJ2yrKd0WkRbMxBbRDTAtafzuJ/q0Lvgspk5OjpJSEjn18XTxbdTNtCJAAAEtUlEQVRYhe1XCXfbNgzGNlEU70OHKcWSaCmK3DTpuq27////Guj0iNOsa9zsvb7Nn59lgqQ/AiQAQgBnnHHG14o8/9AmKH4YOI1PGEWFyhU5fGTlcgdCgcxVbhwxp1CGoK3VqnbWBVc4Zo12tnLKqUa7qlYnUOqCMOVkoZ20hZPKaqioQ8kV1klGTlHzjOdD/gT/I593WpaAw2fbCgB6paBdVwd522oA1rbJMduA7nt5u1x0k/8cRrpquRrSglnRSZ3M29S7Gmi5WIFadDOLIzlr9lZ1nkgc1clbuckl0CTKB87LgzQrRdtVAMkKpLQoXqOKUlqLjKS9W8W94ND1w76BfhgrXL7sbqdhX5FNuYQHhgsMQQDVknyFQoHl9AquUgzIa8FWcALWO0qKlBBL94L5DCn3olmo76EJ2H0fqrWslVCsOdjVroGjFddJSytlwD3lV9Zem3eUHuqy2oWqQcoRqhmavthVQ/9Ay3Q8/FoYyo1wjFwbdQ2M0TYnrSlCyittcomQURgmQM0uKt+hvIN6A3EOF25ejilVDhI4bluRBAHUWWQoAsVjPjQh12mebAgeH+gaZGw4yjXoCmwFdSP9ORX8Dar6oy45PTqzqIB8VpJ+hLLIHp85Q/nx5BDrTQAfBgibwcQaah9qbPfYFoOVXQ6kuwkZiK6sIPdjhKIvHfS6n8BN1W7E0OncfcpmG5qM9Ptgd6aZ6xE2lZ9kRpuy6lkWmxlgWoruJSyd27Jp4pu6jLKDy86+qISWpUfLl/GIsgTIWB+hvr3pJ7ljW+F9tbvpB1bGbujQrrlBw/mlhJvYb2762t1uI2QaNhhD0CfDj4O82WuXiTmCWyhrYBhm8FNxSViTj4srF3TzrjT+EnZR7l2KSNswlpGM3VHOyc13x5SlXyIkZeJYBgi4YPTYThtcmqnHP5h5Uy0gZ5xnhmUwYdxEwLWGpGC9w6w0H+1lXA4VRgo8coi+O+Ft+20hkh+6D1GXHjl5P+9u5vG1II8W+PpBZS7p/Y4Tq6x7CDuxu78L7vEg/AzISqZgVeA2dHSgUBQOiMNo0WDDCbWb2w6Zq3bdS5Eord32F8FmIDM3LjGOfsOfTDl4kBLz9IU9UHbpKmAZqIw0A/hNdE/fUaRkeuPllr2nHJGSZTwOYFxzWTyZ0l72mZ3naR/dSBenk+E8m4eMVts4jX53QtFqgkyHIQvKciZABHXwf7zIsDBgjv4zwxn/dwhz0hvYpxjxDcpSEA+6v6RsMhakZiKkQJdFISUWv1LL9kvUXINjGitMaxxz1jLrnC2KL7o9KDGoEgcuqOCcE84pJfy59/eMM54KpV49N+X3rw+OncM9/6apHBOHKzz1HnLL0b12lwRynvN74ju8/uHHn9JvZxtnAwsFPqV3rLITxmoVfK1C413FAiiMfyNVgd+UFLTkFWNSFNoclazkzc+//Jp06Hz8fer8zTDGGL3XXVM3v/mmvmmm3yfvPRayTq+6Ck7XwQbAlMCEDbrGzKD0kZav/njzZzKVCyGoEcoYIYgyoIhAeyk1KlfiMAaEFxS3gxCcDCkh5PihnIj8QTLss3jSGXwCRp3fU//z+ObZAd8+O+C7Z8e/QPkXbqpfpcqH3LYAAAAASUVORK5CYII=)
	GitHub

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com