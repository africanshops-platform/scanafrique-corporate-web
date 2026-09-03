import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug } from '@/lib/api';
import { excerpt, formatFullDate } from '@/lib/labels';

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
	const { slug } = await params;
	const post = await getBlogPostBySlug(slug);
	if (!post) return { title: 'Post not found' };
	return {
		title: post.title,
		description: excerpt(post.body, 160),
		openGraph: post.coverImage ? { images: [post.coverImage] } : undefined,
	};
}

export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
	const { slug } = await params;
	const post = await getBlogPostBySlug(slug);
	if (!post) notFound();

	const date = formatFullDate(post.publishedAt);

	return (
		<section className="block">
			<div className="wrap news-post">
				<Link className="back-link" href="/news">
					← Back to news
				</Link>

				{post.tags.length > 0 && (
					<div className="tags" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
						{post.tags.map((tag) => (
							<span className="cat-pill" key={tag}>
								{tag}
							</span>
						))}
					</div>
				)}
				<h1>{post.title}</h1>
				<div className="meta">
					{date}
					{post.author ? ` · ${post.author}` : ''}
				</div>

				{post.coverImage && (
					<div className="cover">
						<Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 1080px) 100vw, 1080px" priority />
					</div>
				)}

				<div className="prose">
					<ReactMarkdown>{post.body}</ReactMarkdown>
				</div>
			</div>
		</section>
	);
}
