import { primaryColor } from "@/constants/colors"
import { ScrollView, View } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"
import { PageView } from "../page-view"
import { TrackStepCard } from "./track-step-card"

const TrackSteps = () => {
	return (
		<PageView>
			<ScrollView>
				<View style={{ gap: 50 }}>
					<View style={{ position: `absolute`, top: 0, height: `100%`, borderWidth: 1, borderStyle: `dashed`, left: 24, borderColor: primaryColor }} />
					<TrackStepCard
						img_color="#FFFAEB"
						title="Order Taken"
						isChecked>
						<Animated.Image
							entering={FadeIn}
							source={require(`@/assets/images/order-taken.png`)}
							style={{ width: 48, objectFit: `fill`, height: 43 }}
						/>
					</TrackStepCard>
					<TrackStepCard
						img_color="#F1EFF6"
						title="Order Is Being Prepared"
						isChecked>
						<Animated.Image
							entering={FadeIn}
							source={require(`@/assets/images/order-prepared.png`)}
							style={{ width: 48, objectFit: `fill`, height: 43 }}
						/>
					</TrackStepCard>
					<TrackStepCard
						img_color="#FEF0F0"
						title="Order Is Being Delivered"
						desc="Your delivery agent is coming"
						isChecked>
						<Animated.Image
							entering={FadeIn}
							source={require(`@/assets/images/order-delivered.png`)}
							style={{ width: 48, objectFit: `fill`, height: 43 }}
						/>
					</TrackStepCard>
					<View>
						<Animated.Image
							entering={FadeIn}
							source={require(`@/assets/images/map-view.png`)}
							style={{ width: `100%`, objectFit: `fill`, height: 150 }}
						/>
					</View>
					<TrackStepCard
						img_color="#f0fef8"
						title="Order Received">
						<Animated.Image
							entering={FadeIn}
							source={require(`@/assets/images/order-received.png`)}
							style={{ width: 40, objectFit: `fill`, height: 40 }}
						/>
					</TrackStepCard>
				</View>
			</ScrollView>
		</PageView>
	)
}

export { TrackSteps }
