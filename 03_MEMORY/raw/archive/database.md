---
title: "I was thinking about how to handle raw resources. KSP handles them as abstract amounts of a resource prototype from a lookup table. I was thinking we could handle them instead as entities, too, thus making it a problem of database. We could therefore treat raw resources just like any other object, with the type defining the prototype, and assign to each resource entity the amount via the STATS array. So, like, to fill a tank with 100 kg of pressurized Oxygen, we could just equip the entity \"tank\" with a new raw resource type pressurized oxygen and set its mass value to 100. WHat do you think ?"
source: "https://www.google.com/search?q=I+was+thinking+about+how+to+handle+raw+resources.+KSP+handles+them+as+abstract+amounts+of+a+resource+prototype+from+a+lookup+table.+I+was+thinking+we+could+handle+them+instead+as+entities%2C+too%2C+thus+making+it+a+problem+of+database.+We+could+therefore+treat+raw+resources+just+like+any+other+object%2C+with+the+type+defining+the+prototype%2C+and+assign+to+each+resource+entity+the+amount+via+the+STATS+array.+So%2C+like%2C+to+fill+a+tank+with+100+kg+of+pressurized+Oxygen%2C+we+could+just+equip+the+entity+%22tank%22+with+a+new+raw+resource+type+pressurized+oxygen+and+set+its+mass+value+to+100.+WHat+do+you+think+%3F&sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=22&ved=0ahUKEwit98GbzMyTAxUq0QIHHTbKJ-IQteYPCBc&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mstk=AUtExfAmxea0cbZGQV7m_Jar5oT5phBK1iQwohVGcVGETE00H2REszdpPZr19EKtdygc3IUoH74HOEf7cydCk-7G6PsihWNuCoPUP3FYNitW0U1IoK1M8vD_lbXg_n9VyFL84QOZlR4lGPwUuRQkP769J54Qru0qwKNrCtq-u7889EQsuPT_6a4KgIhYW_IzZexqGMbHbyp6MAr4Fxr257lgqAZRRd6QrOdse53rfzphPTtWlAV7J-hm2hsOe9F7Yh70CzxHSbYrxvYArlqfTrp_hKrXAguIfNgXYFQ&csuir=1&mtid=FwL6aZj_Gczh7_UP6-v3yAY&udm=50"
author:
published:
created: 2026-05-06
description:
tags:
  - "clippings"
---
## Search Results

Hi MaTheRaptor, what's on your mind?

I was thinking about how to handle raw resources. KSP handles them as abstract amounts of a resource prototype from a lookup table. I was thinking we could handle them instead as entities, too, thus making it a problem of database. We could therefore treat raw resources just like any other object, with the type defining the prototype, and assign to each resource entity the amount via the STATS array. So, like, to fill a tank with 100 kg of pressurized Oxygen, we could just equip the entity "tank" with a new raw resource type pressurized oxygen and set its mass value to 100. WHat do you think?

That is a clever shift in architecture. Moving from a **centralized lookup table** (KSP style) to an **Entity-Component-System (ECS)** approach for resources opens up some really interesting gameplay and technical possibilities.

Here is a breakdown of how that stacks up:

The Pros: High Flexibility

- **Granularity:** Since every "unit" of oxygen is an entity, you can give it unique properties. One tank could have "Contaminated Oxygen" while another has "Pure Oxygen." In the KSP model, you’d need a whole new resource type in the config; in your model, it’s just a different stat or tag on that specific entity.
- **Uniform Systems:** Your physics, cargo, and trading systems don't need "special cases" for resources. A tank of gas is treated the same as a spare engine—it's just an entity attached to a parent.
- **Nested Logic:** You could easily handle complex states. For example, "Pressurized Oxygen" could be an entity that tracks its own temperature and pressure stats. If the temperature gets too high, the entity itself triggers a "boil-off" or "explode" function.

The Challenges: Performance & Scale

- **The "Granularity Trap":** If you treat *every* kilogram as an entity, a large ship with 10,000kg of fuel becomes a 10,000-entity nightmare for the CPU.
- **The Middle Ground:** You'd likely want to keep the entity as the "stack" (the total volume in a specific container) rather than the individual unit. One tank = one "Oxygen Entity" with a `mass` stat of 100.
- **Database Overhead:** Every time a thruster fires, you’re performing a database/component update on that entity. You’ll need to ensure your STATS array updates are highly optimized (essentially just a float subtraction) to avoid stuttering during high-burn maneuvers.

Comparison to KSP

KSP’s approach is basically a **Flyweight Pattern**: high performance, but very "static." Your approach is more of a **Dynamic Composition**: higher overhead, but allows for emergent gameplay (like fuel degradation, chemical reactions between mixed resources in a tank, or localized damage affecting specific resource "blobs").

