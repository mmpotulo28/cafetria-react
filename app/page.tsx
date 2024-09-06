import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
			<h1>Hello World</h1>
		</div>
	);
}
