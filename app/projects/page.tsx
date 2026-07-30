import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilters from '@/components/ProjectFilters';
import { getProjects } from '@/lib/api';
import type { ProjectCategory, ProjectStatus } from '@/lib/types';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'What we’ve built, what’s underway, and what’s coming next across IT, construction, and general supplies.',
};

export default async function ProjectsPage({
	searchParams,
}: {
	searchParams: Promise<{ category?: string; status?: string }>;
}) {
	const params = await searchParams;
	const { data: projects } = await getProjects({
		category: params.category as ProjectCategory | undefined,
		status: params.status as ProjectStatus | undefined,
	});

	return (
		<section className="block" style={{ paddingBottom: '24px' }}>
			<div className="wrap">
				<div className="block-eyebrow">Portfolio</div>
				<div className="block-head">
					<div>
						<h2>Projects</h2>
						<p>Filter by category or status — see what&rsquo;s live, what&rsquo;s underway, and what&rsquo;s coming next.</p>
					</div>
				</div>

				<Suspense fallback={null}>
					<ProjectFilters />
				</Suspense>

				{projects.length === 0 ? (
					<p style={{ color: 'var(--ink-soft)', marginTop: '32px' }}>No projects match these filters yet.</p>
				) : (
					<div className="proj-grid">
						{projects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
