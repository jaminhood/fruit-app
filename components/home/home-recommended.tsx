import { FruitCard } from "@/components/fruit-card"
import { useAppContext } from "@/store/app-context"
import React from "react"
import { Text, View } from "react-native"

const HomeRecommended = () => {
	const { recommended } = useAppContext()

	return (
		<View style={{ marginVertical: 20 }}>
			<Text style={{ fontSize: 30, fontWeight: `900`, lineHeight: 40, marginBottom: 20 }}>Recommended Combo</Text>
			<View style={{ flexDirection: `row`, justifyContent: `space-between` }}>
				{recommended.map(item => (
					<FruitCard
						data={item}
						key={item.id}
					/>
				))}
			</View>
		</View>
	)
}

export { HomeRecommended }
