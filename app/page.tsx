import Link from 'next/link';
import { getCompanyProfile } from '@/lib/api';

const DEFAULT_LEDE =
	"We're a Nigerian-born company solving real problems across Africa with technology, infrastructure, and supply — starting from home ground as our pioneer proof, then building outward.";

export default async function HomePage() {
	const profile = await getCompanyProfile();
	const lede = profile?.mission || DEFAULT_LEDE;

	return (
		<>
			<header className="hero">
				<svg className="pulse-line" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
					<path
						d="M0,180 L200,180 L240,80 L280,260 L320,180 L1200,180"
						stroke="var(--orange)"
						strokeWidth="2"
						fill="none"
						opacity="0.55"
					/>
					<path
						d="M0,220 L350,220 L390,140 L430,280 L470,220 L1200,220"
						stroke="var(--pulse)"
						strokeWidth="1.5"
						fill="none"
						opacity="0.35"
					/>
				</svg>
				<div className="wrap">
					<div className="eyebrow">Scanafrique Ltd — IT · Construction · General Supplies</div>
					<h1>
						Building from the continent&rsquo;s <em>heartbeat</em>.
					</h1>
					<p className="lede">
						{lede}
						{' '}
						AfricanShops, our commerce &amp; fintech platform, is the first heartbeat of that mission.
					</p>
					<div className="cta-row">
						<Link className="btn orange" href="/projects">
							See our projects
						</Link>
						<Link className="btn outline" href="/core-values">
							Read our whitepaper
						</Link>
					</div>
				</div>
			</header>

			<section className="block" style={{ paddingTop: '64px' }}>
				<div className="wrap">
					<div className="block-eyebrow">Pioneer project</div>
					<div className="flagship">
						<div className="thumb">AfricanShops</div>
						<div>
							<h3>AfricanShops — Commerce, Civic &amp; Fintech</h3>
							<p>
								Our flagship, ground-breaking project: a pan-African marketplace, civic participation platform, and
								fintech layer, launched from Nigeria as proof that African-built technology can serve the whole
								continent.
							</p>
							<span className="status-pill ongoing">Ongoing</span>{' '}
							<span className="cat-pill">IT — Fintech &amp; Commerce</span>
						</div>
					</div>
				</div>
			</section>

			<section className="block">
				<div className="wrap">
					<div className="block-head">
						<div>
							<h2>Three ways we build</h2>
							<p>One company, three disciplines, all pointed at the same goal.</p>
						</div>
					</div>
					<div className="teaser-grid">
						<div className="teaser-card">
							<div className="n">01 / Digital</div>
							<h4>Information Technology</h4>
							<p>Fintech, commerce, and civic platforms built for African conditions first.</p>
							<Link className="go" href="/projects?category=IT_FINTECH">
								See IT projects →
							</Link>
						</div>
						<div className="teaser-card">
							<div className="n">02 / Physical</div>
							<h4>Construction</h4>
							<p>The infrastructure backbone behind our digital ambitions — logistics hubs, facilities, and more.</p>
							<Link className="go" href="/projects?category=CONSTRUCTION">
								See construction work →
							</Link>
						</div>
						<div className="teaser-card">
							<div className="n">03 / Community</div>
							<h4>General Supplies</h4>
							<p>Getting essential goods where they&rsquo;re needed — from equipment to everyday necessities.</p>
							<Link className="go" href="/projects?category=GENERAL_SUPPLIES">
								See supply programs →
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="block band">
				<div className="wrap" style={{ textAlign: 'center' }}>
					<div className="block-eyebrow" style={{ justifyContent: 'center' }}>
						Our why
					</div>
					<h2 style={{ marginBottom: '20px' }}>
						If it works in Nigeria, under real pressure, it&rsquo;s ready for the continent.
					</h2>
					<p style={{ color: '#cddbd2', maxWidth: '60ch', margin: '0 auto 28px' }}>
						That&rsquo;s not a slogan — it&rsquo;s how we build. Read the full story behind our approach.
					</p>
					<Link className="btn orange" href="/core-values">
						Read our core values
					</Link>
				</div>
			</section>
		</>
	);
}
