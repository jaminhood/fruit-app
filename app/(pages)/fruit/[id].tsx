import { Fruit } from "@/components/fruit"
import { FruitContract, useAppContext } from "@/store/app-context"
import { useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"

export default function FruitScreen() {
	const { fruits } = useAppContext()
	const { id } = useLocalSearchParams()
	const [data, setData] = useState<FruitContract | null>(null)

	useEffect(() => {
		if (id) {
			const fruit = fruits.find((_fruit: FruitContract) => _fruit.id == Number(id))
			if (fruit != undefined) setData(fruit)
		}
	}, [])

	if (data == null)
		return (
			<View style={{ backgroundColor: `#ffffff`, flex: 1, justifyContent: `center`, alignItems: `center` }}>
				<StatusBar style="light" />
				<Text>Loading..</Text>
			</View>
		)

	return (
		<View style={{ backgroundColor: `#ffffff`, flex: 1 }}>
			<StatusBar style="light" />
			<Fruit data={data} />
		</View>
	)
}
