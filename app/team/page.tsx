import type { Metadata } from 'next';
import TeamCard from '@/components/TeamCard';
import { getTeam } from '@/lib/api';

export const metadata: Metadata = {
	title: 'Team',
	description: 'The front-runners steering Scanafrique’s work across technology, infrastructure, and supply.',
};

export default async function TeamPage() {
	const team = await getTeam();

	return (
		<>
			<section className="block band" style={{ paddingBottom: '56px' }}>
				<div className="wrap" style={{ textAlign: 'center' }}>
					<div className="block-eyebrow" style={{ justifyContent: 'center' }}>
						Leadership
					</div>
					<h2>The people behind it</h2>
					<p style={{ color: '#cddbd2', maxWidth: '56ch', margin: '0 auto' }}>
						Front-runners steering Scanafrique&rsquo;s work across every niche — technology, infrastructure, and
						supply.
					</p>
				</div>
			</section>
			<section className="block" style={{ paddingTop: '48px' }}>
				<div className="wrap">
					{team.length === 0 ? (
						<p style={{ color: 'var(--ink-soft)' }}>Team profiles are coming soon.</p>
					) : (
						<div className="team-grid">
							{team.map((member) => (
								<TeamCard key={member.id} member={member} />
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
}
