import { SCREENS } from "@/constants/screens"
import { useRouter } from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const HomeTopBar = () => {
	const router = useRouter()

	const goToOrdersPage = () => router.push(SCREENS.ORDERS)

	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require("@/assets/images/home-top-icon.png")}
					style={{ width: 22, objectFit: `fill`, height: 11 }}
				/>
			</View>
			<TouchableOpacity
				style={{ alignItems: `center`, gap: 4 }}
				onPress={goToOrdersPage}>
				<Image
					source={require("@/assets/images/cart-icon.png")}
					style={{ width: 24, objectFit: `fill`, height: 24 }}
				/>
				<Text style={{ fontSize: 10 }}>My Basket</Text>
			</TouchableOpacity>
		</View>
	)
}

export { HomeTopBar }

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		flexDirection: `row`,
		justifyContent: `space-between`,
		alignItems: `center`,
	},
})
