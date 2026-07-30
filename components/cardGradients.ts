import type { CSSProperties } from 'react';

const GRADIENTS: [string, string][] = [
	['#164a38', '#2f8f6c'],
	['#3d6ea8', '#164a38'],
	['#e05e1c', '#9a3d0e'],
	['#2f8f6c', '#3d6ea8'],
	['#9a3d0e', '#e05e1c'],
	['#164a38', '#e05e1c'],
];

export function gradientFor(seed: string) {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	const [a, b] = GRADIENTS[hash % GRADIENTS.length];
	return { '--card-a': a, '--card-b': b } as CSSProperties;
}
