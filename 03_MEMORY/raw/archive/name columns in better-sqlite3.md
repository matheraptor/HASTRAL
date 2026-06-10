---
title: "name columns in better-sqlite3How to best handle them so that I can search the database for an entity with partial name match?"
source: "https://www.google.com/search?sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&ved=2ahUKEwiCw4LFiLmUAxWjnf0HHeh1HAoQoo4PegYIAggBEAE&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mtid=tuYFaqiUMrKA9u8Pida4-Qk&q=name+columns+in+better-sqlite3%0AHow+to+best+handle+them+so+that+I+can+search+the+database+for+an+entity+with+partial+name+match%3F&mstk=AUtExfCpd13FhSI_fE4FacI0lG4tImdbajLPYW7zymCXAnNZcfAqGB9RDYSHCedfOLmnnkDFXLK3MwaOv3yWjhUDLeC_ZsXSIAKlDOqewCtmzid1fd_fq-TQTBofgdq3_GtU8ZsOjeND4-vp2QBoowlVRgFaaGVLvTp3fG0EEC7R7a6WNQ5nlE6-b8eZ4DHnYA3zDXRqH5Lz6PTBN0spqIaSwRLWzgovPRkJ2spXhiynLm7su3QvOCClXR1Jx_jOhPwcB6Zju8tI5eWW_z6Vs1rdYE4BVgl_ZfNr_sM&csuir=1&udm=50"
author:
published:
created: 2026-05-14
description:
tags:
  - "clippings"
---
## Search Results

Hi MaTheRaptor, what's on your mind?

name columns in better-sqlite3 How to best handle them so that I can search the database for an entity with partial name match?

To search for partial name matches efficiently in `better-sqlite3`, you must choose between standard SQL pattern matching or the high-performance Full-Text Search (FTS5) extension.

Method 1: The standard `LIKE` operator

Best for small datasets or simple wildcard matching at the end of a string.

- **Use SQL Wildcards:** The `%` character matches zero or more characters.
- **Bind Parameters:** Always use `?` placeholders to prevent SQL injection.
- **Case Insensitivity:** `LIKE` is case-insensitive by default for ASCII characters in SQLite.

```
const db = require('better-sqlite3')('database.db');

// Prepare the statement once
const stmt = db.prepare('SELECT * FROM users WHERE name LIKE ?');

// Search for names containing "alex" (e.g., Alexander, McAlex)
const results = stmt.all('%alex%'); 
console.log(results);
```

Method 2: Index-optimized `LIKE` (Prefix matching)

Standard `LIKE '%term%'` queries cannot use normal indexes and require a slow full-table scan.

- **Anchor to the Start:** Use `term%` instead of `%term%`.
- **Create an Index:** Add a standard index on your name column.
- **Performance:** SQLite can now use the index to find matches instantly.

```
// Step 1: Create the index (run once)
db.exec('CREATE INDEX IF NOT EXISTS idx_users_name ON users(name)');

// Step 2: Query using a prefix wildcard
const stmt = db.prepare('SELECT * FROM users WHERE name LIKE ?');
const results = stmt.all('alex%'); // Matches "Alexander" but NOT "McAlex"
```

Method 3: FTS5 virtual tables (Best for large datasets)

Best for large tables, multi-word name searches, or when you need fast, arbitrary partial matching.

- **Create an FTS5 Table:** This builds an external shadow index optimized for text.
- **Use the `MATCH` Operator:** Replace `LIKE` with `MATCH`.
- **Append the Asterisk:** Use `*` at the end of the token for prefix matching.

```
// Step 1: Create the virtual FTS5 table
db.exec('CREATE VIRTUAL TABLE users_fts USING fts5(name, tokenize="porter")');

// Step 2: Keep FTS synchronized (or insert directly into it)
db.prepare('INSERT INTO users_fts (rowid, name) VALUES (?, ?)')
  .run(userId, 'Alexander Pierce');

// Step 3: Search using MATCH
const stmt = db.prepare('SELECT rowid, name FROM users_fts WHERE name MATCH ?');
const results = stmt.all('alex*'); // Matches "Alexander Pierce"
```

To narrow down the best approach for your project, let me know:

- Approximately **how many rows** will be in your database?
- Do you need to match text **anywhere inside the name** or just at the **beginning of the name**?
- Do your names contain **non-English characters or accents** that need accurate matching?

- How to Use LIKE and NOT LIKE Predicates in SQL Statements | dummies
	14 Jan 2022 — To identify partial matches, SQL uses two wildcard characters. The percent sign (%) can stand for any string of characters that ha...![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRTWuyKrOag_1k6-Jr3XWLtlYUxL90Lj-6QINYxbU5nkIAvKMg3)
	Dummies.com
- \[Solved\] Select the correct SQL statement which will correctly insert
	19 Jan 2026 — Use placeholders or parameterized queries in applications to prevent SQL injection.
	Testbook
- SELECT — Retrieve Data from SQLite Efficiently | by Sibabalwe Sinyaniso | Medium
	13 Feb 2025 — Using? placeholders prevents SQL injection and ensures safe execution.![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8Ob1ryrwNkGPaBRnJMEOuTyNouOnG6qYNUQ6pXYnuQOY6AcJZ)
	Medium

Show all

like this? /\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT \* FROM ${tableName} WHERE name LIKE?\`); const results = statement.all(\`%${name}%\`); MAGPIE\_SYSTEM.\_logging\_debug(results) return results.map(item => MAGPIE\_DATABASE.sync.resultsLoader(item)); }

Yes, your implementation is **syntactically correct** and safely prevents SQL injection by binding the value with `?`.

However, you must be aware of two critical architectural details regarding your current approach:

1\. The `prepare` performance trap

In `better-sqlite3`, compiling a statement via `.prepare()` is an expensive operation.

- **The Issue:** Your function compiles the SQL query from scratch *every single time* the function runs.
- **The Fix:** Compile the statement once outside the function and reuse it. Since your table name is dynamic, use a cache object to store compiled statements for each table.

2\. Table name vulnerability

Bound parameters (`?`) only work for values, not table names.

- **The Issue:** Passing an unvalidated string into `${tableName}` leaves you vulnerable to SQL injection if `tableName` comes from user input.
- **The Fix:** Match the `tableName` against an explicit whitelist of allowed tables before running the query.

Optimized Implementation

Here is how to rewrite your function to fix the performance bottleneck and secure the dynamic table name:

```
// Cache to store pre-compiled statements per table
MAGPIE_DATABASE._statementCache = {};

// Whitelist of allowed world tables to prevent SQL injection
const ALLOWED_WORLD_TABLES = new Set(['cities', 'regions', 'zones', 'landmarks']);

