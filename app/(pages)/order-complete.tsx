import { OrderComplete } from "@/components/order-complete"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

export default function OrderCompleteScreen() {
	return (
		<View style={{ backgroundColor: `#ffffff`, flex: 1 }}>
			<StatusBar style="dark" />
			<OrderComplete />
		</View>
	)
}
