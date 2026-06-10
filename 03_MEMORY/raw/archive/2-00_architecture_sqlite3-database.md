# 00_architecture_sqlite3-database

Assistant ManagerBoss, we’ve officially moved from the bulky .json snapshot system to a better-sqlite3 database, which acts as our high-speed filing cabinet [Conversation]. This change allows us to store much more data without performance lag, especially as entities grow and gain more experiences [Conversation]. We are treating the database as the "Sovereign Host" for the world's state [1].
ProgrammerThe integration is clean. We are keeping the entities as "Dumb Containers" to stay optimized for the V8 engine [2, 3].
LTM Integration: Instead of an array of strings, .LTM is now a Float64Array [Conversation]. Each slot holds a numeric ID that acts as a Foreign Key pointing to a MAGPIE_KEY in the SQLite database [Conversation].
Memory Efficiency: This keeps the entity's memory footprint fixed and small while offloading "Cold Data" (like dialogue text or complex descriptions) to the database [4, 5].
Standardization: Both universal and personal keys are stored in a centralized SQLite table, maximizing the efficiency of the `Float64Array
