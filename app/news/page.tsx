import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import { gradientFor } from '@/components/cardGradients';
import { getBlogPosts } from '@/lib/api';
import { formatMonthYear } from '@/lib/labels';

export const metadata: Metadata = {
	title: 'News',
	description: 'What we’re building, launching, and learning — as it happens.',
};

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
	const params = await searchParams;
	const { data: posts } = await getBlogPosts({ tag: params.tag });
	const [featured, ...rest] = posts;

	return (
		<section className="block">
			<div className="wrap">
				<div className="block-eyebrow">Updates</div>
				<div className="block-head">
					<div>
						<h2>News &amp; stories</h2>
						<p>What we&rsquo;re building, launching, and learning — as it happens.</p>
					</div>
				</div>

				{posts.length === 0 ? (
					<p style={{ color: 'var(--ink-soft)' }}>No posts yet — check back soon.</p>
				) : (
					<>
						{featured && (
							<Link href={`/news/${featured.slug}`} className="news-feature">
								<div className="thumb" style={gradientFor(featured.slug)}>
									{featured.coverImage && (
										<Image src={featured.coverImage} alt="" fill sizes="(max-width: 780px) 100vw, 50vw" />
									)}
								</div>
								<div>
									<span className="cat-pill">Featured</span>
									<h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', margin: '14px 0 12px' }}>
										{featured.title}
									</h3>
									<p style={{ color: 'var(--ink-soft)', fontSize: '14.5px', margin: '0 0 16px' }}>
										{featured.body.length > 200 ? `${featured.body.slice(0, 200)}…` : featured.body}
									</p>
									<span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-soft)' }}>
										{formatMonthYear(featured.publishedAt)}
									</span>
								</div>
							</Link>
						)}

						{rest.length > 0 && (
							<div className="news-grid">
								{rest.map((post) => (
									<NewsCard key={post.id} post={post} />
								))}
							</div>
						)}
					</>
				)}
			</div>
		</section>
	);
}
