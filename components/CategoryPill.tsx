import { CATEGORY_LABELS } from '@/lib/labels';
import type { ProjectCategory } from '@/lib/types';

export default function CategoryPill({ category }: { category: ProjectCategory }) {
	return <span className="cat-pill">{CATEGORY_LABELS[category]}</span>;
}
