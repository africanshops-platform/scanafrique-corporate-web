import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="not-found">
			<h1>Page not found</h1>
			<p>The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.</p>
			<Link className="btn orange" href="/">
				Back to home
			</Link>
		</div>
	);
}
