# Integration and Automation

**Summary**: A guide to automating the virtual singer production pipeline using JavaScript and local APIs.

**Sources**: (source: local_virtual_singer.md)

**Last updated**: 2026-05-19

---

Rather than relying solely on GUI interaction, you can treat Python-based AI engines as headless microservices and automate vocal production using standard JavaScript.

## Orchestration Methods

- **Gradio Web UIs (Zero-Code)**: Run a local server (e.g., `http://127.0.0.1:6969`) and interact via a standard browser interface.
- **Headless API (JS Native)**: Trigger voice generation or conversion directly from a Node.js or browser-based application using `fetch` requests to the local API endpoint.

## Integration Workflow (Node.js Example)

You can automate your virtual singer's track rendering by sending a POST request to the local API backend:

```javascript
// Example Node.js script to trigger local Python AI voice conversion
async function generateVirtualSingerVocals() {
  const response = await fetch("http://127.0.0.1:6969/api/convert", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [
        "path/to/your/guide_vocal.wav",  // Source track path
        "virtual_singer_v1",             // Trained model name
        0                                // Pitch shift parameter
      ]
    })
  });

  const result = await response.json();
  console.log("Generated Vocal Path:", result.data[0]); 
}
```

By enabling the "API Mode" toggle in settings (available in tools like Applio), the backend exposes a fully documented Swagger/OpenAPI interface for easier payload construction.

## Related pages

- [[virtual-singer-index]]
- [[local-svc-frameworks]]
