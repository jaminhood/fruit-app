import React, { FC, useState } from "react"
import { Image, TextInput, TouchableOpacity, View } from "react-native"

const HomeSearch: FC = () => {
	const [search, setSearch] = useState(``)

	return (
		<View style={{ marginVertical: 20, flexDirection: `row`, alignItems: `center`, gap: 10 }}>
			<View style={{ backgroundColor: `#F3F1F1`, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, alignItems: `center`, flexDirection: `row`, gap: 5, flex: 1 }}>
				<Image
					source={require("@/assets/images/search-icon.png")}
					style={{ width: 16, objectFit: `fill`, height: 16 }}
				/>
				<TextInput
					placeholder="Search for fruit salad combo"
					onChangeText={setSearch}
					style={{ fontSize: 14 }}
				/>
			</View>
			<TouchableOpacity>
				<Image
					source={require("@/assets/images/filter-icon.png")}
					style={{ width: 26, objectFit: `fill`, height: 17 }}
				/>
			</TouchableOpacity>
		</View>
	)
}

export { HomeSearch }
