export type ProjectCategory =
	| 'IT_FINTECH'
	| 'IT_COMMERCE'
	| 'IT_CIVIC'
	| 'CONSTRUCTION'
	| 'GENERAL_SUPPLIES';

export type ProjectStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED';

export interface ProjectMilestone {
	label: string;
	targetDate?: string;
	completed?: boolean;
	completedDate?: string;
}

export interface ProjectDonationConfig {
	enabled?: boolean;
	paystackEnabled?: boolean;
	bankAccountName?: string;
	bankAccountNumber?: string;
	bankName?: string;
}

export interface Project {
	id: string;
	title: string;
	slug: string;
	summary: string;
	body?: string;
	coverImage?: string;
	gallery: string[];
	category: ProjectCategory;
	status: ProjectStatus;
	startDate?: string;
	endDate?: string;
	platformLink?: string;
	milestones: ProjectMilestone[];
	donation?: ProjectDonationConfig;
	createdAt: string;
	updatedAt: string;
}

export interface TeamMember {
	id: string;
	name: string;
	role: string;
	bio?: string;
	photo?: string;
	displayOrder: number;
	socialLinks?: { linkedin?: string; x?: string; instagram?: string };
	isActive: boolean;
}

export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	coverImage?: string;
	body: string;
	author?: string;
	tags: string[];
	status: 'DRAFT' | 'PUBLISHED';
	publishedAt?: string;
	createdAt: string;
	updatedAt: string;
}

export interface CoreValue {
	title: string;
	body: string;
}

export interface CompanyProfile {
	id: string;
	mission?: string;
	coreValues?: CoreValue[];
	whitepaperBody?: string;
	contactEmail?: string;
	contactPhone?: string;
	address?: string;
	socialLinks?: { linkedin?: string; x?: string; instagram?: string };
	updatedAt: string;
}

export interface Paginated<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}
