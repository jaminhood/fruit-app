import { Home } from "@/components/home"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { View } from "react-native"

export default function HomeScreen() {
	return (
		<View style={{ backgroundColor: `#ffffff`, flex: 1 }}>
			<StatusBar style="dark" />
			<Home />
		</View>
	)
}