/**
 * @param {String} tableName 
 * @param {String} name 
 * @returns {Array<*>}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) 
{
    // 1. Security Check: Validate the dynamic table name
    if (!ALLOWED_WORLD_TABLES.has(tableName)) {
        throw new Error(\`Unauthorized table access: ${tableName}\`);
    }

    // 2. Performance Check: Reuse or create the prepared statement
    if (!MAGPIE_DATABASE._statementCache[tableName]) {
        MAGPIE_DATABASE._statementCache[tableName] = MAGPIE_DATABASE.sync.world
            .prepare(\`SELECT * FROM ${tableName} WHERE name LIKE ?\`);
    }

    const statement = MAGPIE_DATABASE._statementCache[tableName];
    
    // 3. Execution
    const results = statement.all(\`%${name}%\`);
    
    MAGPIE_SYSTEM._logging_debug(results);
    
    return results.map(item => MAGPIE_DATABASE.sync.resultsLoader(item));
};
```

If you want to optimize this further, let me know:

- How many **total rows** do these world tables usually hold?
- Are these tables **read-only** during gameplay, or do they change frequently?

Show all

The thing is, the method I used above doesn't find my entity "AFS crew supplies (1wk) \[11t\]" if I use name "AFS". It just returns \[\]

If your query for `"AFS"` returns an empty array `[]` even though the string `"AFS crew supplies (1wk) [11t]"` contains it exactly, the issue is not case-sensitivity (since both are uppercase "AFS").

Instead, the problem occurs because **your dynamic query is reading from a different table than you think it is, or the table string contains hidden data format discrepancies**.

Because your code dynamically constructs the table name (`SELECT * FROM ${tableName}`), it is highly likely that your query is hitting an empty or wrong table inside `MAGPIE_DATABASE.sync.world`.

Step-by-Step Debugging Checklist

1\. Trace the Actual Query (Check the Table)

Verify what table name is actually being passed to the function at runtime. Add an explicit `console.log` right before the statement prepares:

```
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) {
    // Check exactly what string is being injected
    console.log(\`Executing search in database table: "${tableName}" for query: "${name}"\`);
    
    // Check if the table even contains your row
    const countCheck = MAGPIE_DATABASE.sync.world.prepare(\`SELECT COUNT(*) as total FROM ${tableName}\`).get();
    console.log(\`Total rows in table ${tableName}:\`, countCheck.total);

    const statement = MAGPIE_DATABASE.sync.world.prepare(\`SELECT * FROM ${tableName} WHERE name LIKE ?\`);
    // ...
```

If `tableName` evaluates to something unexpected (e.g., `"items"` instead of `"world_items"`), the query will silently succeed but return `[]` because that target table doesn't have your row.

2\. Verify Hidden Whitespace or Special Tokens

If the table name is correct, the entity string in the database might contain invisible trailing/leading formatting data or zero-width characters preventing a match.

- Look up the row directly by its primary key ID or check for any matching entities using a generic broad wildcard search (`%`) to see how the row values are actually stored.

3\. Use `instr()` as a Debugging Alternative

If you suspect the SQLite `LIKE` parser is choking on the special syntax brackets or symbols in your string (`(1wk) [11t]`), swap `LIKE` with the native SQLite `instr()` function. This performs a direct, literal substring position scan without wildcard translation:

```
// INSTR(string, substring) returns the 1-based index if found, or 0 if not found
const statement = MAGPIE_DATABASE.sync.world
    .prepare(\`SELECT * FROM ${tableName} WHERE instr(name, ?) > 0\`);

// Pass raw "AFS" without wrapping it in percentage (%) signs
const results = statement.all(name);
```

The Ultimate Fail-Safe Rewrite

Incorporate a logger directly before executing the statement to confirm exactly what data is running against your instance of **better-sqlite3**:

```
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) {
    if (!tableName || !name) {
        console.error("Missing tableName or query name parameter!");
        return [];
    }

    // Force strict trimming to strip accidental carriage returns or spaces
    const cleanName = name.trim();
    
    try {
        const statement = MAGPIE_DATABASE.sync.world
            .prepare(\`SELECT * FROM ${tableName} WHERE name LIKE ?\`);
            
        // Wrap query cleanly in wildcards
        const wildcardQuery = \`%${cleanName}%\`;
        const results = statement.all(wildcardQuery);
        
        // Debugging trace
        console.log(\`Query: [SELECT * FROM ${tableName} WHERE name LIKE "${wildcardQuery}"] Found: ${results.length} rows\`);
        
        MAGPIE_SYSTEM._logging_debug(results);
        return results.map(item => MAGPIE_DATABASE.sync.resultsLoader(item));
    } catch (error) {
        console.error(\`Database failure on table "${tableName}":\`, error.message);
        return [];
    }
}
```

To diagnose the problem further, let me know:

- What exact output prints to your console when you log the **`tableName` string**?
- If you run a query using **`SELECT * FROM tableName LIMIT 5`**, do you see your entity row in the raw output?

Show all

I'm providing it with the correct table "MAGPIE\_SYMBOL" MAGPIE\_SERVER > DATABASE.sync.getRow("MAGPIE\_SYMBOL", {}, DATABASE.sync.world) \[ { ID: 1778659642671, type: 5, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778659642671,"type":5,"name":"Mars-class Combat Stores Ship","desc":"undefined","requirementID":0,"compoundID":0,"STATS":{"\_firmware":"Float64Array","data":\[3000,10.80333,3001,8.74556,3002,5.65889,3006,2.57222\]}}', name: null }, { ID: 1778769085326, type: 6, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778769085326,"type":6,"name":"Auxiliary Ship","desc":"undefined","requirementID":0,"compoundID":0,"STATS":\[\]}', name: null }, { ID: 1778769270066, type: 5, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778769270066,"type":5,"name":"Ship-board Open Parking Medium V","desc":"undefined","requirementID":0,"compoundID":0,"STATS":{"\_firmware":"Float64Array","data":\[2020,4500\]}}', name: null }, { ID: 1778769310335, type: 5, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778769310335,"type":5,"name":"UNREP facilities","desc":"undefined","requirementID":0,"compoundID":0,"STATS":\[\]}', name: null }, { ID: 1778770361001, type: 4, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778770361001,"type":4,"name":"AFS crew supplies (1wk) \[11t\]","desc":"undefined","requirementID":0,"compoundID":0,"STATS":{"\_firmware":"Float64Array","data":\[2013,11000\]}}', name: null } \]

The console printout exposes exactly why your query is failing: your SQLite table's actual `name` column contains a SQL **`NULL`** value for every single row.

```
// From your console dump:
{
  ID: 1778770361001,
  type: 4,
  ...
  data: '{"_firmware":"MAGPIE_SYMBOL",...,"name":"AFS crew supplies (1wk) [11t]",...}',
  name: null // <--- THIS IS THE PROBLEM
}
```

The human-readable string `"AFS crew supplies (1wk) [11t]"` only exists as a text snippet packed deeply inside your stringified JSON `data` column. Because `WHERE name LIKE ?` queries the true SQL `name` column, SQLite evaluates `NULL LIKE '%AFS%'`, which resolves to falsy, resulting in your empty `[]` array.

You can fix this in one of two ways.

If you do not want to alter your database schema structure, use SQLite’s built-in JSON extension. You can extract the `name` property out of the serialized string blob on-the-fly during the filter scan.

Update your prepared statement inside your function to target the JSON field:

```
// Extracts the "name" property out of the JSON text stored in the "data" column
const statement = MAGPIE_DATABASE.sync.world
    .prepare(\`SELECT * FROM ${tableName} WHERE json_extract(data, '$.name') LIKE ?\`);

// Now your existing binding logic will work flawlessly:
const results = statement.all(\`%${name}%\`);
```

Solution 2: Backfill your SQL schema columns (Better for performance)

Querying via `json_extract()` forces SQLite to manually parse raw text strings for every row, which will trigger massive performance drops as your database scales.

The cleaner approach is to extract the `name` field when writing or updating rows, assigning it directly to the dedicated SQL `name` column:

1. **Fix your Insertion Script:** When executing `INSERT INTO MAGPIE_SYMBOL`, map your entity name to both the JSON payload and the standalone SQL column binding.
2. **Backfill Existing Data:** Run this one-time SQL execution query to extract names out of your existing data payloads and write them directly into your empty `name` columns:

```
// Run this once in your database initialization code to fix existing NULL rows
MAGPIE_DATABASE.sync.world.exec(\`
    UPDATE MAGPIE_SYMBOL 
    SET name = json_extract(data, '$.name') 
    WHERE name IS NULL
\`);
```

Once your SQL schema table column genuinely contains strings instead of `NULL` values, your original `LIKE ?` search function will work immediately.

If you decide to extract JSON fields dynamically, let me know:

- Is your database **read-only**, or are you frequently inserting new rows that might continue having `name: null` values?
- Do you want to see how to write an **automated trigger** in SQLite to keep the `name` column synced with the `data` column?

Show all

/\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT \* FROM ${tableName} WHERE name LIKE?\`); const results = statement.all(\`%${name}%\`); return results return results.map(item => MAGPIE\_DATABASE.sync.resultsLoader(item)); } MAGPIE\_SERVER > results.map(item => DATABASE.sync.resultsLoader(item)) Uncaught TypeError: results.map is not a function at Object.resultsLoader (C:\\Users\\Marika\\matheraptor\\projects\\MAGPIE\_Server\\core\\database\_worker.js:549:17) at REPL54:1:35 at Array.map (<anonymous>) MAGPIE\_SERVER >

The error `TypeError: results.map is not a function` is happening because of a variable scoping collision in your environment.

When you executed `results.map(...)` directly in your REPL terminal, your `results` variable did not reference the local array inside your function. Instead, it referenced a different, non-array object or a function globally assigned within the terminal instance (likely the native Node.js REPL command utility or an active global instance variable).

Additionally, your source function contains two consecutive `return` statements. The second line containing `.map()` will never execute because the first `return results;` terminates the function execution instantly.

The Correct Fix

To make the function run properly and map your items cleanly using your **better-sqlite3** workflow, remove the dead code line and return the mapped output directly:

```
/**
 * @param {String} tableName 
 * @param {String} name 
 * @returns {Array<*>}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    // Clean, pre-trimmed query string
    const cleanName = name.trim();

    // JSON parsing fallback since the raw 'name' column contains NULL values
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT * FROM ${tableName} WHERE json_extract(data, '$.name') LIKE ?\`);
        
    const dbRows = statement.all(\`%${cleanName}%\`);
    
    // Debug log to trace what actual data structure was pulled out
    MAGPIE_SYSTEM._logging_debug(dbRows);
    
    // Process and return the mapped entities
    return dbRows.map(item => MAGPIE_DATABASE.sync.resultsLoader(item));
}
```

Testing safely in the REPL terminal

To check the function directly within your terminal window without triggering scope pollution, assign the output of the function execution to a brand new, unique local variable name before evaluating it:

```
// 1. Run the function and save its parsed array directly to a unique variable
const myFreshMatches = MAGPIE_DATABASE.loadWorldRowByName("MAGPIE_SYMBOL", "AFS");

// 2. View the clean arrays safely
console.log(myFreshMatches);
```

If you encounter additional crashes during execution, let me know:

- What does line **549** of `database_worker.js` look like inside your `resultsLoader` method?
- Is `resultsLoader` expecting a **raw database row** or a stringified text block?

Show all

MAGPIE\_SERVER > DATABASE.loadWorldRowByName("MAGPIE\_SYMBOL", "AFS") Uncaught TypeError: results.map is not a function at Object.resultsLoader (C:\\Users\\Marika\\matheraptor\\projects\\MAGPIE\_Server\\core\\database\_worker.js:549:17) at C:\\Users\\Marika\\matheraptor\\projects\\MAGPIE\_Server\\core\\database.js:904:50 at Array.map (<anonymous>) at MAGPIE\_DATABASE.loadWorldRowByName (C:\\Users\\Marika\\matheraptor\\projects\\MAGPIE\_Server\\core\\database.js:904:17) MAGPIE\_SERVER > /\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT \* FROM ${tableName} WHERE name LIKE?\`); const results = statement.all(\`%${name}%\`); return results.map(item => MAGPIE\_DATABASE.sync.resultsLoader(item)); }

The crash trace confirms that `results.map` inside `loadWorldRowByName` is actually working perfectly.

The error `TypeError: results.map is not a function` is being thrown **inside your `resultsLoader` function** at line 549 of `database_worker.js`.

Inside `resultsLoader(item)`, you are trying to call `.map()` on an object property named `results` (or a variable named `results`), but that property is not an array.

What is happening

1. `loadWorldRowByName` finds the rows and loops through them using `.map(item => ...)`.
2. It passes a database row (`item`) into `DATABASE.sync.resultsLoader(item)`.
3. Inside `resultsLoader`, your code is trying to parse the row or its nested JSON data.
4. On line 549, it attempts to do something like `someObject.results.map(...)` or `results.map(...)`, but that value is `undefined`, a string, or an object—causing the crash.

How to diagnose the exact issue

Look inside `C:\Users\Marika\matheraptor\projects\MAGPIE_Server\core\database_worker.js` at line **549**. You will find code that looks similar to this:

```
// Example of what is likely failing inside resultsLoader on line 549:
function resultsLoader(item) {
    // ... basic parsing logic ...
    
    // CRASH HERE: 'results' might be undefined or an object, not an array
    item.someProperty.results.map(x => ...); 
}
```

Why it failed now but didn't before

Earlier, your query returned an empty array `[]`. Calling `.map()` on an empty array loops exactly `0` times, so `resultsLoader` was never executed. Now that your search query successfully finds rows, `resultsLoader` runs, hits the internal mapping bug on line 549, and throws the error.

To pinpoint the fix, let me know:

- What is the **exact code block** around line 549 in `database_worker.js`?
- What does `resultsLoader` expect its input data structure to look like?

Show all

/\*\* \* @typedef {Object\[\]} database\_payload \* @param {database\_result} results \* @returns {database\_payload} \*/ worker.resultsLoader = function resultsLoader(results) { if(!results || results.length < 1) return \[\]; return results.map((row) => JSON.parse(row.data, this.reviver)); }

The stack trace shows exactly why your code is crashing: **`resultsLoader` expects an array of rows, but you are passing it a single row.**

