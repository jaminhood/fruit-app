import { primaryColor } from "@/constants/colors"
import { SCREENS } from "@/constants/screens"
import { useCurrency } from "@/hooks/useCurrency"
import { FruitContract, useAppContext } from "@/store/app-context"
import { useRouter } from "expo-router"
import { FC } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const FruitCard: FC<{ data: FruitContract }> = ({ data }) => {
	const router = useRouter()
	const [price] = useCurrency(data.price)
	const { toggleFavorite } = useAppContext()

	const toggleLiked = () => toggleFavorite(data.id)

	const goToFruitPage = () =>
		router.push({
			pathname: SCREENS.FRUIT,
			params: { id: data.id },
		})

	return (
		<View style={{ marginStart: -10 }}>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={toggleLiked}
					style={{ position: `absolute`, top: 15, right: 15 }}>
					<Image
						source={data.is_favorite ? require(`@/assets/images/heart-icon-active.png`) : require(`@/assets/images/heart-icon.png`)}
						style={{ width: 16, objectFit: `fill`, height: 16 }}
					/>
				</TouchableOpacity>
				<View style={{ paddingTop: 20, paddingHorizontal: 20, alignItems: `center`, gap: 10 }}>
					<TouchableOpacity onPress={goToFruitPage}>
						<Image
							source={data.img}
							style={{ width: 100, objectFit: `fill`, height: 100 }}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={goToFruitPage}>
						<Text style={{ fontSize: 16, fontWeight: `600` }}>{data.title}</Text>
					</TouchableOpacity>
					<Text style={{ fontSize: 16, fontWeight: `600`, color: primaryColor, textAlign: `center` }}>{price}</Text>
				</View>
			</View>
		</View>
	)
}

export { FruitCard }

const styles = StyleSheet.create({
	container: {
		margin: 10,
		width: 150,
		height: 200,
		borderRadius: 10,
		backgroundColor: `white`,
		// Android shadow
		elevation: 5,
		// iOS shadows
		shadowColor: "#202020",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
})
