import type { Metadata } from 'next';
import { getCompanyProfile } from '@/lib/api';
import { splitWhitepaper } from '@/lib/prose';

export const metadata: Metadata = {
	title: 'Core Values',
	description: 'Our whitepaper — how Scanafrique Ltd builds technology and infrastructure from Africa’s own conditions.',
};

const DEFAULT_PILLARS = [
	{
		title: 'Africa-first engineering',
		body: "We don't adapt Western products for African markets — we design from the ground conditions up: intermittent connectivity, mobile-first, cash-and-digital-hybrid payments, and infrastructure that isn't always there yet.",
	},
	{
		title: 'Nigeria as proving ground',
		body: "Every product launches from home first. Nigeria is Africa's most demanding test market — dense, competitive, infrastructure-constrained. If it survives here, it's ready to scale outward.",
	},
	{
		title: 'Infrastructure, not just apps',
		body: 'Software alone doesn’t move a continent forward. Our construction and general supplies work builds the physical backbone — logistics, facilities, equipment — alongside the digital one.',
	},
];

export default async function CoreValuesPage() {
	const profile = await getCompanyProfile();
	const pillars = profile?.coreValues?.length ? profile.coreValues : DEFAULT_PILLARS;
	const blocks = profile?.whitepaperBody ? splitWhitepaper(profile.whitepaperBody) : [];

	return (
		<>
			<div className="cv-hero">
				<div className="wrap">
					<div className="eyebrow" style={{ justifyContent: 'center' }}>
						Our whitepaper
					</div>
					<h1>Technology built from Africa&rsquo;s own pulse, not borrowed from elsewhere.</h1>
					<p>
						Every choice we make starts from one question: does this actually work under African conditions — the
						connectivity, the payment rails, the infrastructure, as they really are?
					</p>
				</div>
			</div>

			<section className="block">
				<div className="wrap">
					<div className="cv-pillars">
						{pillars.map((pillar, index) => (
							<div className="cv-pillar" key={pillar.title}>
								<div className="n">{String(index + 1).padStart(2, '0')}</div>
								<h3>{pillar.title}</h3>
								<p>{pillar.body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{blocks.length > 0 && (
				<section className="block" style={{ paddingTop: 0 }}>
					<div className="cv-narrative">
						{blocks.map((block, index) => {
							if (block.type === 'heading') {
								return <h2 key={index}>{block.text}</h2>;
							}
							if (block.type === 'quote') {
								// Anchor on the closing quote mark, not the first em dash — the
								// quote itself may contain its own internal " — " (as this one does).
								const match = block.text.match(/^(.*["”])\s*—\s*(.+)$/);
								const quote = match ? match[1] : block.text;
								const citation = match ? match[2] : undefined;
								return (
									<div className="cv-quote" key={index}>
										{quote}
										{citation && <span>— {citation}</span>}
									</div>
								);
							}
							return <p key={index}>{block.text}</p>;
						})}
					</div>
				</section>
			)}
		</>
	);
}
