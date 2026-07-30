import Image from 'next/image';
import Link from 'next/link';
import { gradientFor } from './cardGradients';
import { formatMonthYear } from '@/lib/labels';
import type { BlogPost } from '@/lib/types';

export default function NewsCard({ post }: { post: BlogPost }) {
	const date = formatMonthYear(post.publishedAt);
	return (
		<Link href={`/news/${post.slug}`} className="news-card">
			<div className="thumb" style={gradientFor(post.slug)}>
				{post.coverImage && <Image src={post.coverImage} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />}
			</div>
			<div className="body">
				{date && <div className="date">{date}</div>}
				<h3>{post.title}</h3>
				<p>{post.body.length > 140 ? `${post.body.slice(0, 140)}…` : post.body}</p>
			</div>
		</Link>
	);
}
