import { primaryColor } from "@/constants/colors"
import { SCREENS } from "@/constants/screens"
import { useAppContext } from "@/store/app-context"
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet"
import { useRouter } from "expo-router"
import { forwardRef, useMemo } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const DeliveryAddress = forwardRef<any, { toggleCard: () => void }>(({ toggleCard }, ref) => {
	const router = useRouter()
	const { clearCart } = useAppContext()
	const snapPoints = useMemo(() => ["50%"], [])

	const completeOrder = () => {
		clearCart()
		router.replace(SCREENS.ORDER_COMPLETE)
	}

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={ref}
				snapPoints={snapPoints}>
				<BottomSheetView style={styles.sheet_view}>
					<Text style={styles.title}>Delivery Address</Text>
					<BottomSheetTextInput
						placeholder="10th avenue, Lekki, Lagos State"
						style={styles.input}
					/>
					<Text style={styles.title}>Number we can call</Text>
					<BottomSheetTextInput
						placeholder="09090605708"
						style={styles.input}
					/>
					<View style={styles.button_view}>
						<TouchableOpacity
							style={styles.button}
							onPress={completeOrder}>
							<Text style={styles.button_text}>Pay on delivery</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							onPress={toggleCard}>
							<Text style={styles.button_text}>Pay with card</Text>
						</TouchableOpacity>
					</View>
				</BottomSheetView>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	)
})

DeliveryAddress.displayName = "DeliveryAddress"

export { DeliveryAddress }

const styles = StyleSheet.create({
	sheet_view: {
		flex: 1,
		alignItems: "flex-start",
		padding: 25,
		gap: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: `600`,
		lineHeight: 32,
		width: `100%`,
	},
	input: {
		backgroundColor: `#F3F1F1`,
		padding: 20,
		borderRadius: 10,
		fontSize: 20,
		width: `100%`,
	},
	button_view: {
		flexDirection: `row`,
		justifyContent: `space-between`,
		alignItems: `center`,
		width: `100%`,
	},
	button: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
		justifyContent: `center`,
		alignItems: `center`,
		borderWidth: 2,
		borderColor: primaryColor,
	},
	button_text: {
		fontSize: 20,
		fontWeight: `600`,
		color: primaryColor,
	},
})
