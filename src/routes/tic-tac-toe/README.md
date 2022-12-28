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
