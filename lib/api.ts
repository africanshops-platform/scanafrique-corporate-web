import type { BlogPost, CompanyProfile, Paginated, Project, TeamMember } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://test-server.scanafrique.com';

const LIST_REVALIDATE_SECONDS = 60;
const DETAIL_REVALIDATE_SECONDS = 300;

async function apiGet<T>(path: string, revalidate: number): Promise<T | null> {
	const res = await fetch(`${API_BASE_URL}${path}`, { next: { revalidate } });
	if (res.status === 404) return null;
	if (!res.ok) throw new Error(`corporate-cms request failed: ${path} -> ${res.status}`);
	return res.json() as Promise<T>;
}

export interface ProjectFilters {
	category?: string;
	status?: string;
}

export async function getProjects(filters: ProjectFilters = {}): Promise<Paginated<Project>> {
	const params = new URLSearchParams({ limit: '50' });
	if (filters.category) params.set('category', filters.category);
	if (filters.status) params.set('status', filters.status);
	const result = await apiGet<Paginated<Project>>(`/corporate-cms/projects?${params}`, LIST_REVALIDATE_SECONDS);
	return result ?? { data: [], total: 0, page: 1, limit: 50, totalPages: 0 };
}

export function getProjectBySlug(slug: string): Promise<Project | null> {
	return apiGet<Project>(`/corporate-cms/projects/${encodeURIComponent(slug)}`, DETAIL_REVALIDATE_SECONDS);
}

export async function getTeam(): Promise<TeamMember[]> {
	const result = await apiGet<TeamMember[]>('/corporate-cms/team', LIST_REVALIDATE_SECONDS);
	return (result ?? []).slice().sort((a, b) => a.displayOrder - b.displayOrder);
}

export interface BlogFilters {
	tag?: string;
}

export async function getBlogPosts(filters: BlogFilters = {}): Promise<Paginated<BlogPost>> {
	const params = new URLSearchParams({ limit: '50' });
	if (filters.tag) params.set('tag', filters.tag);
	const result = await apiGet<Paginated<BlogPost>>(`/corporate-cms/blog?${params}`, LIST_REVALIDATE_SECONDS);
	return result ?? { data: [], total: 0, page: 1, limit: 50, totalPages: 0 };
}

export function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
	return apiGet<BlogPost>(`/corporate-cms/blog/${encodeURIComponent(slug)}`, DETAIL_REVALIDATE_SECONDS);
}

export async function getCompanyProfile(): Promise<CompanyProfile | null> {
	return apiGet<CompanyProfile>('/corporate-cms/company-profile', LIST_REVALIDATE_SECONDS);
}