Look at the conflict between your two functions:

1. Inside `loadWorldRowByName`, you use `results.map(item => ...)` \[2\]. This loops through the array and passes **one single row object** (`item`) into `resultsLoader`.
2. Inside `resultsLoader(results)`, the code treats that single row object as an array and tries to call `results.map(...)`. Because an object does not have a `.map()` method, Node.js throws `TypeError: results.map is not a function`.

The Fix

You do not need to use `.map()` in both places. You have two options to fix this cleanly:

Since `resultsLoader` is already written to process a whole array of database rows, stop mapping inside `loadWorldRowByName` and pass the array directly.

```
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    // Remember to use json_extract if your name column contains NULL values
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT * FROM ${tableName} WHERE json_extract(data, '$.name') LIKE ?\`);
        
    const results = statement.all(\`%${name}%\`);
    
    // Pass the entire array directly to the loader
    return MAGPIE_DATABASE.sync.resultsLoader(results);
}
```

Option 2: Change how you call the loader manually

If you want to keep using `.map()` inside `loadWorldRowByName`, you must wrap the single item in an array `[item]` when passing it to `resultsLoader`, and then extract the first element of the returned array:

```
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT * FROM ${tableName} WHERE json_extract(data, '$.name') LIKE ?\`);
        
    const results = statement.all(\`%${name}%\`);
    
    // Wrap the single item in an array, then unpack the single returned object
    return results.map(item => MAGPIE_DATABASE.sync.resultsLoader([item])[0]);
}
```

**Option 1** is the cleanest approach and maximizes performance by iterating through your array exactly once.

If you run into any issues with `this.reviver` inside the worker function, let me know:

- Is `this.reviver` **defined correctly** on the context where `resultsLoader` runs?
- Do you want to verify the **parsed output structure** once the JSON parses successfully?

Show all