If you're going for a "Hard Sci-Fi" or highly simulation-heavy game, your entity-based approach is definitely the way to go.

**What kind of scale are you imagining for these ships—small fighters with a few systems, or massive carriers with thousands of parts?**

Show all

should I set foreign keys for the relation tables? eg. entity\_components entityID: INTEGER FOREIGN KEY componentID: INTEGER FOREIGN KEY PRIMARY KEY (entityID, componentID)

In a high-performance game context, the answer is **"Yes, but with caveats."**

For your ECS (Entity-Component-System) structure, setting up foreign keys (FKs) in a junction table like `entity_components` is a classic **"Security vs. Speed"** trade-off.

1\. Why You Should Use Them

- **Referential Integrity:** It prevents "orphaned" components. If you delete an entity, the FK (with `ON DELETE CASCADE`) ensures all its components and stats are automatically wiped out.
- **Documentation & Tooling:** Many database tools use FKs to automatically map and visualize your schema, which is vital as your ship systems get more complex.
- **Optimizer Hints:** In some databases, FKs help the query planner eliminate unnecessary joins or choose better execution paths.

2\. The Performance Trade-off

- **Write Latency:** The main "cost" of a foreign key is during `INSERT`, `UPDATE`, or `DELETE`. The database must pause to check if the `entityID` actually exists in the parent table.
- **High Frequency Updates:** If your game loop is updating a fuel `mass` stat 60 times a second via SQL, the constant FK validation checks could create a bottleneck.

3\. Recommendation for Your ECS Approach

Since you are treating resources as entities to solve a "database problem," follow these best practices:

- **Development Phase:** **Keep the Foreign Keys.** The data safety and automatic cleanup (cascading deletes) are invaluable while you're still iterating on your logic.
- **Composite Primary Key:** Your design— `PRIMARY KEY (entityID, componentID)` —is perfect. It automatically creates an index that speeds up lookups, regardless of whether you have a formal FK constraint.
- **Optimization Strategy:** If performance becomes an issue later (e.g., thousands of entities updating every frame), you can:
	1. **Disable FK checks** during heavy simulation frames (if your DB engine allows).
		2. **Use In-Memory SQLite:** Storing the database in RAM can mitigate much of the lookup overhead.
		3. **Batch Updates:** Instead of one SQL call per resource, update all "Oxygen" entities in one transaction.

**Will you be handling the resource consumption logic directly in SQL queries, or will you pull the data into your game code for the calculations?**

- Are foreign keys really necessary in a database design? - Reddit
	22 Aug 2008 — \* SuperGrade. • 18y ago. They aren't necessary; but the defense they can provide the data may be priceless. I had their absence bu...
	Reddit·r/programming
- What Is a Foreign Key in SQL? | Relational Database Essentials
	\* What is a foreign key? A foreign key is a critical concept in relational databases. It acts as a bridge between two tables, esta...
	Lenovo
- Actually utilizing relational databases for entity systems
	18 Oct 2012 — Recently I was researching several entity systems and obviously I came across T=Machine's fantastic articles on the subject. In Pa...
	Game Development Stack Exchange

Show all

we don't write to the database 60 times a second. The minimum frequency layer where we start using the database directly for writes is per-second per entity

That makes the decision much easier. At a **1Hz update frequency**, the overhead of foreign keys is negligible, even with thousands of entities.

Given your design, you should definitely use them. Here is how to structure that junction table to maximize the benefits of your "resource-as-entity" approach:

Recommended Schema

```
CREATE TABLE entity_components (
    entity_id INTEGER NOT NULL,
    component_id INTEGER NOT NULL,
    PRIMARY KEY (entity_id, component_id),
    FOREIGN KEY (entity_id) REFERENCES entities(id) ON DELETE CASCADE,
    FOREIGN KEY (component_id) REFERENCES component_prototypes(id)
);
```

Why this works for your "Resources"

1. **Automated Cleanup:** By using `ON DELETE CASCADE`, if a "Tank" entity is destroyed, its "Oxygen" resource entity (and all its STATS entries) can be wiped from the DB automatically. You won't have "ghost oxygen" floating in your database.
2. **Validation:** It ensures you can't accidentally assign a "Pressurized Oxygen" component to an entity that doesn't exist.
3. **Indexing:** The `PRIMARY KEY` on the pair acts as a clustered index (in many DB engines). This means queries like `SELECT * FROM entity_components WHERE entity_id = X` will be lightning fast.

One Tip for "Resource Entities"

