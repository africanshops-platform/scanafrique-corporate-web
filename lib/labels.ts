import type { ProjectCategory, ProjectStatus } from './types';

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
	IT_FINTECH: 'IT — Fintech',
	IT_COMMERCE: 'IT — Commerce',
	IT_CIVIC: 'IT — Civic',
	CONSTRUCTION: 'Construction',
	GENERAL_SUPPLIES: 'General Supplies',
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
	UPCOMING: 'Upcoming',
	ONGOING: 'Ongoing',
	COMPLETED: 'Completed',
};

export const CATEGORY_FILTERS: { value: ProjectCategory | ''; label: string }[] = [
	{ value: '', label: 'All categories' },
	{ value: 'IT_FINTECH', label: CATEGORY_LABELS.IT_FINTECH },
	{ value: 'IT_COMMERCE', label: CATEGORY_LABELS.IT_COMMERCE },
	{ value: 'IT_CIVIC', label: CATEGORY_LABELS.IT_CIVIC },
	{ value: 'CONSTRUCTION', label: CATEGORY_LABELS.CONSTRUCTION },
	{ value: 'GENERAL_SUPPLIES', label: CATEGORY_LABELS.GENERAL_SUPPLIES },
];

export const STATUS_FILTERS: { value: ProjectStatus | ''; label: string }[] = [
	{ value: '', label: 'All statuses' },
	{ value: 'UPCOMING', label: STATUS_LABELS.UPCOMING },
	{ value: 'ONGOING', label: STATUS_LABELS.ONGOING },
	{ value: 'COMPLETED', label: STATUS_LABELS.COMPLETED },
];

export function formatMonthYear(dateString?: string): string | null {
	if (!dateString) return null;
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) return null;
	return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatFullDate(dateString?: string): string | null {
	if (!dateString) return null;
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) return null;
	return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/** Blog post `body` is markdown source (rendered via react-markdown on the
 * post page). Card excerpts and <meta description> want plain text, so this
 * strips the common markdown syntax rather than truncating raw `## `/`**`
 * characters into the excerpt. */
export function stripMarkdown(markdown: string): string {
	return markdown
		.replace(/^#{1,6}\s+/gm, '')
		.replace(/(\*\*|__)(.*?)\1/g, '$2')
		.replace(/(\*|_)(.*?)\1/g, '$2')
		.replace(/!\[.*?\]\(.*?\)/g, '')
		.replace(/\[(.*?)\]\(.*?\)/g, '$1')
		.replace(/^>\s?/gm, '')
		.replace(/^[-*+]\s+/gm, '')
		.replace(/`{1,3}([^`]*)`{1,3}/g, '$1')
		.replace(/\r?\n+/g, ' ')
		.trim();
}

export function excerpt(markdown: string, length: number): string {
	const plain = stripMarkdown(markdown);
	return plain.length > length ? `${plain.slice(0, length)}…` : plain;
}
