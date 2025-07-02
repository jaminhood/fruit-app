import { FruitCard } from "@/components/fruit-card"
import { useAppContext } from "@/store/app-context"
import React, { useState } from "react"
import { FlatList, View } from "react-native"
import { HomeFeatureMenu } from "./home-feature-menu"

const menus = ["Hottest", "Popular", "New Combo", "Top"]

const HomeFeatured = () => {
	const [activeMenu, setActiveMenu] = useState(menus[0])
	const { fruits } = useAppContext()

	const changeActiveMenu = (menu: string) => setActiveMenu(menu)

	return (
		<View style={{ marginTop: 20 }}>
			<View style={{ flexDirection: `row`, justifyContent: `space-between`, marginBottom: 20 }}>
				{menus.map(menu => (
					<HomeFeatureMenu
						text={menu}
						key={menu}
						isActive={activeMenu === menu}
						onPress={() => changeActiveMenu(menu)}
					/>
				))}
			</View>

			<FlatList
				horizontal
				data={fruits}
				renderItem={({ item }) => <FruitCard data={item} />}
				keyExtractor={item => item.id.toString()}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}

export { HomeFeatured }