Since you are treating resources as entities within other entities (like Oxygen inside a Tank), you might eventually need a **`parent_entity_id`** column in your main `entities` table. This creates a hierarchy:

- **Ship** (Entity)
	- **Oxygen Tank** (Entity, Parent: Ship)
		- **Liquid O2** (Entity, Parent: Oxygen Tank)

This allows you to query the total mass of a ship by recursively summing the `STATS` of all children.

**Are you planning to use a standard SQL engine like SQLite for this, or an NoSQL/In-memory custom solution?**

Show all

how does REFERENCES work?

The `REFERENCES` keyword in SQL is the engine that actually drives **Referential Integrity** between your tables. It tells the database: "The values in this column MUST match an existing value in a specific column of another table".

Here is how it works under the hood for your game architecture:

1\. The Validation Shield

When you use `REFERENCES`, the database acts as a gatekeeper.

- **Insertion Check:** If you try to add a resource component (like "Pressurized Oxygen") to an `entityID` that doesn't exist in your `entities` table, the database will throw an error and block the write.
- **Update Check:** You cannot change a foreign key value to something that doesn't exist in the parent table.

2\. Parent-Child Relationships

In your ECS design, the table with the `REFERENCES` clause is the **Child table**, and the table it points to is the **Parent table**.

- **Parent:** `entities` (holds the unique ID).
- **Child:** `entity_components` (references that ID).

3\. Syntax Styles

There are two ways to write it, but they serve the same core purpose:

- **Column Level:** Written right next to the column definition. Useful for single columns.
	```
	entity_id INTEGER REFERENCES entities(id)
	```
- **Table Level:** Defined at the end of the table creation. This is required if you are using composite keys (like your `PRIMARY KEY (entityID, componentID)`).
	```
	FOREIGN KEY (entity_id) REFERENCES entities(id)
	```

4\. Handling Deletions (Cascading)

The real power of `REFERENCES` for game dev is the `ON DELETE` action. Without it, if you delete a "Tank" entity from the `entities` table, the database might stop you because that ID is still "referenced" by the resource component in another table.

By adding **`ON DELETE CASCADE`**, you tell the DB: "If the parent entity is destroyed, automatically destroy all its child component entries too". This keeps your database clean of orphaned data.

**Do you want to see an example of how to handle a resource "transfer" between two tanks using these constraints?**

- What is difference between foreign key and reference key?
	21 Dec 2011 — Comments.... The only and most important difference between the two keywords 'FOREIGN KEY" and "REFERENCES" keywords is though bo...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEAAQAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcBCAD/xAAxEAACAQMDAwIDBwUBAAAAAAABAgMABBEFEiEGEzFRcUFhkQcUIkJigaEyQ1KiwSP/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACARAAICAgICAwAAAAAAAAAAAAABAhEDIUFCBBITIjH/2gAMAwEAAhEDEQA/ABfqHo7V9JLSPD95txz3oMtx6keRQmxYcg1t41rU9PbbqVq00Y47kdfWlv0xqt+l6lpaPcA5ZXjA3+6+DXJ+eWN1NFyjGauLMRRZWj37cRr/AHDnH1q+0zqu00O9hazs/vUVujGP7wwXdMwwZCB4AHCipn2m6gdV6lOnafbdi3tB21t48BN3xbAGBQyOmtRKlgmaqUoNfbkXWTqjQtH+01JXWLVLJY4z/chYnaPY1X/aEYrnTkurZt0Rmyrcjgg0CT6ZfWmHmgbHzq4068nven7+0lLNHBslj+Oz8WCPbmi9EtxEzb7A62e4SD55rqkGl7P6Wx5GP3FOPGCglHg8Nj19aOzK0ep7iCKfIljVveqDUek7G7YyRr25P8l4P1oic8mkB/hU06ug4/hhbac2mdRauZv/AHMEuzc0gHJ5zmiDStRtrlTG0Hadf1BuPXNXWsaVarrd8tzHiO6cSrn28/Wouk6fp0ElylvGu1E2c4+gqe4yltHTxpqCp6Ku/ubG5PaSOVscM3ZJH1oV6asTJZ9RELhViKL7gk4/ijyDp3T4We8ikbLHdyx84pvRNMa30Jw67Vu+4yqfnnJ/erU0tEHkJ+tsybttJAwjXLJJ/BpSW8qEmRMIeGz6U9byyQSzrGMtwa48d3cyEvJt9+OK1umJi9Ho571hnJU0lb78XKZ9qyW8+0WYoeykbv8ArhK7f9qGdT6v1u9DI988cTcduD8A/jmoo4fIm9ukPeTFFGldd9QWY1qxs1GbgRlpGDD8IJ4HvVdGJJbotIsUjeOYyNw9M5rMrOci9SSZtwJwzNzwfjmj2zutQtVCxSbk/LuXNUxxOE0xmPMnjaCzToZtQvFtGCqcb5VXnamfP/KvtcjWOKAIqqq5VVXjisF1jV7xtaluILmeOSMbO4khU/PkVJg646gRkEuoSXCL+WbDcU9xb2R5J3aYzq1oE1G5jCsDHKw3L6ZNRB3CCGPdA9eD9as7/UIb/UJrq3GwSnftbznHI+fNQXcRSNFINrqcMvjn0ob4YKsr3xnPwNMHPj0pcrEA5FJByCT8aoSFHxkI425NFum9XJDockM0ObyMBI/1D4H3oSz4NNsdvvWSipKhuPI4O0ONLJJK7sdxc5b3rg4JNJBA8U/b2s94/ZtY2kkwW2r6Ac1gImCdkdWQ7WHPFTp5Hvp3uZpt08j5Zm/MfXxVSpIOCMEVJglKsGU4NDJK7N3wf//Z)
	Stack Overflow
