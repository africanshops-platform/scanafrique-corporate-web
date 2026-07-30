'use client';

import { useState } from 'react';
import type { ProjectDonationConfig } from '@/lib/types';

export default function DonationBox({ donation }: { donation: ProjectDonationConfig }) {
	const hasBankDetails = Boolean(donation.bankAccountNumber && donation.bankAccountName && donation.bankName);
	const [tab, setTab] = useState<'card' | 'bank'>(donation.paystackEnabled ? 'card' : 'bank');

	if (!donation.enabled) return null;

	return (
		<div className="donate-box">
			<h2>Support this project</h2>
			<p>Public contributions go directly toward accelerating this build.</p>

			{donation.paystackEnabled && (
				<div className="donate-tabs">
					<button type="button" className={tab === 'card' ? 'active' : ''} onClick={() => setTab('card')}>
						Pay with card
					</button>
					<button type="button" className={tab === 'bank' ? 'active' : ''} onClick={() => setTab('bank')}>
						Bank transfer
					</button>
				</div>
			)}

			<div className="donate-panel">
				{tab === 'card' ? (
					<p className="coming-soon-note">
						Card payments are launching soon. In the meantime, use the bank transfer details below.
					</p>
				) : hasBankDetails ? (
					<dl>
						<dt>Account name</dt>
						<dd>{donation.bankAccountName}</dd>
						<dt>Account number</dt>
						<dd>{donation.bankAccountNumber}</dd>
						<dt>Bank</dt>
						<dd>{donation.bankName}</dd>
					</dl>
				) : (
					<p className="coming-soon-note">Bank transfer details for this project are coming soon.</p>
				)}
			</div>
		</div>
	);
}
