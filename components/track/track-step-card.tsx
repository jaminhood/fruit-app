import { FC, PropsWithChildren } from "react"
import { Text, View } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"

interface Props {
	img_color: string
	title: string
	desc?: string
	isChecked?: boolean
}

const TrackStepCard: FC<Props & PropsWithChildren> = ({ img_color, title, desc, isChecked, children }) => {
	return (
		<View style={{ flexDirection: `row`, gap: 10, alignItems: `center` }}>
			<View style={{ backgroundColor: img_color, width: 65, height: 64, justifyContent: `center`, alignItems: `center`, borderRadius: 10 }}>{children}</View>
			<View style={{ flex: 1, justifyContent: `space-between` }}>
				<Text style={{ textTransform: `capitalize`, fontSize: 16, fontWeight: `600` }}>{title}</Text>
				{desc && <Text style={{ fontSize: 16, marginTop: 10 }}>{desc}</Text>}
			</View>
			{isChecked && (
				<View>
					<Animated.Image
						entering={FadeIn}
						source={require("@/assets/images/check-icon.png")}
						style={{ width: 24, objectFit: `fill`, height: 24 }}
					/>
				</View>
			)}
		</View>
	)
}

export { TrackStepCard }