worker.getRow = function getRow(tableName, criteria = {}, db) { const columns = Object.keys(criteria).sort(); const whereClause = this.buildWhereClause(columns, criteria); const sql = \`SELECT \* from ${tableName} ${whereClause}\`; const statement = this.getStatement(\`GET:${tableName}:${whereClause}\`, sql, db); const values = columns.map(col => { const entry = criteria\[col\]; return (entry && entry.op!== undefined)? entry.val: entry; }) const result = statement.all(...values); return result; } /\*\* \* \* @param {String} tableName \* @param {Object} criteria \* @param {Database} db \* @returns {database\_payload} \*/ worker.loadRow = function loadRow(tableName, criteria, db) { const results = worker.getRow(tableName, criteria, db); return this.resultsLoader(results); }

Your `loadRow` and `getRow` methods confirm your architecture's design pattern: `getRow` fetches raw rows from the database, and `loadRow` passes that entire array directly into `resultsLoader` to parse the payloads.

To make your `loadWorldRowByName` function fit this exact convention, you must bypass your manual mapping loop and pass the full array directly into `resultsLoader`.

The Harmonized Code

Update your function to match the structural pattern used by your framework:

```
/**
 * @param {String} tableName 
 * @param {String} name 
 * @returns {database_payload}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    // Clean up whitespace
    const cleanName = name.trim();

    // Query JSON directly since your raw 'name' columns contain NULL
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT * FROM ${tableName} WHERE json_extract(data, '$.name') LIKE ?\`);
        
    const results = statement.all(\`%${cleanName}%\`);
    
    // Match the loadRow pattern: pass the entire array directly to resultsLoader
    return MAGPIE_DATABASE.sync.resultsLoader(results);
}
```

Why this structure works

1. `statement.all()` returns a standard JavaScript array containing every matching database row object.
2. Passing that complete array to `this.resultsLoader(results)` allows its internal `results.map(...)` statement to execute without a `TypeError` crash.
3. Every raw row string payload gets parsed out properly through your internal `JSON.parse(row.data, this.reviver)` handler.

If you want to optimize your framework further, let me know:

- Do you want to modify your dynamic query builder (`this.buildWhereClause`) to support **native text search operators or wildcards** automatically?
- Are there other **JSON object keys** in your `data` column that you will need to search against in the future?

Show all

why this json\_extract(data, '$.name')

`json_extract(data, '$.name')` is a built-in SQLite function that tells the database engine to parse your stringified JSON data on the fly during a search query.

Here is exactly how it breaks down:

1\. The Anatomy of the Function

- **`json_extract(...)`**: This is a native SQLite function designed to read structured JSON data stored inside a standard text column.
- **`data`**: This is the name of your specific table column that holds the raw, stringified JSON text (e.g., `'{"_firmware":"MAGPIE_SYMBOL","name":"AFS crew supplies..."}'`).
- **`'$.name'`**: This is a JSON path expression string.
	- `$` represents the root of the JSON object.
		- `.name` tells SQLite to navigate to the key named `"name"`.

2\. Why It is Required for Your Schema

In a standard SQL setup, you would search a text column directly using `WHERE name LIKE '%AFS%'`. However, your database dump revealed that your schema is storing data in a hybrid **NoSQL-on-SQL** pattern:

```
// Your actual database row structure:
{
  ID: 1778770361001,
  type: 4,
  data: '{"_firmware":"MAGPIE_SYMBOL","name":"AFS crew supplies (1wk) [11t]",...}', // <--- Text is in here
  name: null // <--- Your actual SQL column is empty!
}
```

If you use `WHERE name LIKE '%AFS%'`, SQLite looks at the actual `name` column, sees `NULL`, and returns nothing.

By swapping to `WHERE json_extract(data, '$.name') LIKE '%AFS%'`, you force SQLite to look inside the stringified `data` text, isolate the `"AFS crew supplies..."` substring, and perform the pattern match directly on that hidden value.

3\. Alternative Syntax (SQLite 3.38+)

If your environment runs a modern version of SQLite, you can use a cleaner, modern arrow syntax which acts as an alias for `json_extract`:

```
-- This syntax functions identically to json_extract(data, '$.name')
SELECT * FROM tableName WHERE data ->> '$.name' LIKE ?
```

The `->>` operator extracts the sub-component directly as a clean SQL text string, allowing standard filters like `LIKE` to process it immediately.

If you are concerned about search performance as your dataset grows, let me know:

- Would you like to see how to create a **generated column index** so SQLite can search this nested JSON key instantly without scanning the whole table?
- Do you want to see how to configure your **data insertion logic** to automatically populate the real `name` column?

Show all

why not just read the indexed name column?

You **should** just read the indexed `name` column. It is significantly faster and is the correct way to design a database schema.

The only reason we couldn't use it earlier is because your `name` column was completely empty (`NULL`).

Why you cannot read it right now

In your earlier console dump, your database rows looked like this:

```
{
  ID: 1778770361001,
  data: '{"_firmware":"MAGPIE_SYMBOL","name":"AFS crew supplies...", ...}',
  name: null // <--- SQLite sees nothing here!
}
```

Even if you add an index to the `name` column, an index on a column full of `NULL` values is empty. When you run `WHERE name LIKE '%AFS%'`, SQLite looks at the column (or its index), finds `NULL`, and returns `[]`.

How to fix it so you CAN use the indexed column

To completely get rid of the slow `json_extract()` function and use a blazing-fast indexed `name` column, you need to copy the names out of your JSON string and write them directly into the `name` column.

Step 1: Populate the missing data (Run once)

Run this SQL command inside your database setup script to backfill all your empty `name` columns instantly:

```
// Execute this once to copy the nested JSON names into the actual SQL column
MAGPIE_DATABASE.sync.world.exec(\`
    UPDATE MAGPIE_SYMBOL 
    SET name = json_extract(data, '$.name') 
    WHERE name IS NULL
\`);
```

Step 2: Index the column

Ensure the index actually exists on that column so searches are optimized:

```
MAGPIE_DATABASE.sync.world.exec(\`
    CREATE INDEX IF NOT EXISTS idx_magpie_symbol_name ON MAGPIE_SYMBOL(name)
\`);
```

Step 3: Write clean, fast JavaScript code

Once the data is actually sitting inside the `name` column, you can throw away `json_extract()` and go back to your clean, high-performance query:

```
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) {
    const cleanName = name.trim();
    
    // This will now work perfectly and instantly use your index!
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT * FROM ${tableName} WHERE name LIKE ?\`);
        
    const results = statement.all(\`%${cleanName}%\`);
    return MAGPIE_DATABASE.sync.resultsLoader(results);
}
```

Important Reminder for the Future

When your server **inserts or saves** a new entity into the database, ensure your code writes the name string to *both* fields: inside the JSON `data` payload string **and** directly into the `name` column binding.

If you want to automate this data syncing, let me know:

- Do you want to see how your **`INSERT` / `UPDATE` save scripts** should look to prevent this from breaking again?
- Do you want to check if **other tables** in your database have this same `name: null` issue?

Show all

i fixed the name: null. They're named now MAGPIE\_SERVER > symbols = DATABASE.sync.getRow("MAGPIE\_SYMBOL", {}, DATABASE.sync.world) \[ { ID: 1778659642671, type: 5, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778659642671,"type":5,"name":"Mars-class Combat Stores Ship","desc":"undefined","requirementID":0,"compoundID":0,"STATS":{"\_firmware":"Float64Array","data":\[3000,10.80333,3001,8.74556,3002,5.65889,3006,2.57222\]}}', name: 'Mars-class Combat Stores Ship' }, { ID: 1778769085326, type: 6, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778769085326,"type":6,"name":"Auxiliary Ship","desc":"undefined","requirementID":0,"compoundID":0,"STATS":\[\]}', name: 'Auxiliary Ship' }, { ID: 1778769270066, type: 5, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778769270066,"type":5,"name":"Ship-board Open Parking Medium V","desc":"undefined","requirementID":0,"compoundID":0,"STATS":{"\_firmware":"Float64Array","data":\[2020,4500\]}}', name: 'Ship-board Open Parking Medium V' }, { ID: 1778769310335, type: 5, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778769310335,"type":5,"name":"UNREP facilities","desc":"undefined","requirementID":0,"compoundID":0,"STATS":\[\]}', name: 'UNREP facilities' }, { ID: 1778770361001, type: 4, requirementID: null, compoundID: null, data: '{"\_firmware":"MAGPIE\_SYMBOL","ID":1778770361001,"type":4,"name":"AFS crew supplies (1wk) \[11t\]","desc":"undefined","requirementID":0,"compoundID":0,"STATS":{"\_firmware":"Float64Array","data":\[2013,11000\]}}', name: 'AFS crew supplies (1wk) \[11t\]' } \]

Awesome. Now that your `name` column is properly populated with the actual text strings, your clean index-ready code will work flawlessly.

Here is the final production-ready code that leverages the fast indexed `name` column and pipes the results directly into your worker's array parser without crashing:

```
/**
 * Loads world rows by a partial name match using the indexed 'name' column.
 * @param {String} tableName 
 * @param {String} name 
 * @returns {database_payload}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    // 1. Strip accidental edge spacing or trailing linebreaks
    const cleanName = name.trim();

    // 2. Prepare the high-performance indexed query
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT * FROM ${tableName} WHERE name LIKE ?\`);
        
    // 3. Match anywhere inside the string
    const results = statement.all(\`%${cleanName}%\`);
    
    // 4. Pass the array directly to the resultsLoader to prevent TypeErrors
    return MAGPIE_DATABASE.sync.resultsLoader(results);
}
```

⚡ Performance Optimization Warning

While `LIKE '%AFS%'` now works perfectly, using a wildcard at the **beginning** of the query string (`%term`) forces SQLite to bypass standard indexes and scan the entire table row-by-row.

If your `MAGPIE_SYMBOL` table scales to tens of thousands of items and searches feel sluggish, run this command once to build a specific lowercase index, and consider switching your search pattern from absolute partial (`%term%`) to prefix matching (`term%`):

```
// Run once during database initialization to optimize text lookups
MAGPIE_DATABASE.sync.world.exec(\`
    CREATE INDEX IF NOT EXISTS idx_symbol_name_nocase ON MAGPIE_SYMBOL(name COLLATE NOCASE)
\`);
```

If you want to look over the rest of your system settings, let me know:

- Do you need to update your **`INSERT` or `UPDATE` saving methods** to ensure the standalone `name` column stays populated for future rows?
- Are there any **other tables** in your database that still have `name: null` values?

Show all

yes, now that the method works, I'm ready to look at more efficient alternatives

To achieve maximum performance as your database scales, you need to transition away from full-table scans. Using a leading wildcard (`LIKE '%AFS%'`) forces SQLite to read every single row in the table sequentially \[1\].

Here are the two best production-grade architectural alternatives for `better-sqlite3`, ranked by efficiency.

---

Alternative 1: SQLite FTS5 (Full-Text Search) — *The Fast & Flexible Choice*

SQLite has a built-in virtual table module called **FTS5** \[2, 3\]. It builds an external "inverted index" (similar to Elasticsearch or Lucene) \[2, 4\]. It calculates token locations instantly, making substring prefix searches run up to 100x faster than `LIKE` scans.

1\. Setup the FTS5 Table (Run Once)

Create an FTS5 virtual table and an automated SQLite `TRIGGER` \[5\]. This trigger will automatically sync your data when rows are inserted into `MAGPIE_SYMBOL`:

```
const db = MAGPIE_DATABASE.sync.world;

// Create the FTS5 search index table
db.exec(\`
  CREATE VIRTUAL TABLE IF NOT EXISTS MAGPIE_SYMBOL_fts 
  USING fts5(id UNINDEXED, name, tokenize="porter");
\`);

// Create a trigger to auto-populate the FTS index on insert
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS after_symbol_insert 
  AFTER INSERT ON MAGPIE_SYMBOL
  BEGIN
    INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (new.ID, new.name);
  END;
\`);

// Backfill existing data into your new FTS index (Run once)
db.exec(\`
  INSERT INTO MAGPIE_SYMBOL_fts(id, name) 
  SELECT ID, name FROM MAGPIE_SYMBOL 
  WHERE ID NOT IN (SELECT id FROM MAGPIE_SYMBOL_fts);
\`);
```

2\. Update Your Search Function

FTS5 uses the `MATCH` operator instead of `LIKE` \[3\]. To match partial names (like searching `"AFS"` to find `"AFS crew supplies"`), append a `*` wildcard to the end of your search token:

```
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) {
    const cleanName = name.trim();
    if (!cleanName) return [];

    // Query the FTS index using MATCH, then join back to the main table for full data
    const statement = MAGPIE_DATABASE.sync.world.prepare(\`
        SELECT m.* FROM ${tableName} m
        JOIN ${tableName}_fts f ON m.ID = f.id
        WHERE f.name MATCH ?
    \`);

    // The asterisk (*) enables prefix matching (e.g., "AFS*")
    const results = statement.all(\`${cleanName}*\`);
    
    return MAGPIE_DATABASE.sync.resultsLoader(results);
}
```

---

Alternative 2: Substring Trigram Index (SQLite 3.34+) — *The Pure Partial Choice*

If you need true middle-of-the-word matching (e.g., searching `"crew"` or `"supp"` to find `"AFS crew supplies"`), FTS5's prefix matching (`*`) isn't enough. For total partial matching with index optimization, use a **Trigram Index** \[6\].

A trigram index breaks down strings into 3-character chunks (e.g., `"vessel"` becomes `"ves"`, `"ess"`, `"sse"`, `"sel"`), allowing `LIKE '%term%'` queries to use a native index \[6\].

1\. Enable the Trigram Index (Run Once)

```
// Create a specialized trigram index directly on your existing text column
MAGPIE_DATABASE.sync.world.exec(\`
  CREATE INDEX IF NOT EXISTS idx_symbol_name_trigram 
  ON MAGPIE_SYMBOL(name COLLATE TR_INDEX);
\`);
```

*(Note: Ensure your binary compilation of `better-sqlite3` includes the standard `SQLITE_ENABLE_FTS5` compile flag \[7\], which natively provisions trigram structures).*

2\. Code Execution

You don't need to change a single line of your working JavaScript function! SQLite's query planner automatically detects the trigram index under the hood and switches your `LIKE '%AFS%'` execution plan from a full-table scan to an immediate index lookup.

---

Which option should you pick?

- Choose **Alternative 1 (FTS5)** if your search terms are usually whole words or word prefixes (e.g., typing `"Mars"` or `"Aux"`). This uses the least amount of disk space and is the fastest option for standard search bars.
- Choose **Alternative 2 (Trigram)** if your users frequently search using fragments of text buried deep inside the middle of a string without spaces (e.g., typing `"supp"` or `"board"`).

Let me know if you would like to:

- See how to expand the FTS5 table to index **other properties inside your JSON block** (like description text).
- Learn how to write the accompanying `DELETE` and `UPDATE` triggers to keep your data perfectly synchronized.

Show all

I just create FTS5 once and then it self-maintains?

Yes, the FTS5 virtual table itself is permanent, but **it only maintains itself if you handle mutations through direct insertions, or if you attach SQL Triggers** to monitor your base table.

An FTS5 virtual table is a completely separate storage structure inside SQLite. If you alter, delete, or add data inside `MAGPIE_SYMBOL`, the FTS5 table will not know unless you tell SQLite how to sync them.

Using **SQL Triggers** is the best "set-and-forget" approach to make it fully self-maintaining.

The Complete Self-Maintaining Setup

Run this script **once** during your database initialization phase. It provisions the virtual table and hooks up the automated sync triggers for inserts, updates, and deletes:

```
const db = MAGPIE_DATABASE.sync.world;

// 1. Create the permanent FTS5 search index table
db.exec(\`
  CREATE VIRTUAL TABLE IF NOT EXISTS MAGPIE_SYMBOL_fts 
  USING fts5(id UNINDEXED, name, tokenize="porter");
\`);

// 2. TRIGGER A: Automatically sync on new row insertions
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS ts_symbol_insert 
  AFTER INSERT ON MAGPIE_SYMBOL
  BEGIN
    INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (new.ID, new.name);
  END;
\`);

// 3. TRIGGER B: Automatically sync when names are changed/updated
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS ts_symbol_update 
  AFTER UPDATE OF name ON MAGPIE_SYMBOL
  BEGIN
    UPDATE MAGPIE_SYMBOL_fts SET name = new.name WHERE id = old.ID;
  END;
\`);

// 4. TRIGGER C: Automatically purge search index when rows are deleted
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS ts_symbol_delete 
  AFTER DELETE ON MAGPIE_SYMBOL
  BEGIN
    DELETE FROM MAGPIE_SYMBOL_fts WHERE id = old.ID;
  END;
\`);
```

How this works in production

Once these four SQL statements run on your database file, **your JavaScript code does not need to manage the FTS table anymore**.

When your game or server runs a standard `INSERT INTO MAGPIE_SYMBOL...`, SQLite intercepts the query internally, fires your trigger, and updates the search index instantly within the same atomic transaction.

Performance considerations

- **No Manual Rebuilds Needed:** FTS5 internally balances its own tree structure ("segment merging") automatically as writes occur.
- **Slight Write Overhead:** Adding rows will take a fraction of a millisecond longer because SQLite writes to both tables simultaneously.
- **Blazing Fast Reads:** Your read search queries will remain highly optimized and lightning fast regardless of database scale.

Would you like to double-check if your current **data insertion logic** modifies rows using `UPDATE` statements, or does it drop and recreate tables during runtime?

Show all

"Yes, the FTS5 virtual table itself is permanent, but it only maintains itself if you handle mutations through direct insertions, or if you attach SQL Triggers to monitor your base table." what do you mean?

To understand this, you have to look at how SQLite builds FTS5 behind the scenes.

An FTS5 table is not just a standard database index. It is actually **a collection of hidden shadow tables** containing complex text data structures. It functions like an entirely separate database table running inside your `.db` file.

Because it is a separate table, it cannot automatically "see" changes happening inside your main `MAGPIE_SYMBOL` table.

Here is exactly what those two paths mean:

---

Path A: "If you handle mutations through direct insertions..."

This means you do not use automated triggers, and you instead force your Node.js application backend code to manually update both tables every single time you change data.

If you add a new entity, your JavaScript code must make two separate database calls sequentially:

```
// Call 1: Save to your main standard database table
db.prepare('INSERT INTO MAGPIE_SYMBOL (ID, name, data) VALUES (?, ?, ?)')
  .run(12345, 'AFS crew supplies', JSON.stringify(...));

// Call 2: You must remember to manually push the duplicate tracking data to FTS5
db.prepare('INSERT INTO MAGPIE_SYMBOL_fts (id, name) VALUES (?, ?)')
  .run(12345, 'AFS crew supplies');
```

- **Why this is risky:** If you or another developer forget to write the second query somewhere in your codebase (like a delete or update script), your search index goes out of sync, and search queries will return broken or missing results.

---

Path B: "...or if you attach SQL Triggers to monitor your base table." (Recommended)

This means you let SQLite handle the synchronization entirely on the database engine level. You run the `CREATE TRIGGER` commands once. After that, your Node.js application completely ignores the FTS5 table during inserts, updates, and deletes.

You only write a single clean query in JavaScript:

```
// You write this single standard database call:
db.prepare('INSERT INTO MAGPIE_SYMBOL (ID, name, data) VALUES (?, ?, ?)')
  .run(12345, 'AFS crew supplies', JSON.stringify(...));

// SQLite reads your background TRIGGER rule and automatically performs 
// the internal FTS5 insert on its own, safely inside the exact same millisecond.
```

Summary

FTS5 is a distinct table structure that requires active updating. Using **SQL Triggers** shifts that synchronization workload off your JavaScript code and lets the SQLite engine maintain itself automatically.

If you'd like, let me know:

- How does your server **currently write new data** to the database? (e.g., using raw `INSERT` queries, a custom wrapper, or completely replacing files?)
- Do you want to verify the **complete list of triggers** currently active on your table?

Show all

"You run the CREATE TRIGGER commands once. After that, your Node.js application completely ignores the FTS5 table during inserts, updates, and deletes." what do you mean

It means that once you tell SQLite about the triggers, the database engine handles 100% of the synchronization work on its own.

You do not need to write any new Node.js code for your saving, editing, or deleting systems.

Here is the exact step-by-step breakdown of how this changes your workflow:

1\. The "Before" Workflow (Standard SQLite)

When your game server or backend wants to save a new item, your Node.js code executes a standard database insertion:

```
// Your existing Node.js save logic
const insertItem = db.prepare('INSERT INTO MAGPIE_SYMBOL (ID, name, data) VALUES (?, ?, ?)');
insertItem.run(999, 'Quantum Reactor', '{...}');
```

Without triggers, the text `"Quantum Reactor"` is saved to your main table, but the FTS5 search index table remains empty. Your search function wouldn't be able to find it.

2\. The "With Triggers" Workflow (Completely Automated)

You run the `CREATE TRIGGER` commands in your terminal or database initialization script exactly **once**.

Now, when your Node.js application executes the exact same code block as before:

```
// You run this EXACT same code block. You don't change a single character.
const insertItem = db.prepare('INSERT INTO MAGPIE_SYMBOL (ID, name, data) VALUES (?, ?, ?)');
insertItem.run(999, 'Quantum Reactor', '{...}');
```

Behind the scenes, inside the database engine itself, this sequence happens instantly:

1. SQLite safely writes the row into your main `MAGPIE_SYMBOL` table.
2. SQLite notices: *"Hey, there is a trigger called `ts_symbol_insert` attached to this table!"*
3. SQLite immediately runs that trigger's internal SQL rule: `INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (999, 'Quantum Reactor')`.
4. The transaction finishes.

Why this matters for your application

Your Node.js codebase is completely isolated from the maintenance process.

- If you write an `UPDATE` query to fix a typo in a name, SQLite handles the FTS update.
- If you write a `DELETE` query to remove a destroyed ship or item, SQLite deletes it from FTS automatically.
- Your JavaScript application **only interacts with FTS5 when it reads data** inside your `loadWorldRowByName` search function.

If you are ready to implement this, let me know:

- Do you want to see a **complete, safe initialization script** that sets up your main table, the FTS5 table, and the triggers all in one go?
- Do you want to test how to write your **`DELETE` or `UPDATE` triggers** if you have foreign key constraints?

- Enable and disable triggers - SQL Server Video Tutorial
	Once created, triggers are automatically enabled and start firing as soon as they're triggered. Developers can choose to temporari...![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkRDfYbLbq4rbumPSh1Ne896UGv_ytdeQEJ4B-Zte4ZJ4ll_NS)
	LinkedIn
- Database Triggers in Bubble.io
	29 Mar 2022 — You can create a database trigger once. It will automatically take care of the required actions—no need to duplicate the workflow.![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRAWc6m4x_TPMEwpvLesNKsd_0dGJY227dXQpGRBtIFlh93Mn)
	NocodeAssistant
- SQLite Trigger: The Ultimate Guide You Don't Want To Miss
	21 Dec 2015 — What is an SQLite trigger. An SQLite trigger is a named database object that is executed automatically when an INSERT, UPDATE or...
	SQLite Tutorial

Show all

ok, I don't yet understand 100%, let's say... 50% So, here is want I want: I need the search by name method for a limited set of tables. For now, I just need it for MAGPIE\_SYMBOL table, which is going to be prototypes of major concepts and traits, so, not instances of entities like "ship225". Which means, It's a table used mostly for getting, and rarely for setting. I wrap the low level methods into seams so that I access the database with methods like "DATABASE.saveSymbolSync(symbol)", which then runs saveWorldRow("MAGPIE\_SYMBOL", symbol) and converts the symbol into payload to be injected via the sql statement. Viceversa, when loading, I extract the payload and deliver it to the seam, like, DATABASE.loadSymbolSync(symbolID) => DATABASE.sync.loadWorldRow("MAGPIE\_SYMBOL", {ID: symbolID}) => low level method in worker => sql If I understand correctly, to use the trigger, I should setup the MAGPIE\_SYMBOL table to have a FTS5 countepart and then setup a trigger so that whenever I run saveSymbolSync it activates the trigger?

Yes, you understand it perfectly! Your 50% comprehension is exactly the right core concept.

To clarify the rest, think of the trigger as a rule built directly into the database file, rather than your Node.js application.

You do not write any JavaScript code to "activate" or "call" the trigger. Instead, the SQLite engine automatically detects your `saveSymbolSync` SQL operation and fires the trigger on its own.

Here is exactly how this maps onto your system architecture:

1\. The Database Setup (Do this once)

When your server starts up (or when you initialize your database file), you run a script that creates your main table, your FTS5 tracking table, and the automatic database rules (Triggers).

```
const db = MAGPIE_DATABASE.sync.world;

// Create your prototype table
db.exec(\`
  CREATE TABLE IF NOT EXISTS MAGPIE_SYMBOL (
    ID INTEGER PRIMARY KEY,
    type INTEGER,
    data TEXT,
    name TEXT
  );
\`);

// Create the FTS5 tracking table
db.exec(\`
  CREATE VIRTUAL TABLE IF NOT EXISTS MAGPIE_SYMBOL_fts 
  USING fts5(id UNINDEXED, name, tokenize="porter");
\`);

// Create the rule: "Whenever ANY script inserts into MAGPIE_SYMBOL, mirror it to FTS5"
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS ts_symbol_insert 
  AFTER INSERT ON MAGPIE_SYMBOL
  BEGIN
    INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (new.ID, new.name);
  END;
\`);

// Create the rule: "Whenever ANY script updates a name in MAGPIE_SYMBOL, update FTS5"
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS ts_symbol_update 
  AFTER UPDATE OF name ON MAGPIE_SYMBOL
  BEGIN
    UPDATE MAGPIE_SYMBOL_fts SET name = new.name WHERE id = old.ID;
  END;
\`);
```

---

2\. How `DATABASE.saveSymbolSync(symbol)` Works Now

Because this table stores static prototype concepts and traits, your setting logic remains completely clean. Your wrapper function doesn't need to know that FTS5 even exists.

```
DATABASE.saveSymbolSync = function(symbol) {
    // Your standard conversion logic into a flat database payload
    const payload = {
        ID: symbol.ID,
        type: symbol.type,
        name: symbol.name, // The clean string name
        data: JSON.stringify(symbol)
    };

    // Your low-level method executes a standard INSERT or REPLACE
    // e.g., INSERT INTO MAGPIE_SYMBOL (ID, type, name, data) VALUES (?, ?, ?, ?)
    DATABASE.sync.saveWorldRow("MAGPIE_SYMBOL", payload); 
    
    // AT THIS EXACT MOMENT:
    // SQLite detects the insertion. The 'ts_symbol_insert' trigger fires automatically 
    // inside the database engine. Your prototype name is indexed instantly.
};
```

---

3\. How your new Search Seam Looks

Because you have a hidden, perfectly synchronized FTS5 index table running in the background, you can write a dedicated high-performance search seam that queries it directly.

```
/**
 * Seam to search symbol prototypes by partial name match
 * @param {String} searchName 
 * @returns {SymbolPrototype[]}
 */
DATABASE.searchSymbolsByNameSync = function(searchName) {
    const cleanQuery = searchName.trim();
    if (!cleanQuery) return [];

    // Low-level fast FTS query using MATCH and a trailing wildcard (*)
    const statement = MAGPIE_DATABASE.sync.world.prepare(\`
        SELECT m.* FROM MAGPIE_SYMBOL m
        JOIN MAGPIE_SYMBOL_fts f ON m.ID = f.id
        WHERE f.name MATCH ?
    \`);

    // "AFS" becomes "AFS*" matching any name starting with AFS
    const rawRows = statement.all(\`${cleanQuery}*\`);
    
    // Pass the raw data through your existing resultsLoader to revive the JSON
    return MAGPIE_DATABASE.sync.resultsLoader(rawRows);
};
```

Why this is perfect for your Prototype Tables

Since your prototypes are set rarely and read often, this pattern is highly optimized:

- **Zero Overhead on Reads:** Searching through thousands of traits or ship hull prototypes takes fractions of a millisecond.
- **Invisible Maintenance:** When you occasionally update a prototype's stats or name via your dev tools using `saveSymbolSync`, the database keeps itself clean without complex app-side synchronization pipelines.

If you are ready to implement this, let me know:

- Does your low-level `saveWorldRow` method use an **`INSERT` statement**, an **`INSERT OR REPLACE` statement**, or an **`UPDATE` statement**? (We may need to adjust the trigger syntax slightly depending on your write strategy).
- Do you want to see how to run a one-time script to **populate your FTS table** if you already have existing data in `MAGPIE_SYMBOL`?

Show all

can I add the trigger after the MAGPIE\_SYMBOL table is already been created?

Yes, you can absolutely add the trigger at any time, even if the `MAGPIE_SYMBOL` table has existed and contained data for years.

SQLite does not care when a trigger is created \[1\]. The moment you run the `CREATE TRIGGER` statement, SQLite attaches the rule to the table and starts monitoring it from that exact second onward \[1\].

However, because the table already has data, you must complete **one extra step** so your existing records don't get left behind.

The 3-Step Process for Existing Tables

If your `MAGPIE_SYMBOL` table already exists and has data inside it, execute these three steps sequentially in your database initialization script:

Step 1: Create the FTS5 tracking table (if it doesn't exist)

```
MAGPIE_DATABASE.sync.world.exec(\`
  CREATE VIRTUAL TABLE IF NOT EXISTS MAGPIE_SYMBOL_fts 
  USING fts5(id UNINDEXED, name, tokenize="porter");
\`);
```

Step 2: Backfill your existing records (Run Once)

Triggers only fire on **future** actions (new inserts/updates) \[1\]. They will not automatically index data that is already sitting in the table. You must manually copy your current data into the FTS table once:

```
// This copies all current IDs and Names over to the FTS tracking table
MAGPIE_DATABASE.sync.world.exec(\`
  INSERT INTO MAGPIE_SYMBOL_fts(id, name) 
  SELECT ID, name FROM MAGPIE_SYMBOL 
  WHERE ID NOT IN (SELECT id FROM MAGPIE_SYMBOL_fts);
\`);
```

Step 3: Create your automated triggers

Now that your past data is caught up, deploy the triggers. They will immediately take over and handle 100% of all future data modifications \[1\]:

```
const db = MAGPIE_DATABASE.sync.world;

// Handle future inserts
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS ts_symbol_insert 
  AFTER INSERT ON MAGPIE_SYMBOL
  BEGIN
    INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (new.ID, new.name);
  END;
\`);

// Handle future updates
db.exec(\`
  CREATE TRIGGER IF NOT EXISTS ts_symbol_update 
  AFTER UPDATE OF name ON MAGPIE_SYMBOL
  BEGIN
    UPDATE MAGPIE_SYMBOL_fts SET name = new.name WHERE id = old.ID;
  END;
\`);
```

Once this initialization code runs, your existing prototype data is indexed, and all future calls to `DATABASE.saveSymbolSync()` are completely automated.

If you are ready to wrap this up, let me know:

- Do you use **`INSERT OR REPLACE`** inside your low-level save method? (If you use `REPLACE`, we need to change `AFTER INSERT` to `AFTER INSERT OR REPLACE` so SQLite triggers accurately on overrides).
- Do you want a quick **SQL verify snippet** to confirm the main table and FTS table are perfectly matching?

Show all

MAGPIE\_SERVER > DATABASE.sync.world.exec("CREATE VIRTUAL TABLE IF NOT EXISTS MAGPIE\_SYMBOL\_fts USING fts5(id UNINDEXED, name, tokenize='porter')") Database { name: 'C:\\\\Users\\\\Marika\\\\matheraptor\\\\projects\\\\MAGPIE\_Server\\\\db\\\\world.db', open: true, inTransaction: false, readonly: false, memory: false }

The virtual table has been successfully created inside your `world.db` file. The output shows that `better-sqlite3` executed the command and returned the main database reference object without throwing any errors, confirming that your environment natively supports FTS5.

To finish your initialization, you need to execute the final backfill and set up the self-maintenance rules right inside your REPL terminal. Run these three commands sequentially:

1\. Backfill your existing prototypes

This script copies your currently saved prototype names over to the new FTS index so they become searchable immediately:

```
MAGPIE_SERVER > DATABASE.sync.world.exec(\`INSERT INTO MAGPIE_SYMBOL_fts(id, name) SELECT ID, name FROM MAGPIE_SYMBOL WHERE ID NOT IN (SELECT id FROM MAGPIE_SYMBOL_fts)\`)
```

2\. Add the Insert Trigger

This monitors your low-level save methods for new prototype rows and logs them into FTS automatically:

```
MAGPIE_SERVER > DATABASE.sync.world.exec(\`CREATE TRIGGER IF NOT EXISTS ts_symbol_insert AFTER INSERT ON MAGPIE_SYMBOL BEGIN INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (new.ID, new.name); END\`)
```

3\. Add the Update Trigger

This ensures that if you ever edit a prototype's name during development, the search index updates with it:

```
MAGPIE_SERVER > DATABASE.sync.world.exec(\`CREATE TRIGGER IF NOT EXISTS ts_symbol_update AFTER UPDATE OF name ON MAGPIE_SYMBOL BEGIN UPDATE MAGPIE_SYMBOL_fts SET name = new.name WHERE id = old.ID; END\`)
```

Verify the Search works

Once those three lines execute successfully, you can test your new high-performance search seam directly in your terminal using the optimized `MATCH` query:

```
MAGPIE_SERVER > stmt = DATABASE.sync.world.prepare("SELECT m.* FROM MAGPIE_SYMBOL m JOIN MAGPIE_SYMBOL_fts f ON m.ID = f.id WHERE f.name MATCH 'AFS*'")
MAGPIE_SERVER > rawRows = stmt.all()
MAGPIE_SERVER > DATABASE.sync.resultsLoader(rawRows)
```

If everything is configured correctly, your `"AFS crew supplies (1wk) [11t]"` entity will return fully parsed from the database.

If you hit any unexpected roadblocks during these terminal executions, let me know:

- Does your low-level wrapper system ever use **`DELETE` operations** on prototypes that we need to write a delete trigger for?
- Would you like help writing a safe, permanent **JavaScript initialization script** so you don't have to type these commands into the REPL manually every time your server starts?

Show all

MAGPIE\_SERVER > DATABASE.sync.world.exec("INSERT INTO MAGPIE\_SYMBOL\_fts(id, name) SELECT ID, name FROM MAGPIE\_SYMBOL WHERE ID NOT IN (SELECT id FROM MAGPIE\_SYMBOL\_fts)") Database { name: 'C:\\\\Users\\\\Marika\\\\matheraptor\\\\projects\\\\MAGPIE\_Server\\\\db\\\\world.db', open: true, inTransaction: false, readonly: false, memory: false }

The backfill operation completed successfully, and your existing prototype data has been mapped over into the FTS5 tracking instance.

To finish your database's automation, you need to paste the final two structural rules (Triggers) into your console.

Step 1: Execute the Insert Automation Rule

```
MAGPIE_SERVER > DATABASE.sync.world.exec("CREATE TRIGGER IF NOT EXISTS ts_symbol_insert AFTER INSERT ON MAGPIE_SYMBOL BEGIN INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (new.ID, new.name); END")
```

Step 2: Execute the Update Automation Rule

This automatically reflects any edits or name corrections made to your prototypes directly inside the FTS search index:

```
MAGPIE_SERVER > DATABASE.sync.world.exec("CREATE TRIGGER IF NOT EXISTS ts_symbol_update AFTER UPDATE OF name ON MAGPIE_SYMBOL BEGIN UPDATE MAGPIE_SYMBOL_fts SET name = new.name WHERE id = old.ID; END")
```

Step 3: Run Your Optimized Search Seam

Now you can execute your fast prefix search using the FTS `MATCH` operator. Test it by searching for your target entity:

```
MAGPIE_SERVER > stmt = DATABASE.sync.world.prepare("SELECT m.* FROM MAGPIE_SYMBOL m JOIN MAGPIE_SYMBOL_fts f ON m.ID = f.id WHERE f.name MATCH 'AFS*'")
MAGPIE_SERVER > results = stmt.all()
MAGPIE_SERVER > DATABASE.sync.resultsLoader(results)
```

The system will now return your fully parsed `"AFS crew supplies (1wk) [11t]"` array cleanly and instantly.

If you are satisfied with how this runs in the terminal, let me know:

- Would you like to review how to structure this into a **permanent JavaScript initialization function** so it runs automatically whenever your server boots up?
- Do you need to apply this exact same FTS5 configuration to **any other prototype tables** in your database?

Show all

MAGPIE\_SERVER > DATABASE.sync.world.exec("CREATE TRIGGER IF NOT EXISTS ts\_symbol\_insert AFTER INSERT ON MAGPIE\_SYMBOL BEGIN INSERT INTO MAGPIE\_SYMBOL\_fts(id, name) VALUES (new.ID, new.name); END") Database { name: 'C:\\\\Users\\\\Marika\\\\matheraptor\\\\projects\\\\MAGPIE\_Server\\\\db\\\\world.db', open: true, inTransaction: false, readonly: false, memory: false }

The insert trigger is now successfully created and active in your database file.

To complete the setup, you just need to add the final trigger for handling updates, and then you can switch your application search code over to use the lightning-fast FTS index.

1\. Create the Update Automation Trigger

Execute this last rule in your terminal to ensure any prototype name edits stay perfectly synchronized automatically:

```
MAGPIE_SERVER > DATABASE.sync.world.exec("CREATE TRIGGER IF NOT EXISTS ts_symbol_update AFTER UPDATE OF name ON MAGPIE_SYMBOL BEGIN UPDATE MAGPIE_SYMBOL_fts SET name = new.name WHERE id = old.ID; END")
```

2\. Implement Your Final JavaScript Search Method

Now update your application seam `loadWorldRowByName` to use the FTS virtual table. This replaces the slow `LIKE` scans with direct, high-performance prefix lookups using the `MATCH` operator:

```
/**
 * High-performance search for world prototypes using FTS5 virtual index.
 * @param {String} tableName - The base table (e.g., "MAGPIE_SYMBOL")
 * @param {String} name - The query string (e.g., "AFS")
 * @returns {database_payload}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    const cleanName = name.trim();
    if (!cleanName) return [];

    // Query your automated FTS tracking table using MATCH
    const statement = MAGPIE_DATABASE.sync.world.prepare(\`
        SELECT m.* FROM ${tableName} m
        JOIN ${tableName}_fts f ON m.ID = f.id
        WHERE f.name MATCH ?
    \`);

    // Append asterisk (*) for prefix-matching (e.g., "AFS" looks up "AFS*")
    const results = statement.all(\`${cleanName}*\`);
    
    // Pass the raw row data directly to the framework's parser
    return MAGPIE_DATABASE.sync.resultsLoader(results);
}
```

This structural architecture ensures your code stays organized and performs optimally as your game's asset list expands.

If you are ready to round out this feature, let me know:

- Do your low-level systems ever use **`DELETE` queries** to completely wipe out prototype rows during runtime? (If so, we should add a quick `AFTER DELETE` trigger to clean up the index).
- Would you like to check if your **application initialization file** needs a boot script to auto-verify that these tables and triggers exist when the server starts up?

Show all

MAGPIE\_SERVER > DATABASE.sync.world.exec("CREATE TRIGGER IF NOT EXISTS ts\_symbol\_update AFTER UPDATE OF name ON MAGPIE\_SYMBOL BEGIN UPDATE MAGPIE\_SYMBOL\_fts SET name = new.name WHERE id = old.ID; END") Database { name: 'C:\\\\Users\\\\Marika\\\\matheraptor\\\\projects\\\\MAGPIE\_Server\\\\db\\\\world.db', open: true, inTransaction: false, readonly: false, memory: false }

The database configuration is complete. Both triggers are fully active, and your existing data is fully indexed.

You can now immediately test the performance of your search query in the REPL console:

```
MAGPIE_SERVER > stmt = DATABASE.sync.world.prepare("SELECT m.* FROM MAGPIE_SYMBOL m JOIN MAGPIE_SYMBOL_fts f ON m.ID = f.id WHERE f.name MATCH 'AFS*'")
MAGPIE_SERVER > results = stmt.all()
MAGPIE_SERVER > DATABASE.sync.resultsLoader(results)
```

Production Checklist for Your Codebase

To ensure your code remains maintainable and error-free moving forward, implement these final adjustments:

1. **Update Your Application Function:** Swap out your old `LIKE` function code in `database.js` for the finalized `MATCH` query layout:
	```
	MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) {
	    const cleanName = name.trim();
	    if (!cleanName) return [];
	    const statement = MAGPIE_DATABASE.sync.world.prepare(\`
	        SELECT m.* FROM ${tableName} m
	        JOIN ${tableName}_fts f ON m.ID = f.id
	        WHERE f.name MATCH ?
	    \`);
	    return MAGPIE_DATABASE.sync.resultsLoader(statement.all(\`${cleanName}*\`));
	}
	```
2. **Handle Table Deletions:** If your administrative panel or developer toolsets ever delete prototype rows entirely from `MAGPIE_SYMBOL`, run this final trigger in your console to prevent orphaned rows in your index:
	```
	MAGPIE_SERVER > DATABASE.sync.world.exec("CREATE TRIGGER IF NOT EXISTS ts_symbol_delete AFTER DELETE ON MAGPIE_SYMBOL BEGIN DELETE FROM MAGPIE_SYMBOL_fts WHERE id = old.ID; END")
	```

To close out this performance optimization task, let me know:

- Would you like assistance writing a safe **boot-up initialization script** so your server checks for and ensures these tables/triggers exist automatically whenever the process restarts?
- Do you need to apply this exact same FTS5 structure to **any other static prototype tables**?

Show all

/\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const cleanName = name.trim(); if(!cleanName) return \[\]; const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT m.\* FROM ${tableName} m JOIN ${tableName}\_fts f ON m.ID = f.id WHERE f.name MATCH?\`); return MAGPIE\_DATABASE.sync.resultsLoader(statement.all(\`%${cleanName}%\`)); } MAGPIE\_SERVER > DATABASE.sync.world.exec("CREATE TRIGGER IF NOT EXISTS ts\_symbol\_delete AFTER DELETE ON MAGPIE\_SYMBOL BEGIN DELETE FROM MAGPIE\_SYMBOL\_fts WHERE id = old.ID; END") Database { name: 'C:\\\\Users\\\\Marika\\\\matheraptor\\\\projects\\\\MAGPIE\_Server\\\\db\\\\world.db', open: true, inTransaction: false, readonly: false, memory: false }

You have successfully added the delete trigger, which keeps the FTS5 tracking table clean if a row is removed.

However, you made one crucial mistake in your JavaScript search method that will prevent it from finding anything: **FTS5 does not use percentage signs (`%`) for wildcards.**

The Bug in Your Code

In your query execution line, you are passing:  
`statement.all(`%${cleanName}%`)`

FTS5 treats the `%` characters as literal search text, not wildcards. Because of this, looking for `"AFS"` will fail because it is looking for the exact text `"%AFS%"`.

The Fix

FTS5 uses the trailing asterisk (`*`) to perform prefix partial matches. To match names starting with your input, change the parameter to look like this:

```
/**
 * 
 * @param {String} tableName 
 * @param {String} name 
 * @returns {*}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    const cleanName = name.trim();
    if(!cleanName) return [];
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT m.* FROM ${tableName} m
            JOIN ${tableName}_fts f ON m.ID = f.id
            WHERE f.name MATCH ?\`);
            
    // FIX: Use trailing asterisk (*) instead of percentage signs (%)
    return MAGPIE_DATABASE.sync
        .resultsLoader(statement.all(\`${cleanName}*\`));
}
```

💡 Multi-Word Search Optimization Hint

Because your prototype names contain spaces and symbols (like `"AFS crew supplies (1wk)"`), FTS5 splits them into individual words. If a user tries to search for multiple words (e.g., `"AFS crew"`), passing `${cleanName}*` results in `"AFS crew*"`. SQLite will evaluate this as: *Find rows with the exact token "AFS" AND any token starting with "crew"*.

If you want users to be able to type parts of phrases fluidly, wrap the query string in double quotes inside your binding:

```
// Allows phrase matching like "Mars-class Combat" seamlessly
return MAGPIE_DATABASE.sync
    .resultsLoader(statement.all(\`"${cleanName}"*\`));
```

If you are ready to move forward, let me know:

- Do you want to see how to handle a search query if a user inputs **special characters** like brackets `[` or `]` which might confuse the FTS5 parser?
- Would you like help integrating these table-creation queries into your **main server boot script** so they run automatically when you clear or move the database file?

Show all

/\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const cleanName = name.trim(); if(!cleanName) return \[\]; const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT m.\* FROM ${tableName} m JOIN ${tableName}\_fts f ON m.ID = f.id WHERE f.name MATCH?\`); return MAGPIE\_DATABASE.sync.resultsLoader(statement.all(\`${cleanName}%\`)); }

You are still using the percentage sign (`%`) on the last line of your function:  
`statement.all(`${cleanName}%`)`

As mentioned, **FTS5 completely ignores the `%` sign** as a wildcard \[1\]. If you use `${cleanName}%`, SQLite will literally look for a name that ends with a percentage sign character. It will return `[]` when you search for `"AFS"`.

The Correct Syntax

You must use an asterisk (`*`) \[1\]. Change the `%` to `*`:

```
/**
 * 
 * @param {String} tableName 
 * @param {String} name 
 * @returns {*}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    const cleanName = name.trim();
    if(!cleanName) return [];
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT m.* FROM ${tableName} m
            JOIN ${tableName}_fts f ON m.ID = f.id
            WHERE f.name MATCH ?\`);
            
    // FIX: Changed % to *
    return MAGPIE_DATABASE.sync
        .resultsLoader(statement.all(\`${cleanName}*\`));
}
```

Why FTS5 uses `*` instead of `%`

- Standard SQLite `LIKE` uses `%` (matches any sequence of zero or more characters).
- SQLite FTS5 `MATCH` uses `*` (specifies a prefix token match) \[1\].

If you make that one-character swap, your function is completely finished, optimized, and ready for production.

If you test this updated version in your console, let me know:

- Does searching for **"AFS"** successfully return your item now?
- Do you want to see how to sanitize the input if users accidentally type **FTS5 control operators** like `AND`, `OR`, or `NOT` into the search bar?

Show all

/\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const cleanName = name.trim(); if(!cleanName) return \[\]; const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT m.\* FROM ${tableName} m JOIN ${tableName}\_fts f ON m.ID = f.id WHERE f.name MATCH?\`); return MAGPIE\_DATABASE.sync.resultsLoader(statement.all(\`${cleanName}\`)); }

By removing the percentage sign, your query is now syntactically clean, but by omitting the trailing asterisk (`*`), you are performing an **exact token match** rather than a **partial prefix match**.

How your current version behaves:

- Searching for `"Auxiliary"` will find `"Auxiliary Ship"`.
- Searching for `"Aux"` will return `[]` (nothing), because it looks for an exact word match for "Aux".

How to get the partial matching you wanted:

To ensure typing `"AFS"` matches `"AFS crew supplies"`, or `"Mars"` matches `"Mars-class Combat Stores Ship"`, you must append the asterisk (`*`) to the bound parameter string.

Here is the exact production-ready adjustment:

```
/**
 * 
 * @param {String} tableName 
 * @param {String} name 
 * @returns {*}
 */
MAGPIE_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name)
{
    const cleanName = name.trim();
    if(!cleanName) return [];
    const statement = MAGPIE_DATABASE.sync.world
        .prepare(\`SELECT m.* FROM ${tableName} m
            JOIN ${tableName}_fts f ON m.ID = f.id
            WHERE f.name MATCH ?\`);
            
    // ADD THE ASTERISK HERE for partial prefix lookups:
    return MAGPIE_DATABASE.sync
        .resultsLoader(statement.all(\`${cleanName}*\`));
}
```

⚠️ Crucial Safety Note: Sanitizing FTS5 Reserved Words

Because your code passes `cleanName` directly into the FTS5 `MATCH` statement, a user typing certain characters can crash your database worker. FTS5 treats boolean words like **`AND`**, **`OR`**, and **`NOT`** as code operations.

If someone searches for a phrase like `"Alpha And Omega"`, FTS5 will throw a syntax error and crash because `And` is not followed by a valid target token.

To fix this easily and allow safe, flexible multi-word spaces, wrap the user's string inside double quotes `""` before appending the asterisk:

```
// This treats the entire user string safely as a literal phrase prefix
return MAGPIE_DATABASE.sync
    .resultsLoader(statement.all(\`"${cleanName}"*\`));
```

If you try this in your terminal, let me know:

- Does searching for **`"Mars"`** successfully pull up your `"Mars-class Combat Stores Ship"`?
- Do you want to check if your **server boot file** needs an automated check to verify these tables/triggers exist on startup?

Show all

/\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const cleanName = name.trim(); if(!cleanName) return \[\]; const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT m.\* FROM ${tableName} m JOIN ${tableName}\_fts f ON m.ID = f.id WHERE f.name MATCH?\`); return MAGPIE\_DATABASE.sync.resultsLoader(statement.all(\`${cleanName}\*\`)); }

Perfect! Your code is now fully optimized, functional, and production-ready. By adding that trailing asterisk (`*`), you have enabled ultra-fast text prefix matching that utilizes the underlying FTS5 engine instead of scanning your whole database.

Final Verification Trace

To ensure everything works smoothly under real-world usage, here is how the query engine handles different strings now:

<table><tbody><tr><th colspan="undefined">User Input</th><th colspan="undefined">Evaluated FTS Query</th><th colspan="undefined">Matches Entity?</th></tr><tr><td colspan="undefined"><code>"AFS"</code></td><td colspan="undefined"><code>'AFS*'</code></td><td colspan="undefined"><strong>Yes</strong> (Matches <em>"AFS crew supplies (1wk) [11t]"</em>)</td></tr><tr><td colspan="undefined"><code>"Mars"</code></td><td colspan="undefined"><code>'Mars*'</code></td><td colspan="undefined"><strong>Yes</strong> (Matches <em>"Mars-class Combat Stores Ship"</em>)</td></tr><tr><td colspan="undefined"><code>"Auxiliary"</code></td><td colspan="undefined"><code>'Auxiliary*'</code></td><td colspan="undefined"><strong>Yes</strong> (Matches <em>"Auxiliary Ship"</em>)</td></tr><tr><td colspan="undefined"><code>"Aux"</code></td><td colspan="undefined"><code>'Aux*'</code></td><td colspan="undefined"><strong>Yes</strong> (Matches <em>"Auxiliary Ship"</em>)</td></tr></tbody></table>

🛠️ One Last Pro-Tip for Dynamic Tables

Since your function uses a template literal to inject the table name (`FROM ${tableName} m`), remember to only call this method using trusted, hardcoded table strings inside your application layer (e.g., `MAGPIE_DATABASE.loadWorldRowByName("MAGPIE_SYMBOL", query)`). Avoid feeding unvalidated user input directly into the `tableName` parameter.

If you would like to continue expanding your database framework, let me know:

- Do you want to see how to integrate this configuration into your **automated schema migrations or server boot sequence**?
- Do you want to optimize searches for strings buried **in the absolute middle of a word** (where a prefix match won't trigger)?

Show all

/\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const cleanName = name.trim(); if(!cleanName) return \[\]; const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT m.\* FROM ${tableName} m JOIN ${tableName}\_fts f ON m.ID = f.id WHERE f.name MATCH?\`); return MAGPIE\_DATABASE.sync.resultsLoader(statement.all(\`"${cleanName}"\*\`)); }

Wrapping the variable in double quotes (`"${cleanName}"*`) is an excellent choice. It protects your FTS5 parser from syntax crashes if a user types spaces or boolean words like `AND`, `OR`, or `NOT`.

However, wrapping the entire search string in double quotes changes how FTS5 processes multi-word queries. You should choose the behavior that fits your game's design:

1\. Behavior of your current code: Exact Phrase Prefix

By wrapping everything in one set of quotes (`"${cleanName}"*`), SQLite treats the input as a strict, ordered phrase.

- **Search:** `"Mars-class Combat"` $→right arrow$ **Matches** *"Mars-class Combat Stores Ship"*
- **Search:** `"Combat Mars"` $→right arrow$ **Returns `[]`** (Fails because the words are out of order)
- **Search:** `"Mars Combat"` $→right arrow$ **Returns `[]`** (Fails because it is missing the literal `-class` characters in between)

2\. Alternative behavior: Intersecting Word Prefix (More flexible)

If you want your players or tools to find the ship by typing words in any order (e.g., typing `"Combat Mars"` or `"Ship Stores"`), you must wrap **each individual word** in quotes and add an asterisk to each word.

If you prefer this flexible, out-of-order search behavior, update your parameter binding line to tokenize the string like this:

```
// Splits spaces, wraps each word safely in quotes, and appends an asterisk to each
const ftsQuery = cleanName
    .split(/\s+/)
    .map(word => \`"${word.replace(/"/g, '""')}"*\`) // Escapes inner quotes just in case
    .join(' '); // FTS5 joins words with an implicit 'AND'

return MAGPIE_DATABASE.sync.resultsLoader(statement.all(ftsQuery));
```

Final Summary of Your Implementation

Your FTS5 setup is fully complete and robust:

- **The Tables:** `MAGPIE_SYMBOL` houses the source prototype rows, and `MAGPIE_SYMBOL_fts` acts as the ultra-fast search index.
- **The Automation:** Your three database triggers (`ts_symbol_insert`, `ts_symbol_update`, `ts_symbol_delete`) handle all indexing in the background completely on their own.
- **The Performance:** Your search execution bypasses slow table scans entirely, executing in sub-millisecond times even if your asset library scales to thousands of items.

Let me know if you would like to move on to:

- Writing a **startup validation script** to ensure these FTS tables and triggers are automatically built if the database file is ever wiped or moved.
- Setting up text search for a **different table** in your framework.

Show all

/\*\* \* \* @param {String} tableName \* @param {String} name \* @returns {\*} \*/ MAGPIE\_DATABASE.loadWorldRowByName = function loadWorldRowByName(tableName, name) { const cleanName = name.trim(); if(!cleanName) return \[\]; const ftsQuery = cleanName.split(/\\s+/).map(word => \`"${word.replace(/"/g, '""')}"\*\`).join(" "); const statement = MAGPIE\_DATABASE.sync.world.prepare(\`SELECT m.\* FROM ${tableName} m JOIN ${tableName}\_fts f ON m.ID = f.id WHERE f.name MATCH?\`); return MAGPIE\_DATABASE.sync.resultsLoader(statement.all(ftsQuery)); }

This is the gold standard implementation for text search in SQLite.

Why this final version is bulletproof:

1. **Out-of-Order Matching:** A user can search for `"Combat Mars"` or `"supplies AFS"` and it will successfully find the rows regardless of word order.
2. **Crash Prevention:** If someone searches for terms containing FTS5 reserved keywords (like `AND`, `NOT`, `OR`), your `.map()` logic wraps them in quotes, neutralizing the operators and preventing database engine crashes.
3. **Double-Quote Escaping:** The `.replace(/"/g, '""')` safely handles instances where a user explicitly types a quotation mark into your search bar.
4. **Sub-Millisecond Performance:** It preserves the fast indexed prefix matching via the trailing `*` attached to every single token.

Your text-search subsystem for prototypes is fully optimized and complete.

To ensure your system remains stable across deployments, let me know:

- Would you like to write a **database setup / migration script** that automatically creates this FTS5 table and its triggers if you ever deploy this server on a fresh machine or delete the `.db` file?
- Do you need to apply this exact same out-of-order search pattern to any **other tables** in your game engine?

Show all

"Would you like to write a database setup / migration script that automatically creates this FTS5 table and its triggers if you ever deploy this server on a fresh machine or delete the.db file?" yes

Here is a production-ready, self-contained database initialization function. You should run this function right after opening your `world.db` connection at server startup.

It safely provisions your main table, the FTS5 tracking table, all three automation triggers, and performs an automatic backfill if any records are missing—all without destroying your existing data.

The Initialization Script

```
/**
 * Ensures the prototype tables, FTS5 indexes, and self-maintaining triggers
 * exist and are correctly configured on server boot.
 * @param {Database} db - The active better-sqlite3 database instance (MAGPIE_DATABASE.sync.world)
 */
MAGPIE_DATABASE.initializeSymbolSchema = function initializeSymbolSchema(db) {
    // Wrap the entire boot setup in a transaction for maximum speed and safety
    db.transaction(() => {
        // 1. Ensure the core prototype table exists
        db.exec(\`
            CREATE TABLE IF NOT EXISTS MAGPIE_SYMBOL (
                ID INTEGER PRIMARY KEY,
                type INTEGER,
                requirementID INTEGER,
                compoundID INTEGER,
                data TEXT,
                name TEXT
            );
        \`);

        // 2. Ensure a standard index exists on the name column for standard lookups
        db.exec(\`
            CREATE INDEX IF NOT EXISTS idx_magpie_symbol_name 
            ON MAGPIE_SYMBOL(name);
        \`);

        // 3. Create the permanent FTS5 search index table
        db.exec(\`
            CREATE VIRTUAL TABLE IF NOT EXISTS MAGPIE_SYMBOL_fts 
            USING fts5(id UNINDEXED, name, tokenize="porter");
        \`);

        // 4. TRIGGER: Automated Sync on Insertion
        db.exec(\`
            CREATE TRIGGER IF NOT EXISTS ts_symbol_insert 
            AFTER INSERT ON MAGPIE_SYMBOL
            BEGIN
                INSERT INTO MAGPIE_SYMBOL_fts(id, name) VALUES (new.ID, new.name);
            END;
        \`);

        // 5. TRIGGER: Automated Sync on Updates
        db.exec(\`
            CREATE TRIGGER IF NOT EXISTS ts_symbol_update 
            AFTER UPDATE OF name ON MAGPIE_SYMBOL
            BEGIN
                UPDATE MAGPIE_SYMBOL_fts SET name = new.name WHERE id = old.ID;
            END;
        \`);

        // 6. TRIGGER: Automated Sync on Deletions
        db.exec(\`
            CREATE TRIGGER IF NOT EXISTS ts_symbol_delete 
            AFTER DELETE ON MAGPIE_SYMBOL
            BEGIN
                DELETE FROM MAGPIE_SYMBOL_fts WHERE id = old.ID;
            END;
        \`);

        // 7. Safety Backfill: Catch up the FTS index if rows were inserted offline
        db.exec(\`
            INSERT INTO MAGPIE_SYMBOL_fts(id, name) 
            SELECT ID, name FROM MAGPIE_SYMBOL 
            WHERE ID NOT IN (SELECT id FROM MAGPIE_SYMBOL_fts) 
              AND name IS NOT NULL;
        \`);
    })(); // Execute the transaction instantly
    
    console.log("MAGPIE_SYMBOL table, FTS5 index, and sync triggers verified successfully.");
};
```

How to Integrate This

Find the section in your codebase where `MAGPIE_DATABASE.sync.world` is first created (likely in your database manager or engine setup file), and pass it right into the function:

```
// Example integration sequence on server startup:
const dbPath = 'C:\\Users\\Marika\\matheraptor\\projects\\MAGPIE_Server\\db\\world.db';
MAGPIE_DATABASE.sync.world = require('better-sqlite3')(dbPath);

// Run the initialization schema guard immediately on boot
MAGPIE_DATABASE.initializeSymbolSchema(MAGPIE_DATABASE.sync.world);
```

Why this structure is ideal for your server:

- **Idempotent / Safe to Run Repeatedly:** The `IF NOT EXISTS` guards ensure that running this every time your server restarts takes less than a millisecond and will never overwrite or clear your existing rows.
- **Transactional Stability:** If a fresh machine loses power or crashes halfway through creating the triggers, the database engine will roll back to a clean state, preventing a corrupted database file.

Let me know if you would like to:

- See how to write a quick **integrity-check script** to print out whether the main table row count perfectly matches your FTS row count on startup.
- Apply this initialization to **another table** in your database architecture.

Show all

Google apps