import { primaryColor } from "@/constants/colors"
import { FC } from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"

const WelcomeStepOne: FC<{ changeStep: () => void }> = ({ changeStep }) => {
	const { height: h, width: w } = Dimensions.get("window")

	return (
		<View style={{ backgroundColor: primaryColor, flex: 1 }}>
			<View style={{ flex: 1, justifyContent: `center`, alignItems: `center` }}>
				<Image
					source={require("@/assets/images/welcome-1.png")}
					style={{ width: w * 0.8, objectFit: `fill`, height: 400 }}
				/>
			</View>
			<View style={{ height: (2 / 5) * h, backgroundColor: `#ffffff`, padding: 40 }}>
				<View style={{ flex: 1 }}>
					<Text style={{ fontWeight: `black`, fontSize: 25, marginBottom: 20 }}>Get The Freshest Fruit Salad Combo</Text>
					<Text style={{ fontWeight: `400`, fontSize: 20 }}>We deliver the best and freshest fruit salad in town. Order for a combo today</Text>
				</View>

				<TouchableOpacity
					style={{ padding: 10, backgroundColor: primaryColor, borderRadius: 10 }}
					onPress={changeStep}>
					<Text style={{ textAlign: `center`, fontSize: 20, fontWeight: `black`, color: `#ffffff` }}>Let's Continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export { WelcomeStepOne }
