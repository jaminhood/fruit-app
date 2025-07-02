import { primaryColor } from "@/constants/colors"
import { useAppContext } from "@/store/app-context"
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet"
import { FC, useEffect, useMemo, useRef, useState } from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"

const WelcomeStepTwo: FC = () => {
	const { height: h, width: w } = Dimensions.get("window")
	const { changeUser } = useAppContext()
	const [user, setUser] = useState(``)

	const bottomSheetRef = useRef<BottomSheetModal>(null)

	const snapPoints = useMemo(() => [], [])

	useEffect(() => {
		bottomSheetRef.current?.present()
	}, [])

	const presentSheet = () => bottomSheetRef.current?.present()

	const handlePress = () => changeUser(user)

	return (
		<View style={{ backgroundColor: primaryColor, flex: 1 }}>
			<TouchableOpacity
				onPress={presentSheet}
				style={{ height: (3 / 5) * h, justifyContent: `center`, alignItems: `center` }}>
				<Image
					source={require("@/assets/images/welcome-2.png")}
					style={{ width: w * 0.8, objectFit: `fill`, height: 300 }}
				/>
			</TouchableOpacity>
			<BottomSheetModalProvider>
				<BottomSheetModal
					ref={bottomSheetRef}
					snapPoints={snapPoints}
					enablePanDownToClose={false}>
					<BottomSheetView
						style={{
							flex: 1,
							alignItems: "flex-start",
							padding: 25,
						}}>
						<Text style={{ fontWeight: `black`, fontSize: 25, marginBottom: 20 }}>What is your firstname?</Text>
						<BottomSheetTextInput
							placeholder="Tony"
							onChangeText={setUser}
							style={{ backgroundColor: `#F3F1F1`, padding: 20, borderRadius: 10, fontSize: 20, width: `100%` }}
						/>
						<TouchableOpacity
							style={{ padding: 10, backgroundColor: primaryColor, borderRadius: 10, width: `100%`, marginTop: 50 }}
							onPress={handlePress}>
							<Text style={{ textAlign: `center`, fontSize: 20, fontWeight: `black`, color: `#ffffff` }}>Start Ordering</Text>
						</TouchableOpacity>
					</BottomSheetView>
				</BottomSheetModal>
			</BottomSheetModalProvider>
		</View>
	)
}

export { WelcomeStepTwo }
