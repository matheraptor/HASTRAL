# Deckbuilder Mechanics

**Summary**: A high-performance approach to deckbuilding mechanics that uses `Float64Array` and `NaN` delimiters to represent cards, states, and stamina in a single binary buffer.

**Sources**: leveraging_db_for_shelderEvo.md

**Last updated**: 2026-05-04.

---

## The Float64Array Deck

To maintain maximum V8 engine performance and prevent Garbage Collection stalls, an entity's deck is not stored as an array of JavaScript objects. Instead, the entire deck state is mapped to a single contiguous `Float64Array`.

### Core Philosophy

1. **Card as Prototype**: Cards are not unique entities in the database. They are represented by an `ID Enum` (e.g., `500` = Fireball). This guarantees fairness (the card acts identically for everyone) and keeps the database incredibly lightweight.
2. **Context Determines Function**: A card's behavior changes based on where its ID is located in the array. It can act as a passive trait, an active skill, a penalty wound, or simply potential energy (stamina).
3. **Zero-Allocation Moves**: Moving a card from the deck to the hand, or from hand to discard, is just a swap of numbers between indices in the array.

### Array Segmentation (Zoning)

The `Float64Array` is divided into logical zones separated by `NaN` (Not-a-Number) values. 

`[EntityID, DeckSize, ...Deck..., NaN, ...Hand..., NaN, ...Discard..., NaN, ...Exile/Wounds..., NaN, ...Permanents...]`

- `[0]`: Contains the **EntityID** so the buffer is self-aware when passed between functions.
- `[1]`: Contains the **DeckSize**, used to calculate dynamic offsets.
- **`NaN` Delimiters**: Using `NaN` is a zero-cost hardware-level marker. Scanning a zone is as simple as `for(let i = start; !Number.isNaN(arr[i]); i++)`.

### Card as Stamina

The system merges the concept of actions and energy: **the card itself is the stamina**.

- **Drawing**: Moving a card from the Deck to the Hand. The Hand represents available potential (stamina).
- **Fatigue**: When the deck is exhausted, a card from the Discard pile is moved to Exile (Wound). This permanently reduces the maximum stamina (deck size) until healed.
- **Death**: If the deck runs out completely due to fatigue/wounds, or if a critical vital trait is exiled, the entity dies.

### Customization via "Sticky EXP"

Because cards are just Enums, personalizing them (e.g., "my upgraded fireball") is handled via "Sticky EXP" (Experience Objects). An entity stores an EXP modifier that says, "Apply +2 damage to card ID 500". The engine calculates this on the fly when the card is processed, maintaining the purity of the database while allowing procedural evolution.

## Related pages

- [[lazy-hive-architecture]]
- [[sqlite3-architecture]]
