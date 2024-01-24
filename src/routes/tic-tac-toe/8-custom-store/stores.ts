import { writable, derived } from 'svelte/store';
import { Move } from '../types';

export const squares = writable(Array.from(Array<Move>(9).fill(Move.EMPTY)));
export const winner = derived(squares, ($squares) => calculateWinner($squares));
export const isFinished = derived(winner, ($winner) => $winner != Move.EMPTY);
export const count = derived(squares, ($squares) => $squares.filter((x) => x != Move.EMPTY).length);

const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function calculateWinner(board: Move[]): Move {
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		const valueA = board[a];
		if (valueA != Move.EMPTY && valueA === board[b] && valueA === board[c]) {
			return valueA;
		}
	}
	return Move.EMPTY;
}