- SQL FOREIGN KEY Constraint - W3Schools
	SQL FOREIGN KEY Constraint. The FOREIGN KEY constraint establishes a link between two tables, and prevents action that will destro...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABRCAMAAAB2ZgEHAAAAb1BMVEX///99SzKXb1v8/Pt1Oxh7SC6OY09/TjV6Rit4Qyd2PyB1PR2Zcl50OxrTxL6QZlHYy8XOvreKXkiFV0Dz7+1yNxGgfm/59vWlh3mfe2ne086RaVaDUzuympDs5eGylonDrqS6o5nl3NhpJgBuMAB+mS4LAAAEo0lEQVRYha2Y25KrIBBFBYMCkjFqcuItE+PM/3/jAfFCA2pSI0+pUld6s5umIQg+HN8/359+sjvy7HBkR65HIwv2LzyWmCUofx6LjAnJ0+5IYscRinH6dRzxHhOEUIqb/jDki0kiyTEWR9l+RypIqRw35f0Y5EMFOSjH6TG2X4kmKuX4GNufY5AoFop5gO3fdCQiIpVL5t9tL6cgESrwMP5qe78QledqVH9c7RVdkFo5Tss/EWuOjFEIzXz5Xs3fzFkzyFk5zj22h8/LW8TL2SROyiXTtf1VeWN3RgOCnJVL7Y7t1xa/Q/xKIHFWLm13Zq6M35jMe0os5KzcY3v/U+8jMztIQ7nH9qbbD7KwgzSV49Teh7+K3XXVuUEayiXTEhr+7tUUvT2sK5cDtiDhCaXlZlfy4h4iQgbRsl0i5bx06xXgzrxEU7llu0SiFqfVavV7+JFQObBdIUkucPrwJ+j15CciYioHtiskIpFkYt9y7ytPBmlkBJk1ROqZSUs7n3pxoygv3lAuv/6GSG1gA7vHvrrpalF4oVC57BfuFlIvB8OmGageFq0HmUPkbPuElLYPI3qFGniCRbd1oYUV5mT7jFS2Dw9EHdQWUEPjHeU4yiBysTAtW28u2lCVJxazhkhjQQjcelMnjgG0sJHa9tBM5cU9EfmQCrqlXKTCRhpVUIiVHDegVraLpiCRjZxsH99AKwtnpsYCANWfOMjJ9jHQfIU5QQkEepGQKW3yll9H+Qj0I635kYE6CQqiFYMp7fK1BwnL9Xo+oUm5AVxFxtiCphuBRin4xxUksF2rXw00thbpGhJatJFPNnAd6WHiys0nF7iBhNvfFCjMpwVI6PJgHWnbrqHR8ukCZLQpc8amM9EG0rYd2LQAKX+q2tM/x3K4hXRsH/MJABGfz7z3B2N7SI9FOlDTFHP360tGt5HObjWMCJTLBm7RNabbSLsaDkBgukJm/8y9X9BtpG17ZFcliexuZ/MYXbJ0B4m8QDL/aILqdDL71ZL/20O2LpCdmmZKwia4vkBr+gaSDHugWID0VtZze2jbMyNvG0iVSgYQnSsV1NxxUrt9fgcpmYYpt274cGlikx94mqjYrnDFXH7exgZ0RnLYO2cFZdUbSIuYnR4zkoFrmKxN6DmuP0Geler6l7LgJbtEylvahhCYFONxR80VoSs9/jLY0D3Wv4mcvbpJRH/ltQE8U74czuVs8bjsNvdWaW6ke9xerz/ldLfMoQRGxoEM8dflHvTqDE/Y6v7KnEPMvZ6BDAAlUkkJLglhLOrWtkLu3gT0MpAgzHIJbKwjo3796zd/9uPdnztI5ByKvrt+BRiEXCbTRf+nfFElviufO0eiiwJGCUsaz2npq5EPxOReRAjNhMVknguhAXj2AdVDDdUPO5Wt1lUGiZ0juwZ6z3MzVM7JAL0imR8hvHDh9rWABHJ2Fjv3QQNU/eswpSDMoRR8DFTjIqHTZIMwY1jBspyz04ZkCI1USlzGMNl53O1zACw+AA7Q/MR4qj5obt31eWIWcgA2b1wDwUglNLoEF2XJ9UlNZNZyevsUqEaNCUmmqsJnZJjFnBCxC/wPOT1KM0zmE/oAAAAASUVORK5CYII=)
	W3Schools
