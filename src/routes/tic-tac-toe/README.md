# Implementation of Tic-Tac-Toe with different Svelte Concepts

## Parent -> Child value pass down

- Slot
- Component properties
- Component binding
- Functions as Component properties
- Context-API

## Child -> Parent propagation

- Event forwarding
- Providing Component functions
- Dispatching custom Events
- Calling functions provided by parent

## Bi-directional Parent <-> Child exchange

- 2-way value binding
- Simple Stores
- Custom Stores
  - Pocketbase
  - External API (e.g. CrudCrud)

# Enums vs Union Types

https://www.bam.tech/article/should-you-use-enums-or-union-types-in-typescript
https://www.becomebetterprogrammer.com/typescript-union-types-vs-enums/

export enum Move {
O = 'O',
X = 'X',
EMPTY = ''
}

vs

export type Move = 'X' | 'O' | '';

# TODO

## Simple history

- https://codesandbox.io/s/svelte-tic-tac-toe-hihhy
- https://renedellefont.com/writing/building-tic-tac-toe-in-svelte/
