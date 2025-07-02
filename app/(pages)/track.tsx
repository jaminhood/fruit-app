import { Track } from "@/components/track"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

export default function TrackScreen() {
	return (
		<View style={{ backgroundColor: `#ffffff`, flex: 1 }}>
			<StatusBar style="light" />
			<Track />
		</View>
	)
}
