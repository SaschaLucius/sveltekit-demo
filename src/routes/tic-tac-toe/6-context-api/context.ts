import { getContext, setContext } from 'svelte';
import type { Move } from '../types';

const gridContextKey = Symbol('grid');
export const getGrid = (): Move[][] => getContext(gridContextKey);
export const setGrid = (grid: Move[][]): void => {
	setContext(gridContextKey, grid);
};

const isFinishedContextKey = Symbol('isFinished');
export const getIsFinished = (): boolean => getContext(isFinishedContextKey);
export const setIsFinished = (isFinished: boolean): void => {
	setContext(isFinishedContextKey, isFinished);
};

const isXContextKey = Symbol('isX');
export const getIsX = (): boolean => getContext(isXContextKey);
export const setIsX = (isX: boolean): void => {
	setContext(isXContextKey, isX);
};
