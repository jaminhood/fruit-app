import { primaryColor } from "@/constants/colors"
import { SCREENS } from "@/constants/screens"
import { useAppContext } from "@/store/app-context"
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet"
import { useRouter } from "expo-router"
import { forwardRef, useMemo } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const CardInformation = forwardRef<any, {}>(({}, ref) => {
	const router = useRouter()
	const { clearCart } = useAppContext()
	const snapPoints = useMemo(() => ["60%"], [])

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
					<Text style={styles.title}>Card {`Holder's`} Name</Text>
					<BottomSheetTextInput
						placeholder="Adolphus Chris"
						style={styles.input}
					/>
					<Text style={styles.title}>Card Number</Text>
					<BottomSheetTextInput
						placeholder="1234 5678 9012 1314"
						style={styles.input}
					/>
					<View style={{ flexDirection: `row`, gap: 20, width: `100%` }}>
						<View style={{ width: 90 }}>
							<Text style={styles.title}>Date</Text>
							<BottomSheetTextInput
								placeholder="10/30"
								style={styles.input}
							/>
						</View>
						<View style={{ width: 90 }}>
							<Text style={styles.title}>CVV</Text>
							<BottomSheetTextInput
								placeholder="123"
								style={styles.input}
							/>
						</View>
					</View>
					<View style={styles.button_view}>
						<TouchableOpacity
							style={styles.button}
							onPress={completeOrder}>
							<Text style={styles.button_text}>Complete order</Text>
						</TouchableOpacity>
					</View>
				</BottomSheetView>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	)
})

CardInformation.displayName = "CardInformation"

export { CardInformation }

const styles = StyleSheet.create({
	sheet_view: {
		flex: 1,
		alignItems: "center",
		padding: 25,
		gap: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: `600`,
		lineHeight: 32,
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
		justifyContent: `center`,
		alignItems: `center`,
		width: `100%`,
	},
	button: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
		width: `100%`,
		justifyContent: `center`,
		alignItems: `center`,
		backgroundColor: primaryColor,
	},
	button_text: {
		fontSize: 20,
		fontWeight: `600`,
		color: `#ffffff`,
	},
})
