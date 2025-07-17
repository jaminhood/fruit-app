import { primaryColor } from "@/constants/colors"
import { useCurrency } from "@/hooks/useCurrency"
import { useAppContext } from "@/store/app-context"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useRef } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { PageHeader } from "../shared/page-header"
import { CardInformation } from "./card-information"
import { DeliveryAddress } from "./delivery-address"
import { OrderCard } from "./order-card"

const Orders = () => {
	const { cart } = useAppContext()
	const cart_total = cart.reduce((acc, nxt) => (acc += nxt.fruit.price * nxt.qty), 0)
	const [price] = useCurrency(cart_total)

	const deliveryBottomSheetRef = useRef<BottomSheetModal>(null)
	const cardBottomSheetRef = useRef<BottomSheetModal>(null)

	const toggleDeliveryAddressIsOpen = () => deliveryBottomSheetRef.current?.present(0)
	const toggleCardInformationIsOpen = () => {
		deliveryBottomSheetRef.current?.close()
		cardBottomSheetRef.current?.present(0)
	}

	return (
		<GestureHandlerRootView style={{ gap: 10, flex: 1 }}>
			<PageHeader title="My Basket" />
			<View style={{ flex: 1, gap: 10, paddingTop: 25 }}>
				{cart.length > 0 ? (
					<FlatList
						data={cart}
						renderItem={({ item }) => <OrderCard data={item} />}
						keyExtractor={item => item.fruit.id.toString()}
						ItemSeparatorComponent={() => <View style={{ borderColor: `#f4f4f4`, borderWidth: 1, marginBlock: 10 }} />}
					/>
				) : (
					<Text style={{ fontSize: 16, fontWeight: `600`, lineHeight: 32, textTransform: `capitalize`, textAlign: `center` }}>Cart is empty</Text>
				)}
			</View>
			<View style={{ padding: 25, flexDirection: `row`, justifyContent: `space-between`, alignItems: `center` }}>
				<View>
					<Text style={{ fontSize: 16, fontWeight: `600` }}>Total</Text>
					<Text style={{ fontSize: 24, fontWeight: `600` }}>{price}</Text>
				</View>
				{cart_total > 0 && (
					<TouchableOpacity
						style={{ backgroundColor: primaryColor, paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10, justifyContent: `center`, alignItems: `center` }}
						onPress={toggleDeliveryAddressIsOpen}>
						<Text style={{ fontSize: 20, fontWeight: `600`, color: `#ffffff` }}>Checkout</Text>
					</TouchableOpacity>
				)}
			</View>
			<DeliveryAddress
				ref={deliveryBottomSheetRef}
				toggleCard={toggleCardInformationIsOpen}
			/>
			<CardInformation ref={cardBottomSheetRef} />
		</GestureHandlerRootView>
	)
}

export { Orders }
