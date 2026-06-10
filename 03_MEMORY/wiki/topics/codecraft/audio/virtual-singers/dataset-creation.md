# Dataset Creation for Virtual Singers

**Summary**: A guide to building and managing custom vocal datasets to establish a unique vocal identity for a virtual singer.

**Sources**: (source: local_virtual_singer.md)

**Last updated**: 2026-05-19

---

The soul of your virtual singer is the audio data you feed the conversion engine. A distinct vocal identity requires a carefully curated dataset.

## Dataset Best Practices

- **Clean and Dry Audio**: Use 5 to 30 minutes of clean, dry singing vocals. "Dry" means no instrumental backing, no heavy delays, and no room reverb.
- **Stem Separation**: Before processing, use tools like **Ultimate Vocal Remover (UVR)** to isolate raw source vocals.
- **Hybridization**: You can mix generated voices (e.g., from F5-TTS) with your own recordings to create unique hybrid singers.

## Workflow Pipeline

1. **Phase 1 (Identity)**: Use F5-TTS (via text prompts) to generate foundational vocal DNA if no reference exists.
2. **Phase 2 (Preparation)**: Clean audio using UVR and ensure it is perfectly in-tune.
3. **Phase 3 (Training)**: Import the dataset into the SVC framework (Applio/DDSP-SVC) for training on optimized hardware settings (e.g., lower batch sizes for limited VRAM).

## Related pages

- [[virtual-singer-index]]
- [[local-svc-frameworks]]
