# system-design-foundations

**Summary**: A senior-level guide to architectural trade-offs, database selection, scaling strategies, and production security.

**Sources**: (source: SystemDesignCourse.md)

**Last updated**: 2026-04-20

---

Mastering system design is essential for senior engineering roles, shifting the focus from implementation to architectural resilience and scalability.

## Architectural Foundations

- **DNS & IP**: DNS maps domain names to IP addresses, the foundational step of internet communication.
- **HTTP/API**: Web traffic uses HTTP; mobile apps favor JSON-based APIs for efficient data exchange.
- **Decoupling**: Separating the web/app tier from the data tier enhances scalability and security by placing databases in private networks.

## Database Paradigms

- **SQL (Relational)**: Uses rigid tables and schemas (e.g., MySQL, PostgreSQL). Prioritizes **ACID** properties, ideal for data-critical applications like financial systems.
- **NoSQL (Non-Relational)**: Flexible, schema-less structures (Document, Key-Value, Graph). Ideal for massive scale, unstructured data, and high-volume writes (e.g., MongoDB, Cassandra, Redis).

## Scaling Strategies

- **Vertical Scaling (Scale Up)**: Adding power (CPU/RAM) to one server. Simple but limited by machine capacity and single-point-of-failure risk.
- **Horizontal Scaling (Scale Out)**: Adding more servers to the pool, managed by a **Load Balancer**. Offers redundancy and near-infinite scalability.

## Production Security (Defense in Depth)

- **Perimeter**: **WAF** for traffic inspection, **VPN** for private network access.
- **Session/Application**: **CSRF tokens** to prevent forgery, sanitization to block **XSS**.

## Related pages

- [[ecs-preset-design]]
- [[topics/codecraft/architecture/index|Architecture]]
