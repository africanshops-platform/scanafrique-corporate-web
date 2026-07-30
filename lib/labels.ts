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