- How do foreign keys work in SQL? - Milvus
	How do foreign keys work in SQL? \* What Are Foreign Keys and Their Purpose? A foreign key in SQL is a column or set of columns in...
	Milvus

Show all

so, if my entity table is called "MAGPIE\_ENTITY", do I write REFERENCES MAGPIE\_ENTITY(ID)?

Exactly. If your main table is named `MAGPIE_ENTITY`, the syntax to link it would be `REFERENCES MAGPIE_ENTITY(ID)`.

Using your specific table name, here is how you would write that `entity_components` table:

```
CREATE TABLE entity_components (
    entity_id INTEGER NOT NULL,
    component_id INTEGER NOT NULL,
    PRIMARY KEY (entity_id, component_id),
    -- This is the "References" part
    FOREIGN KEY (entity_id) REFERENCES MAGPIE_ENTITY(ID) ON DELETE CASCADE
);
```

3 Rules for Table Naming in `REFERENCES`

1. **Exact Matching:** The name in your query must match the name used in your `CREATE TABLE MAGPIE_ENTITY` statement.
2. **Case Sensitivity:** By default, SQL is case-insensitive for table names (so `magpie_entity` often works), but if you ever move to a Linux-based server or a specific database like PostgreSQL, they can become strict about case. It is best practice to **keep it consistent** with your creation script.
3. **Parent Primary Key:** The column inside the parentheses— `(ID)` —must be the **Primary Key** or have a **Unique** constraint in the `MAGPIE_ENTITY` table.

Why this is perfect for your "Resource Entity" idea:

By using `REFERENCES MAGPIE_ENTITY(ID) ON DELETE CASCADE`, you have built an automatic cleanup system. If you destroy a ship in your game and delete its row from `MAGPIE_ENTITY`, the database will automatically "know" to delete all the components and resource stats associated with that ship's ID.

**Does your `MAGPIE_ENTITY` table already have a parent-child relationship column (like a `OWNER_ID`) so tanks can "belong" to ships?**

