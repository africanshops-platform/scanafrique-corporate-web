import { STATUS_LABELS } from '@/lib/labels';
import type { ProjectStatus } from '@/lib/types';

export default function StatusPill({ status }: { status: ProjectStatus }) {
	return <span className={`status-pill ${status.toLowerCase()}`}>{STATUS_LABELS[status]}</span>;
}
