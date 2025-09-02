import About from "./About"
import BreadCrumbs from "@/components/BreadCrumbs"
import Funfact from "./Funfact"
import Team from "./Team"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"
import Testimonial from "../HomeOne/Testimonial"

export default function AboutUsModules() {
	return (
		<main>
			<BreadCrumbs
				Title="About Us"
				subTitle="About Us"
			/>
			
			<About />
			
			<Funfact />
			
			<Testimonial />

			
			<Team />

			<Newsletter />

			<ScrollTop />
			
		</main>
	)
}
