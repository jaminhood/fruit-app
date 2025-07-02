import { Orders } from "@/components/orders"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

export default function OrdersScreen() {
	return (
		<View style={{ backgroundColor: `#ffffff`, flex: 1 }}>
			<StatusBar style="light" />
			<Orders />
		</View>
	)
}
