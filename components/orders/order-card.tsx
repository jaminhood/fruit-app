import { primaryColor } from "@/constants/colors"
import { useCurrency } from "@/hooks/useCurrency"
import { CartContract } from "@/store/app-context"
import { FC } from "react"
import { Image, Text, View } from "react-native"

const OrderCard: FC<{ data: CartContract }> = ({ data }) => {
	const [price] = useCurrency(data.fruit.price * data.qty)

	return (
		<View style={{ paddingHorizontal: 20, flexDirection: `row`, gap: 20, alignItems: `center` }}>
			<View style={{ width: 65, height: 65, backgroundColor: `${primaryColor}44`, justifyContent: `center`, alignItems: `center`, borderRadius: 20 }}>
				<Image
					source={data.fruit.img}
					style={{ width: 40, objectFit: `fill`, height: 40 }}
				/>
			</View>
			<View style={{ flex: 1, justifyContent: `space-between`, paddingBottom: 10 }}>
				<Text style={{ fontSize: 16, fontWeight: `600`, lineHeight: 32, textTransform: `capitalize` }}>{data.fruit.title}</Text>
				<Text style={{ fontSize: 16, lineHeight: 32 }}>
					{data.qty} {data.qty > 1 ? `packs` : `pack`}
				</Text>
			</View>
			<View style={{ justifyContent: `space-between`, paddingBottom: 10 }}>
				<Text style={{ fontSize: 16, fontWeight: `600`, lineHeight: 32 }}>{price}</Text>
			</View>
		</View>
	)
}

export { OrderCard }
