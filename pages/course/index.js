
import Footer from '@/components/Footer';
import HeaderTwo from '@/components/Header';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic'

const CourseDetailsModules = dynamic(() => import('@/modules/CourseDetails'), {
	loading: () => <Preloader />,
});

export default function Course() {
	return (
		<main>
			<HeaderTwo />

			<CourseDetailsModules />

			<Footer />
		</main>
	)
}
