import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { getCompanyProfile } from '@/lib/api';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Partnership, press, or just curious what we’re building next — reach out to Scanafrique Ltd.',
};

export default async function ContactPage() {
	const profile = await getCompanyProfile();
	const email = profile?.contactEmail || 'hello@scanafrique.com';
	const phone = profile?.contactPhone;
	const address = profile?.address;
	const social = profile?.socialLinks;
	const socialLine = [social?.linkedin && 'LinkedIn', social?.x && 'X', social?.instagram && 'Instagram']
		.filter(Boolean)
		.join(' · ');

	return (
		<section className="block">
			<div className="wrap">
				<div className="block-eyebrow">Get in touch</div>
				<div className="block-head">
					<div>
						<h2>Let&rsquo;s talk</h2>
						<p>Partnership, press, or just curious what we&rsquo;re building next — reach out.</p>
					</div>
				</div>

				<div className="contact-grid">
					<div className="contact-info">
						<div className="contact-item">
							<div className="ic">@</div>
							<div>
								<h3>Email</h3>
								<p>{email}</p>
							</div>
						</div>
						{phone && (
							<div className="contact-item">
								<div className="ic">☎</div>
								<div>
									<h3>Phone</h3>
									<p>{phone}</p>
								</div>
							</div>
						)}
						{address && (
							<div className="contact-item">
								<div className="ic">📍</div>
								<div>
									<h3>Office</h3>
									<p>{address}</p>
								</div>
							</div>
						)}
						{socialLine && (
							<div className="contact-item">
								<div className="ic">↗</div>
								<div>
									<h3>Social</h3>
									<p>{socialLine}</p>
								</div>
							</div>
						)}
						<div className="contact-item">
							<div className="ic">§</div>
							<div>
								<h3>Legal</h3>
								<p>
									Scanafrique Ltd is a private company limited by shares, incorporated in Nigeria
									under the Companies and Allied Matters Act 2020.
									<br />
									CAC Registration No. 7128903 · Incorporated 7 September 2023, Abuja
									<br />
									Tax Identification Number: 31515265-0001
								</p>
							</div>
						</div>
					</div>
					<ContactForm contactEmail={email} />
				</div>
			</div>
		</section>
	);
}
