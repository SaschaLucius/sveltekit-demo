import { writable, derived } from 'svelte/store';
import { Move } from '../types';

//
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}

export const count2 = createCount();
//
export const localStore = (
	key: string,
	initial: { id: string; name: string; completed: boolean }
) => {
	// receives the key of the local storage and an initial value

	const toString = (value: { id: string; name: string; completed: boolean }) =>
		JSON.stringify(value, null, 2); // helper function
	const toObj = JSON.parse; // helper function

	if (localStorage.getItem(key) === null) {
		// item not present in local storage
		localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
	}

	const saved = toObj(localStorage.getItem(key) as string); // convert to object

	const { subscribe, set, update } = writable(saved); // create the underlying writable store

	return {
		subscribe,
		set: (value: { id: string; name: string; completed: boolean }) => {
			localStorage.setItem(key, toString(value)); // save also to local storage as a string
			return set(value);
		},
		update
	};
};
//

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
