
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic'

const PropFundingModules = dynamic(() => import('@/modules/PropFunding'), {
	loading: () => <Preloader />,
});

export default function PropFunding() {
	return (
		<main>
			<HeaderTwo />

			<PropFundingModules />

			<Footer />
		</main>
	)
}
