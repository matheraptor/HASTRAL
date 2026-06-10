# microSD Card Failure Diagnostics

**Summary**: A troubleshooting guide for diagnosing and addressing microSD cards that repeatedly fail formatting or enter read-only mode, typically indicating hardware failure.

**Sources**: 
- [[raw/microSD formatting isn't formatting it.md]]

**Last updated**: 2026-05-15

---

## Formatting Failure Symptoms

When a device (e.g., Samsung Galaxy M31) repeatedly fails to format a microSD card and indicates the card is "not supported," it often points to sector corruption or structural hardware failure.

## Diagnostic Protocol

### 1. External Force Formatting (PC)
If Android OS fails, bypass restrictions using a computer:
- Use `diskpart` (Windows):
  1. `list disk` -> Identify microSD
  2. `select disk X`
  3. `clean`
  4. `create partition primary`
  5. `format fs=exfat quick`
- Use official **SD Association Memory Card Formatter** if standard tools fail.

### 2. Hardware Verification
- **Contact Cleaning:** Rub gold contacts with a rubber eraser to remove oxidation/debris.
- **Cross-Device Testing:** Test the card in a different device. If failure persists across multiple devices (e.g., Galaxy M31 and Galaxy S5), hardware failure is likely.
- **Read-Only Lock:** If files appear to delete but reappear after a power cycle, the card's internal controller has permanently locked into read-only mode to protect data integrity.

## Conclusion
If a card fails to format across multiple devices, it has suffered catastrophic hardware failure and must be replaced. Software repairs are not possible.

## Related pages

- [[topics/operations/memory/index|Memory Architecture]]
- [[topics/research/technical/index|Technical Research]]
