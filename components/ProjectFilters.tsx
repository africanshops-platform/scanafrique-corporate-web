'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { CATEGORY_FILTERS, STATUS_FILTERS } from '@/lib/labels';

export default function ProjectFilters() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const category = searchParams.get('category') ?? '';
	const status = searchParams.get('status') ?? '';

	function setParam(key: 'category' | 'status', value: string) {
		const params = new URLSearchParams(searchParams.toString());
		if (value) params.set(key, value);
		else params.delete(key);
		router.push(`/projects${params.toString() ? `?${params}` : ''}`);
	}

	return (
		<>
			<div className="filters">
				{CATEGORY_FILTERS.map((option) => (
					<button
						key={option.value || 'all-categories'}
						type="button"
						className={category === option.value ? 'chip on' : 'chip'}
						onClick={() => setParam('category', option.value)}
					>
						{option.label}
					</button>
				))}
			</div>
			<div className="filters">
				{STATUS_FILTERS.map((option) => (
					<button
						key={option.value || 'all-statuses'}
						type="button"
						className={status === option.value ? 'chip on' : 'chip'}
						onClick={() => setParam('status', option.value)}
					>
						{option.label}
					</button>
				))}
			</div>
		</>
	);
}
