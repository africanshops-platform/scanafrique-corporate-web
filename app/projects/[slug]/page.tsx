import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CategoryPill from '@/components/CategoryPill';
import DonationBox from '@/components/DonationBox';
import MilestoneTracker from '@/components/MilestoneTracker';
import StatusPill from '@/components/StatusPill';
import { getProjectBySlug } from '@/lib/api';

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);
	if (!project) return { title: 'Project not found' };
	return {
		title: project.title,
		description: project.summary,
		openGraph: project.coverImage ? { images: [project.coverImage] } : undefined,
	};
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);
	if (!project) notFound();

	return (
		<section className="block">
			<div className="wrap">
				<Link className="back-link" href="/projects">
					← Back to all projects
				</Link>
				<div className="detail">
					<div className="cover">
						{project.coverImage && <Image src={project.coverImage} alt={project.title} fill sizes="100vw" priority />}
					</div>
					<div className="content">
						<StatusPill status={project.status} /> <CategoryPill category={project.category} />
						<h1>{project.title}</h1>
						<p className="desc">{project.body || project.summary}</p>

						{project.gallery.length > 0 && (
							<div className="gallery-grid">
								{project.gallery.map((image) => (
									<Image key={image} src={image} alt="" width={320} height={240} />
								))}
							</div>
						)}

						<MilestoneTracker milestones={project.milestones} />

						{project.donation && <DonationBox donation={project.donation} />}

						{project.platformLink && (
							<p style={{ marginTop: '24px' }}>
								<a className="btn ghost" href={project.platformLink} target="_blank" rel="noreferrer">
									Visit related platform ↗
								</a>
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
