---
title: MAGPIE_EMOTE
description: System for card/event logic.
tags: [MAGPIE, ECS, Component, Emote]
---

# MAGPIE_EMOTE

`MAGPIE_EMOTE` is a specialized subset of the EXP payload structure, heavily used for visual communication and "Card" activations.

## Usage

When an entity (often a player) plays a card or performs an action that requires broadcasting intent to the surrounding area, an `MAGPIE_EMOTE` is generated. 

It contains:
- The specific emote ID (`MAGPIE_KEY`).
- The initiator entity ID.
- Target entity IDs (if applicable).

The networking egress system prioritizes pushing `MAGPIE_EMOTE` updates down to the WebSocket clients to trigger client-side animations and UI updates synchronously with the server's logic tick.