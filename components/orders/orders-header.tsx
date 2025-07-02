import { primaryColor } from "@/constants/colors"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"

const OrdersHeader: FC = () => {
	const router = useRouter()
	const { width } = Dimensions.get(`window`)

	return (
		<View style={{ height: 200, backgroundColor: primaryColor, width, padding: 25, paddingTop: 40, flexDirection: `row`, alignItems: `center`, justifyContent: `center` }}>
			<TouchableOpacity
				style={{ backgroundColor: `#ffffff`, paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, flexDirection: `row`, alignItems: `center`, gap: 5, position: `absolute`, top: 100, left: 25, transform: [{ translateY: -10 }] }}
				onPress={() => router.back()}>
				<Image
					source={require("@/assets/images/back-arrow-icon.png")}
					style={{ width: 10, objectFit: `fill`, height: 20 }}
				/>
				<Text style={{ fontWeight: `900`, fontSize: 16 }}>Go Back</Text>
			</TouchableOpacity>
			<Text style={{ fontSize: 24, fontWeight: `600`, color: `#ffffff`, lineHeight: 32 }}>My Basket</Text>
		</View>
	)
}

export { OrdersHeader }
