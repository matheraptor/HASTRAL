Architettura Tecnica e Ottimizzazione Componenti Shelder Evolution
Ecco il riepilogo tecnico dell'architettura delle componenti per il progetto Shelder Evolution, ottimizzato per la stabilità delle Hidden Class di V8 e le prestazioni del ciclo MAGPIE_RUNTIME.

1. Filosofia: Il DNA a Carte
   Il sistema unifica la gestione di entità e moduli utilizzando un design basato su "carte". Narrativamente e strutturalmente, ogni componente installato su un'entità è trattato come una carta nel mazzo dell'entità (entity.equip), ma tecnicamente opera come un Dumb Container di dati numerici puri [1, 2].

---

2. Struttura dei Dati Freddi (Component Prototype)
   Il prototipo risiede nel database centrale e definisce il "comportamento" e le specifiche immutabili del componente [3, 4].
   componentID: Intero univoco (es. 1135).
   type: Enum del tipo (es. ENGINE, SENSOR, PROCESSOR).
   inputLength / outputLength: Dimensioni fisse per i buffer di telemetria dell'istanza.
   traits: Oggetto contenente specifiche fisiche (massa, tolleranza calore, ecc.) [4, 5].

---

3. Struttura dei Dati Caldi (Component Instance)
   Ogni istanza nell'array entity.equip deve mantenere una forma monomorfa per garantire l'ottimizzazione V8 [2, 6].
   Dettaglio Buffer state (5 slot fissi):
   enumState: Stato attuale (0: nullo, 1: distrutto, 2: disabilitato, 3: danneggiato, 4: usurato, ecc.).
   [7] enumLastState: Stato precedente (per logiche di uscita).
   [8] timestampLastChange: Timestamp dell'ultima transizione.
   [9] targetValue: Obiettivo numerico (soglia di riparazione, spinta desiderata, carica massima).
   [10] expirationTimestamp: Quando scade l'azione corrente (cooldown, completamento riparazione).

---

4. Esempi Pratici di Utilizzo (HIVE Integration)
   L'HIVE elabora questi dati durante il ciclo native refresh o TICK senza generare spazzatura (Zero Garbage Collection) [11, 12].
   A. Smoothing della Spinta (Throttle)
   Input: Il pilota invia un comando di spinta al 100%.
   TargetValue: Impostato a 1.0.
   HIVE Logic: In ogni native refresh (10ms), il sistema confronta output[spinta_attuale] con targetValue. Se diversi, incrementa linearmente la spinta nell'array output fino a raggiungere l'obiettivo, evitando scatti fisici nel sistema POVART [13, 14].
   B. Ciclo di Riparazione (Repair Threshold)
   EnumState: Impostato su REPAIRING.
   TargetValue: Impostato a 0.8 (80% integrità necessaria per tornare operativo).
   HIVE Logic: Un drone di riparazione scrive incrementi di valore nell'array output[integrita]. Quando output[integrita] &gt;= targetValue, l'HIVE cambia automaticamente enumState in STABLE e libera lo slot expirationTimestamp.
   C. Caricamento Sistemi (Capacitor/Cooldown)
   EnumState: CHARGING.
   ExpirationTimestamp: Calcolato come adesso + 5000ms.
   TargetValue: 5000.0 (energia richiesta).
   HIVE Logic: L'interfaccia (Artist) legge expirationTimestamp per disegnare una barra di caricamento accurata, mentre il sistema di fisica impedisce l'attivazione del componente finché Date.now() &lt; expirationTimestamp.
5. Vincoli di Performance
   Monomorfismo: Tutte le istanze caricate in equip devono avere le stesse chiavi nello stesso ordine [6].
   Zero GC: Le operazioni di aggiornamento devono modificare gli indici dei Float64Array esistenti, mai istanziare nuovi array o oggetti durante il loop [12].
   Sincronizzazione POVART: Eventuali impatti rilevati dal "Ground Clamp" (z floor) si traducono in modifiche dirette allo slot enumState (es. passaggio a DAMAGED) [15-17].
