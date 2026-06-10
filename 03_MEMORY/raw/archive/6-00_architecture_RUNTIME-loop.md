00_architecture_RUNTIME-loop
I'm getting frustrated. Whenever I ask you to produce reports to summarize our progress on discussions and update the sources with, you halucinate things that we never talked about or that we emphatically warned against doing.
This corrupts the sources and therefore makes your knowledge completely useless, which makes you give me stupid suggestions that make no sense considering the discussions we had.
One last time:
the concepts of "L0" or 100-500ms update loops are halucinated. I have a very specific MAGPIE_RUNTIME setup that I've been repeating over and over and it still didn't set in your knowledge base:

- native refresh => per 10ms => refreshes itself and "" \_Guests (limited cap)
- TICK => per second => refreshes "standard" guests (default layer)
- superTICK => per minute => "super" guests (unfocused/background entities)
- megaTICK => per/hour => megaGuests (inactive mobile entitieis and/or structure type entities)
- ultraTICK => per/day => ultraGuests THEN all guests (async maintenance loop)
  All layers are capped and iterated through async, with a try catch block that automatically drops/kicks problematic guests
  MAGPIE_RUNTIME hosts guests on a particular layer based on three main criteria:
- internal logic, eg. structure < mobile < protagonist
- capacity, eg. empty slots from an higher level can accept candidates from the next layer down
- ticket request, eg. ticket requests for a specific layer
  Our POVAR system handles vector/quaternion physics based on the standard layer TICK/per second, which matches most units that are also based on per second, like m/s. Results will then be scaled according to the delta of the layer (eg. for a top layer, result = TICK.result / 100 => result per 10ms
  Entity.component.POVAR is a 16-slot array containing each POVAR element in series: P(v3), O(quat), V, A, and R, all (v3)
  I already have basic POVAR methods to deal with extraction of individual vector elements, and writing back to them via exact array index.
  Position is relative to the parent celestial center, and it's basically a standard coordinate system in radians x, y (lat, lon), and meters z (distance from center). (z - parentCelestial.radius) is conceptually "sea-level". If Elevation data is available, the z floor becomes the elevation, otherwise, it defaults back to sea-level. z floor triggers a state change between landed and airborne. When landing, there is a further check to see whether the floor is passable by the entity. If true, the entity is checked against penetration, else it goes to the landing check (can entity land safely based on components + POVAR magnitudes?). If it fails, it goes into crash mode. Regardless of the state result, each negative z floor contact is treated as impact in pure calculation, so that an impact magnitude can be calculated and interpolated with the state result to derive the actual effect of the z floor impact. Eg, a helicopter feather landing on skids might damp a little back and forth while an airliner hard-landing on a rough surface might break up, while a cargo ship pitching down from the crest of a rogue wave might break its keel in half. These are all results composed of both a stateID array and a numeric value for the delta of whatever vector or component data to update on the entity.
  Entities are dumb containers of data composed of
  ID: integer made of the timestamp at creation, down to the millisecond YYYYMMDDHHMMmmm, eg 202602201844772. This has both the advantage of being natively unique (never is a scenario where are we assigning multiple entities in the same millisecond) and natively telling us when the entity was created.
  type: integer / enum that tells us immediately exactly what this entity is, against a database of hierarchical semantics. Eg. 3781 might be the ID for "Arleigh-Burke-class Destroyer FlightIIIbatch2"
  components: object with key-value pairs. Initialized with the default values for all the components installed in the backend logic. Should we add components during development, we can normalize outdated entities during the maintenance loop, to keep a strict V8 object shape and avoid the hidden-class de-optimization problem.
  components.POVAR is one example of a component, where the key is POVAR and the value is the 16-slot array.
  Some components might have dynamic-sized arrays. We accept the performance loss of a non-fixed array size for situations like components.garrison where we could have anywhere from an empty array, to a 10k+ slots array.
  the planned pipeline for the gameplay loop is:
  MAGPIE_RUNTIME refresh => DATABASE.state.refresh() + any top layer guest ? guest.refresh() : skip => loop until TICK() (this.\_now >= Date.now() aka is current count >= 1000ms?)
  MAGPIE_RUNTIME.TICK() => DATABASE.state.TICK() + any "standard" guest ? guest.refresh() : skip => any queued ticket ? process.ticket() : skip => loop until superTICK()
  and so on
  guest.refresh() => states to process ? process => this.query(relevantSystem) => result => this.updateData(result) : skip
  guest.query(relevantSystem) => result => guest.updateData(result)
  process.ticket(ticket) => this.query(relevantSystem) => result => DATABASE.getEntity(result.guestID) => guest => guest.updateData(result)
  Basically, entities get updated on a set schedule according to the layer they're in. Ticket are processed and their data get queued for injection at the next entity update.
  Everything is asynchronous, schema-strict, and try/catch-protected, so scenario can ever freeze or crash the runtime
