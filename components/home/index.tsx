import { PageView } from "@/components/page-view"
import { useAppContext } from "@/store/app-context"
import { FC } from "react"
import { Dimensions, ScrollView, Text } from "react-native"
import { HomeFeatured } from "./home-featured"
import { HomeRecommended } from "./home-recommended"
import { HomeSearch } from "./home-search"
import { HomeTopBar } from "./home-top-bar"

const Home: FC = () => {
	const { height: h, width: w } = Dimensions.get("window")
	const { user } = useAppContext()

	return (
		<PageView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}>
				<HomeTopBar />
				<Text style={{ fontSize: 30, width: (3 / 4) * w, lineHeight: 40, marginVertical: 20 }}>Hello {user}, What fruit salad combo do you want today?</Text>
				<HomeSearch />
				<HomeRecommended />
				<HomeFeatured />
			</ScrollView>
		</PageView>
	)
}

export { Home }
