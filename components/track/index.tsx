import { FC } from "react"
import { View } from "react-native"
import { PageHeader } from "../shared/page-header"
import { TrackSteps } from "./track-steps"

const Track: FC = () => {
	return (
		<View style={{ flex: 1 }}>
			<PageHeader title="Delivery Status" />
			<TrackSteps />
		</View>
	)
}

export { Track }
