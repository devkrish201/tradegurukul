import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic'

const ServiceTwoModules = dynamic(() => import('@/modules/Mentorship'), {
	loading: () => <Preloader />,
});

export default function ServiceTwo() {
	return (
		<main>
			<HeaderTwo />

			<ServiceTwoModules />

			<Footer />
		</main>
	)
}
