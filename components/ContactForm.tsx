'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm({ contactEmail }: { contactEmail: string }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const subject = encodeURIComponent(`Message from ${name || 'the Scanafrique website'}`);
		const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`);
		window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<label htmlFor="contact-name">Name</label>
			<input
				id="contact-name"
				type="text"
				placeholder="Your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<label htmlFor="contact-email">Email</label>
			<input
				id="contact-email"
				type="email"
				placeholder="you@example.com"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<label htmlFor="contact-message">Message</label>
			<textarea
				id="contact-message"
				placeholder="Tell us what's on your mind"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				required
			/>
			<button className="btn orange" type="submit" style={{ alignSelf: 'flex-start', marginTop: '6px' }}>
				Send message
			</button>
			<p className="form-note">Opens your email client, addressed to {contactEmail}.</p>
		</form>
	);
}
