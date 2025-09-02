import BreadCrumbs from "@/components/BreadCrumbs"
import PropFundArea from "./PropFundArea"
import ScrollTop from "@/components/ScrollTop"
import Newsletter from "@/components/Newsletter"

export default function PropFundingModules() {
	return (
		<main>
			<BreadCrumbs
				Title="Prop Funding"
				subTitle="Prop Funding"
			/>
			<PropFundArea />
			<Newsletter />
			<ScrollTop />
		</main>
	)
}
