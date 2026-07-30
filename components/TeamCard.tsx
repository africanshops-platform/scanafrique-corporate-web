import Image from 'next/image';
import type { TeamMember } from '@/lib/types';

export default function TeamCard({ member }: { member: TeamMember }) {
	return (
		<div className="member">
			<div className="photo">
				{member.photo && <Image src={member.photo} alt={member.name} fill sizes="(max-width: 900px) 50vw, 25vw" />}
			</div>
			<h3>{member.name}</h3>
			<div className="role">{member.role}</div>
			{member.bio && <p>{member.bio}</p>}
		</div>
	);
}
