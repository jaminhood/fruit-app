import { primaryColor } from "@/constants/colors"
import { SCREENS } from "@/constants/screens"
import { useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"
import { PageView } from "../page-view"

const OrderComplete = () => {
	const router = useRouter()

	return (
		<PageView>
			<View style={{ flex: 1, justifyContent: `center`, alignItems: `center`, gap: 30, paddingHorizontal: 50 }}>
				<Animated.Image
					entering={FadeIn}
					source={require("@/assets/images/success-icon.png")}
					style={{ width: 164, objectFit: `fill`, height: 164 }}
				/>
				<Text style={{ fontSize: 32, fontWeight: `600`, lineHeight: 32, textAlign: `center` }}>Congratulations!!!</Text>
				<Text style={{ fontSize: 20, lineHeight: 32, textAlign: `center` }}>Your order have been taken and is being attended to</Text>
				<TouchableOpacity
					style={{ paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10, justifyContent: `center`, alignItems: `center`, backgroundColor: primaryColor }}
					onPress={() => router.replace(SCREENS.TRACK)}>
					<Text style={{ fontSize: 20, fontWeight: `600`, color: `#ffffff` }}>Track order</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10, justifyContent: `center`, alignItems: `center`, borderWidth: 2, borderColor: primaryColor }}
					onPress={() => router.replace(SCREENS.HOME)}>
					<Text style={{ fontSize: 20, fontWeight: `600`, color: primaryColor }}>Continue shopping</Text>
				</TouchableOpacity>
			</View>
		</PageView>
	)
}

export { OrderComplete }
