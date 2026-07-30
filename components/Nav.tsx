import Image from 'next/image';
import Link from 'next/link';

const LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/core-values', label: 'Core Values' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/team', label: 'Team' },
	{ href: '/news', label: 'News' },
	{ href: '/contact', label: 'Contact' },
];

export default function Nav() {
	return (
		<nav className="site-nav">
			<Link href="/" className="brand">
				<Image src="/logo.png" alt="Scanafrique" width={36} height={27} priority />
				<span>Scanafrique</span>
			</Link>
			<input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
			<ul className="nav-links">
				{LINKS.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<div className="nav-actions">
				<Link href="/contact" className="btn orange" style={{ padding: '9px 18px', fontSize: '13px' }}>
					Get in touch
				</Link>
				<label htmlFor="nav-toggle" className="nav-toggle-btn" aria-label="Toggle navigation menu">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
		</nav>
	);
}
