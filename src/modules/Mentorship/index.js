import BreadCrumbs from "@/components/BreadCrumbs"
import ServiceTwoArea from "./ServiceArea"
import Newsletter from "@/components/Newsletter"
import ScrollTop from "@/components/ScrollTop"

export default function ServiceTwoModules() {
	return (
		<main>
			<BreadCrumbs
				Title="MentorShip"
				subTitle="Service"
			/>
			<ServiceTwoArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
