# OOP in Scientific Computing

**Summary**: The application of Object-Oriented Programming (OOP) to improve extensibility and maintainability in high-performance physics simulations.

**Sources**: 11-00_Lore_00.md

**Last updated**: 2026-04-17

---

Contrary to the view that Object-Oriented Programming (OOP) is inherently inefficient, research in Time-Dependent Density-Functional Theory (TDDFT) demonstrates that OOP provides significant advantages in development and extensibility without compromising runtime efficiency. By using abstraction and polymorphism, scientific codes can separate physics interfaces from specific implementations (source: 11-00_Lore_00.md).

## Architectural Advantages

- **Loose Coupling**: Replacing "tight coupling" (where data changes break unrelated code) with modular class structures.
- **Polymorphism**: Allowing physics kernels (e.g., exchange-correlation kernels) to be swapped at runtime without modifying the core solver.
- **Abstraction**: Encapsulating low-level parallel computing libraries (like MPI/OpenMP) and math libraries (BLAS/LAPACK) within objects for safer distributed memory management.

## Gamedev Application: Engine Architecture

The principles used in scientific OOP are directly applicable to game engine design:

- **Strategy Pattern**: Swapping physics kernels is functionally identical to swapping Shader materials or material properties.
- **Adapter Pattern**: Wrapping low-level graphics APIs (Vulkan/DX12) or hardware-specific calls similarly to how MPI is wrapped in scientific clusters.

## Counter-Argument: Concept Overhead vs. Spaghetti Code

While OOP introduces "conceptual overhead," it prevents the inevitable "spaghetti code" found in large imperative (e.g., Fortran) projects as they evolve and scale.

## Related pages

- [[magpie-runtime]]
- [[strategy-pattern]]
- [[adapter-pattern]]
- [[zero-garbage-collection]]
