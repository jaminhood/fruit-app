import { primaryColor } from "@/constants/colors"
import { SCREENS } from "@/constants/screens"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const PageHeader: FC<{ title: string }> = ({ title }) => {
	const router = useRouter()
	const { width } = Dimensions.get(`window`)

	const goBack = () => router.replace(SCREENS.HOME)

	return (
		<View style={[styles.container, { width }]}>
			<TouchableOpacity
				style={styles.back}
				onPress={goBack}>
				<Image
					source={require("@/assets/images/back-arrow-icon.png")}
					style={styles.back_img}
				/>
				<Text style={styles.back_text}>Go Back</Text>
			</TouchableOpacity>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

export { PageHeader }

const styles = StyleSheet.create({
	container: {
		height: 200,
		backgroundColor: primaryColor,
		padding: 25,
		paddingTop: 40,
		flexDirection: `row`,
		alignItems: `center`,
		justifyContent: `center`,
	},
	back: {
		backgroundColor: `#ffffff`,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 20,
		flexDirection: `row`,
		alignItems: `center`,
		gap: 5,
		position: `absolute`,
		top: 100,
		left: 25,
		transform: [{ translateY: -10 }],
	},
	back_img: {
		width: 10,
		objectFit: `fill`,
		height: 20,
	},
	back_text: {
		fontWeight: `900`,
		fontSize: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: `600`,
		color: `#ffffff`,
		lineHeight: 32,
	},
})
