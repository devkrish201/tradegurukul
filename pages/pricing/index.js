
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic'

const PriceModules = dynamic(() => import('@/modules/Pricing'), {
	loading: () => <Preloader />,
});

export default function Price() {
	return (
		<main>
			<HeaderTwo />

			<PriceModules />

			<Footer />
		</main>
	)
}
