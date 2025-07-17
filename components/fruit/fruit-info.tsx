import { primaryColor } from "@/constants/colors"
import { useCurrency } from "@/hooks/useCurrency"
import { FruitContract, useAppContext } from "@/store/app-context"
import { FC, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { showMessage } from "react-native-flash-message"

const FruitInfo: FC<{ data: FruitContract }> = ({ data }) => {
	const [price] = useCurrency(data.price)
	const [qty, setQty] = useState(1)
	const [liked, setLiked] = useState<boolean>(data.is_favorite)
	const { toggleFavorite, addToCart } = useAppContext()

	const addToBasket = (data: FruitContract, qty: number) => {
		showMessage({
			message: `Added "${data.title}" to Basket`,
			type: "success",
			backgroundColor: `#fff`,
			color: primaryColor,
		})

		addToCart(data, qty)
	}

	const toggleLiked = () => {
		if (!liked) {
			showMessage({
				message: "Liked",
				type: "success",
				backgroundColor: `#fff`,
				color: primaryColor,
			})
		}

		setLiked(prev => !prev)
		toggleFavorite(data.id)
	}

	const increaseQty = () => setQty(prev => prev + 1)
	const decreaseQty = () => qty > 1 && setQty(prev => prev - 1)

	return (
		<View style={{ flex: 1, backgroundColor: `#ffffff`, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
			<View style={{ padding: 25 }}>
				<Text style={{ textTransform: `capitalize`, fontSize: 32, fontWeight: `600` }}>{data.title}</Text>
				<View style={{ flexDirection: `row`, justifyContent: `space-between`, alignItems: `center`, marginTop: 20 }}>
					<View style={{ gap: 10, flexDirection: `row`, alignItems: `center` }}>
						<TouchableOpacity
							style={{ backgroundColor: `${primaryColor}44`, height: 45, width: 45, borderRadius: 30, justifyContent: `center`, alignItems: `center` }}
							onPress={decreaseQty}>
							<Image
								source={require("@/assets/images/subtract-icon.png")}
								style={{ width: 20, objectFit: `fill`, height: 4 }}
							/>
						</TouchableOpacity>
						<Text style={{ fontSize: 32 }}>{qty}</Text>
						<TouchableOpacity
							style={{ backgroundColor: `${primaryColor}44`, padding: 12, borderRadius: 30 }}
							onPress={increaseQty}>
							<Image
								source={require("@/assets/images/add-icon.png")}
								style={{ width: 20, objectFit: `fill`, height: 20 }}
							/>
						</TouchableOpacity>
					</View>
					<View>
						<Text style={{ fontSize: 32, fontWeight: `600` }}>{price}</Text>
					</View>
				</View>
			</View>
			<View style={{ padding: 25, borderTopColor: `#F3F3F3`, borderTopWidth: 3 }}>
				<View style={{ flexDirection: `row` }}>
					<Text style={{ textTransform: `capitalize`, fontSize: 20, fontWeight: `600`, borderBottomColor: primaryColor, borderBottomWidth: 3, paddingBottom: 5, marginBottom: 20 }}>One Pack Contains</Text>
				</View>
				<Text style={{ fontSize: 16, lineHeight: 24 }}>Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.</Text>
			</View>
			<View style={{ padding: 25, borderTopColor: `#F3F3F3`, borderTopWidth: 3, flex: 1 }}>
				<Text style={{ fontSize: 16, lineHeight: 24 }}>If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
			</View>
			<View style={{ padding: 25, flexDirection: `row`, justifyContent: `space-between`, alignItems: `center` }}>
				<TouchableOpacity
					onPress={toggleLiked}
					style={{ backgroundColor: `${primaryColor}44`, height: 48, width: 48, borderRadius: 30, justifyContent: `center`, alignItems: `center` }}>
					<Image
						source={liked ? require(`@/assets/images/heart-icon-active.png`) : require(`@/assets/images/heart-icon.png`)}
						style={{ width: 24, objectFit: `fill`, height: 21 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ backgroundColor: primaryColor, paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10, justifyContent: `center`, alignItems: `center` }}
					onPress={() => addToBasket(data, qty)}>
					<Text style={{ fontSize: 20, fontWeight: `600`, color: `#ffffff` }}>Add to basket</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export { FruitInfo }
