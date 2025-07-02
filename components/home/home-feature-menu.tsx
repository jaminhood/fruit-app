import { primaryColor } from "@/constants/colors"
import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface Props {
	text: string
	isActive?: boolean
	onPress: () => void
}

const HomeFeatureMenu: FC<Props> = ({ text, isActive, onPress }) => {
	return (
		<TouchableOpacity
			style={{ flexDirection: `row` }}
			onPress={onPress}>
			{isActive && <View style={{ borderColor: primaryColor, borderWidth: 2, height: 30, transform: [{ rotate: `90deg` }, { translateX: 25 }, { translateY: -15 }] }} />}
			<Text style={{ fontSize: isActive ? 30 : 20, fontWeight: isActive ? `900` : `400`, lineHeight: 40, opacity: isActive ? 1 : 0.7, color: isActive ? `#27214D` : `#938DB5` }}>{text}</Text>
		</TouchableOpacity>
	)
}

export { HomeFeatureMenu }
