import Image from 'next/image';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="site-footer">
			<div className="fbrand">
				<Image src="/logo.png" alt="" width={26} height={20} />
				<span>Scanafrique Ltd</span>
			</div>
			<div>Abuja, Nigeria · hello@scanafrique.com</div>
			<div>RC 7128903 · TIN 31515265-0001</div>
			<div>&copy; {year} Scanafrique Ltd — IT · Construction · General Supplies</div>
		</footer>
	);
}
