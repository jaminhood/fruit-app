import { primaryColor } from "@/constants/colors"
import { FruitContract } from "@/store/app-context"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { FruitInfo } from "./fruit-info"

const Fruit: FC<{ data: FruitContract }> = ({ data }) => {
	const router = useRouter()
	const { height: h, width: w } = Dimensions.get("window")

	return (
		<View style={{ backgroundColor: primaryColor, flex: 1 }}>
			<View style={{ height: h * 0.4, justifyContent: `center`, alignItems: `center`, paddingHorizontal: 25, paddingTop: 20 }}>
				<View style={{ width: w - 50, flexDirection: `row` }}>
					<TouchableOpacity
						style={{ backgroundColor: `#ffffff`, paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, flexDirection: `row`, alignItems: `center`, gap: 5 }}
						onPress={() => router.back()}>
						<Image
							source={require("@/assets/images/back-arrow-icon.png")}
							style={{ width: 10, objectFit: `fill`, height: 20 }}
						/>
						<Text style={{ fontWeight: `900`, fontSize: 16 }}>Go Back</Text>
					</TouchableOpacity>
				</View>
				<Image
					source={data.img}
					style={{ width: 200, objectFit: `fill`, height: 200 }}
				/>
			</View>
			<FruitInfo data={data} />
		</View>
	)
}

export { Fruit }
