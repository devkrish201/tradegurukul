import Footer from '@/components/Footer';
import ErrorModules from '@/modules/Error';
import HeaderTwo from '@/components/Header';

export default function Home() {
	return (
		<>
			<HeaderTwo />

			<ErrorModules />

			<Footer />
		</>
	)
}