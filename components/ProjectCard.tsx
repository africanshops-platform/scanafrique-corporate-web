import Image from 'next/image';
import Link from 'next/link';
import CategoryPill from './CategoryPill';
import StatusPill from './StatusPill';
import { gradientFor } from './cardGradients';
import { formatMonthYear } from '@/lib/labels';
import type { Project } from '@/lib/types';

export default function ProjectCard({ project }: { project: Project }) {
	const start = formatMonthYear(project.startDate);
	const end = formatMonthYear(project.endDate);
	const meta =
		project.status === 'COMPLETED' && start && end
			? `${start} – ${end}`
			: project.status === 'UPCOMING'
				? start
					? `Est. start ${start}`
					: undefined
				: start
					? `Started ${start}`
					: undefined;

	return (
		<Link href={`/projects/${project.slug}`} className="card">
			<div className="thumb" style={gradientFor(project.slug)}>
				{project.coverImage && (
					<Image src={project.coverImage} alt="" fill sizes="(max-width: 600px) 100vw, 33vw" />
				)}
			</div>
			<div className="body">
				<div className="tags">
					<StatusPill status={project.status} />
					<CategoryPill category={project.category} />
				</div>
				<h4>{project.title}</h4>
				<p>{project.summary}</p>
				{meta && <div className="meta">{meta}</div>}
			</div>
		</Link>
	);
}
