import { formatMonthYear } from '@/lib/labels';
import type { ProjectMilestone } from '@/lib/types';

export default function MilestoneTracker({ milestones }: { milestones: ProjectMilestone[] }) {
	if (milestones.length === 0) return null;

	return (
		<div className="tracker">
			<h2>Implementation tracker</h2>
			<ul className="milestones">
				{milestones.map((milestone, index) => {
					const date = milestone.completed
						? formatMonthYear(milestone.completedDate)
						: formatMonthYear(milestone.targetDate);
					const dateLabel = milestone.completed
						? date
							? `Completed ${date}`
							: 'Completed'
						: date
							? `Target ${date}`
							: undefined;

					return (
						<li key={index} className={milestone.completed ? 'milestone done' : 'milestone'}>
							<span className="dot" />
							<span className="label">{milestone.label}</span>
							{dateLabel && <span className="date">{dateLabel}</span>}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