- SQL Foreign Key: Purpose, Syntax, and Implementation - Mimo
	SQL Create Table Foreign Key Example.... CREATE TABLE Orders ( order\_id INT PRIMARY KEY, customer\_id INT, order\_date DATE, FOREIG...
	Mimo
- What Is a Foreign Key in SQL? – Referential Integrity, Rules, and...
	31 Jul 2025 — Foreign key syntax \* Define a foreign key during table creation. CREATE TABLE Customers ( customer\_id INT PRIMARY KEY, name VARCHA...![](data:image/jpeg;base64,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)
	DbSchema
- SQL FOREIGN KEY - Syntax, Use Cases, and Examples - Hightouch
	SQL FOREIGN KEY \* What is SQL FOREIGN KEY? A FOREIGN KEY constraint in SQL is a database constraint that defines a relationship be...
	Hightouch

Show all

so, for the exp\_keys relation table, do I write expID:... keyID:... PRIMARY KEY (expID, keyID) FOREIGN KEY (expID) REFERENCES MAGPIE\_EXP(ID) ON DELETE CASCADE FOREIGN KEY (keyID) REFERENCES MAGPIE\_KEY(ID)

Yes, that is exactly correct. Your syntax follows the standard SQL pattern for a **junction table** (many-to-many relationship) perfectly.

Here is how that specific setup will behave in your game:

- **`ON DELETE CASCADE` on `expID`**: This is the "Cleanup" rule. If an Experience/Exploration record (`MAGPIE_EXP`) is deleted, all the associated key mappings in this table vanish automatically. This is usually what you want for session-based or event-based data.
- **No Cascade on `keyID`**: By leaving `ON DELETE CASCADE` off the `keyID`, the database will actually **prevent** you from deleting a Key Prototype (`MAGPIE_KEY`) if it is currently being used by an Experience. This acts as a safety net so you don't accidentally delete a global item definition that players are currently holding or using.

A Small Polish Tip

If you are using **SQLite**, remember that foreign key constraints are often **disabled by default** for backward compatibility. To make these `REFERENCES` actually work, you usually need to run this command right after you connect to the database:

```
PRAGMA foreign_keys = ON;
```

The result for your Resource System

If `MAGPIE_EXP` represents a "Mining Expedition" and `MAGPIE_KEY` represents the "Oxygen" resource type, this table successfully "locks" them together. You can delete the expedition when it's over, and the mapping will clean itself up, but your "Oxygen" definition remains safe in its own table.

**Are you planning to add a "Value" or "Amount" column to this junction table to track how much of that Key/Resource is involved in the Experience?**

Show all

what about the MAGPIE\_ENTITY table for the hostID and compoundID relations? hostID:... compoundID:... FOREIGN KEY (hostID) REFERENCES MAGPIE\_ENTITY(ID) FOREIGN KEY (compoundID) REFERENCES MAGPIE\_ENTITY(ID)

Yes, exactly. When you have columns like `hostID` and `compoundID` that point back to other entries in the same table, you are creating **Self-Referential Foreign Keys**.

This is a common and powerful pattern for building hierarchies or assembly structures in game databases. Your syntax would look like this:

```
CREATE TABLE MAGPIE_ENTITY (
    ID INTEGER PRIMARY KEY,
    -- ... other columns ...
    hostID INTEGER,
    compoundID INTEGER,
    
    -- Both point back to the ID column of this same table
    FOREIGN KEY (hostID) REFERENCES MAGPIE_ENTITY(ID),
    FOREIGN KEY (compoundID) REFERENCES MAGPIE_ENTITY(ID)
);
```

Why this is great for your resource-as-entity model:

- **The Hierarchy (hostID):** This lets an entity "live" inside another. For example, a `GasTank` entity can be the `hostID` for a `LiquidOxygen` entity.
- **The Assembly (compoundID):** This can represent "parts of a whole." If a ship is a compound of several modules, you can link them all back to a main "root" entity.
- **Data Integrity:** The database ensures you can't assign a "host" or "compound" that doesn't actually exist in your list of entities.

A Note on Deletions (`ON DELETE`)

You’ll need to decide how the hierarchy handles destruction:

- **`ON DELETE SET NULL`**: If a host ship is deleted, the fuel tank entities inside it stick around but lose their "host" connection.
- **`ON DELETE CASCADE`**: If the host ship is deleted, all fuel tanks and components inside it are also deleted.

**Warning:** Be careful with `CASCADE` on self-referential tables in some DB engines (like SQL Server), as they can sometimes block multiple cascade paths to avoid circular loops. For simple parent-child links in SQLite or PostgreSQL, it usually works fine.

**Should we add these `ON DELETE` rules now, or do you want to keep the entities around even after their host is gone?**

- How to Add Foreign Key in PhpMyAdmin (2024)
	23 Jun 2024 — welcome to this video guys let's see how we can create foreign key and php my admin first of all I have two tables here there is c...![](data:image/jpeg;base64,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)
	3:52
	YouTube·The Code City
- Multiple foreign keys to the same table in a database?
	23 Oct 2014 — Yes, since all users of your system are also Employees modelled by your system, if you wish to have Referential Integrity (RI) enf...![](data:image/jpeg;base64,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)
	Stack Overflow
- Create Foreign Key Relationships - SQL Server - Microsoft Learn
	18 Nov 2025 — Limitations \* A foreign key constraint doesn't have to be linked only to a primary key constraint in another table. Foreign keys c...
	Microsoft Learn

Show all

entity\_children (entity has parents many to many relation) tables.set("logs", logs); const entities = this.sync.createWorldTable("MAGPIE\_ENTITY", { ID: integerKey, type: integer, updated: integer, compundID: integer, hostID: integer, data: blob, "FOREIGN KEY": "(compoundID) REFERENCES MAGPIE\_ENTITY(ID)", "FOREIGN KEY": "(hostID) REFERENCES MAGPIE\_ENTITY(ID)" }); tables.set("entities", entities); const entity\_parent = this.sync.createWorldTable("entity\_parent", { type: integer, desc: text }) const entity\_children = this.sync.createWorldTable("entity\_children", { parentID: integer, childID: integer, parentType: integer, "PRIMARY KEY": "(parentID, childID, parentType)", "FOREIGN KEY": "(parentID) REFERENCES MAGPIE\_ENTITY(ID)", "FOREIGN KEY": "(childID) REFERENCES MAGPIE\_ENTITY(ID)", "FOREIGN KEY": "(parentType) REFERENCES entity\_parent(type)" }) tables.set("entity\_children", entity\_children);

Your setup looks solid, but there is a **syntax conflict** in how you're defining the keys. In a JavaScript object literal, you cannot have duplicate keys.

Since you have multiple `"FOREIGN KEY"` entries in the same object, the second one will overwrite the first. To fix this, you usually need to pass them as an array or use unique keys if your `createWorldTable` helper supports it.

Here is the corrected logic:

1\. Fix the Duplicate Keys

You should group your constraints or use a format your library recognizes for multiple keys. If it follows standard SQL generation, it might look like this:

```
const entities = this.sync.createWorldTable("MAGPIE_ENTITY", {
    ID: integerKey,
    type: integer,
    updated: integer,
    compoundID: integer, // Fixed typo: compundID -> compoundID
    hostID: integer,
    data: blob,
    // Combine them into a single string if the library allows, 
    // or use an array if supported:
    "CONSTRAINT_FK_1": "FOREIGN KEY (compoundID) REFERENCES MAGPIE_ENTITY(ID)",
    "CONSTRAINT_FK_2": "FOREIGN KEY (hostID) REFERENCES MAGPIE_ENTITY(ID)"
});
```

2\. Typo Alert

In your `entities` definition, you wrote `compundID` (missing an 'o'). Make sure it matches the `compoundID` used in your `FOREIGN KEY` declaration.

3\. The `entity_children` logic

Your many-to-many table for `entity_children` is perfect for complex hierarchies.

- **`parentType`** is a great addition—it lets you define *why* they are related (e.g., "ParentType 1 = Cargo", "ParentType 2 = Docked Ship", "ParentType 3 = Resource Stack").
- The **Triple Primary Key** `(parentID, childID, parentType)` is very smart because it allows the same child to be attached to the same parent for different reasons (different types) without causing a unique constraint error.

4\. A Note on `entity_parent`

In your `entity_parent` table, make sure `type` is set as a **PRIMARY KEY**. If it isn't, the `FOREIGN KEY` in `entity_children` will fail because it won't have a unique column to point to.

**Does your `createWorldTable` helper allow you to pass the constraints as an array, or should we combine the foreign key strings into one entry?**

Show all

for the compound primary key, do I add WITHOUT ROWID?

**Searching**

For your **`entity_children`** junction table, adding `WITHOUT ROWID` is a **highly recommended optimization**.

In standard SQLite, a table with a compound primary key is stored as two separate structures: the main table (indexed by an internal hidden `rowid`) and a second index for your primary key. By adding `WITHOUT ROWID`, you merge these into a single "clustered index".

Why it’s better for your junction table:

- **Space Savings:** You stop storing the data twice. In a junction table like `entity_children`, the entire "data" is already part of the Primary Key.
- **Faster Lookups:** Finding a child for a parent (or vice versa) takes only **one binary search** instead of two.
- **Ideal Row Size:** This optimization works best for small rows (under ~200-500 bytes). Since your junction table only has three integers, it fits this perfectly.

Important Restrictions:

1. **Strict NOT NULL:** Every column in the Primary Key is automatically `NOT NULL`. You must provide values for `parentID`, `childID`, and `parentType` every time.
2. **No AUTOINCREMENT:** You cannot use `AUTOINCREMENT` on a `WITHOUT ROWID` table. (Since you are providing existing IDs, this shouldn't be an issue).
3. **No `last_insert_rowid()`:** Calling this function will not return a value for this table.

Example Implementation:

```
const entity_children = this.sync.createWorldTable("entity_children", {
    parentID: integer,
    childID: integer,
    parentType: integer,
    "PRIMARY KEY": "(parentID, childID, parentType)",
    "WITHOUT ROWID": "", // Include this flag at the end
    "FOREIGN KEY (parentID)": "REFERENCES MAGPIE_ENTITY(ID) ON DELETE CASCADE",
    "FOREIGN KEY (childID)": "REFERENCES MAGPIE_ENTITY(ID) ON DELETE CASCADE",
    "FOREIGN KEY (parentType)": "REFERENCES entity_parent(type)"
});
```

**Note on `MAGPIE_ENTITY`:** Do **NOT** use `WITHOUT ROWID` for your main `MAGPIE_ENTITY` table. Because that table has a single `INTEGER PRIMARY KEY (ID)`, SQLite already optimizes it as an alias for the `rowid`. Adding `WITHOUT ROWID` there would actually make it slightly *slower*.

**Would you like me to review the `ON DELETE` logic for these child relations to make sure your ships don't accidentally "disappear" if a cargo item is deleted?**

- Clustered Indexes and the WITHOUT ROWID Optimization
	31 May 2025 — \* 1. Introduction. By default, every row in SQLite has a special column, usually called the "rowid", that uniquely identifies that...
	SQLite
- Benchmarking without rowid tables - High Performance SQLite
	\* Performance: The standard rowid table ( KV1 ) was already highly performant, with p99 reads at roughly 0.89ms. The WITHOUT ROWID...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAkgMBEQACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALhAAAgIBBAAEBAUFAAAAAAAAAAECESEDBDFBBRJhcRMiUYEGFDJCoRZVk8HS/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFB//EAC0RAQEAAgEDAwEFCQAAAAAAAAABAhEDITFBBBITBVFhcaHwFBUiU4GRwdHh/9oADAMBAAIRAxEAPwDirJ8J+nqSoIvhBDWQi9KNzSRYzldRpunepX0SVlrPHOjBK2ZdKaWSh0EEeQDACpANAQ8simlnALTlhWVIyfb+pG01YVAGzzQRXQQnl2Ds0grKzVacvLqX9BEym4c15rYSdExQaNLISm1kJEdhouwGAgoAqHIZqWGkNYIu0hUWFaBDQFJWVlSb6CBOkwU0ECQVa4KzQyERWQ0OwCgE+QEBUP1IJl2GpGm6FMazawRvaHhBUUFaUEUkEU2Vk1w2A2qXugm+prhgoiBoqorCXyFgrsi7SwpPkBcMKTAceglVqv5mKY9mT4I2zeWFIK0eAkXFdhimUNfofuDyaWH7hL3NchHX4VsX4jvlto6nwri35nHzcehvDH3XTzeq9R+z8Xv1t7v9Hz/uEf8AA/8Ao7fB975v75n8v8/+ODxHwN7Lcx0pblzT0ZarlHSzUekrzyYy4vbdPTwfUPmw90x11k7/AG/fpnqfh/ew86lLRTjqOCy81m+MKqf3J8WS4/UuG6sl7bTqeAb2M2k9JqNJycqSdJtfax8WTWP1Lis31/X+3Hvthudj5PzKivM2klK2qrlezTM5YXHu9PB6nj59+xyvow9AaAEA9R3mhUxQlZGtofIaTQGrVpBFRWMlZHIDXCAqHNdFZoq5Mh2j0/w/udHZeJQ19xNx01CSbUW8/Y68dmOW68Pr+LPl4bhhOr6fV/Efhvw5fC3K+JXy+fR1Kv1wej5cPFfFx+m+p3/Fj0/GPH3vi23199s9eerCUtPRlGcoQnCKk+KtN/wzllnLlK9/F6Pkw4s8JO9mu1uv76/OOeO58Lj8nxt0oOSqUJyUoR8rtJdfNWM4ruzPuwdbw+qvW4zf9Ot3P8fh1340y1t1so7bV/L7jcvXcIqNzlSl5k3XpXHeXfRLljro3hw81znvxnt3fE+z9b8dteXlT1JzxqTnOm680r5dv+Tk+hjhjj2mi6XoGvJBQ0Ar+XIPJJgZtZI3Cp/UDWrdlZU3gISAqPISqi8hLBF5ZUpttLANJuyLoTBikNHBWwlpSVMEFgJsKaANTgJEXSI15ZsNFXuBr5qiVnQUr6wQ0pcFSi8g0EwaV6hKTbYJAkFVLIZiHyGji6YSiQWAIUgsDXAEyCxHZGiaAnP1Crl+kJDg8UwlX+0qeR2QKwKRUrVw+QOcy6s3gNqvANM5BYqHOAlNgO8BNE2gsS5BSbsKiRFiWwpWgoTtBDT+gGj4KySeSKOWBslUbwVzt6i8VdhNJ5v0DRJWFDi+gbVC0glptIqbJkVLYUugqW6RFQ3YVIUqAcQKXKCNGESFVEMrn17BII8FKH/sI2XBfDmP2BfKV2FLsCZ8EajNhonwBL4I1EASwpgf/9k=)
	Database School
- Faster SQLite Lookup Using Without Rowid Optimization
	17 Feb 2021 — Faster SQLite Lookup Using Without Rowid Optimization.... TL;DR: A WITHOUT ROWID table can reduce DB size and perform query faste...![](data:image/jpeg;base64,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)
	Medium·Tam H. Doan

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com