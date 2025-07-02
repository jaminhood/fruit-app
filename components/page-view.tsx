import Constants from "expo-constants"
import { FC, PropsWithChildren } from "react"
import { StyleSheet, View } from "react-native"

const PageView: FC<PropsWithChildren> = ({ children }) => {
	return <View style={styles.view}>{children}</View>
}

const styles = StyleSheet.create({
	view: {
		paddingHorizontal: 25,
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
})

export { PageView }
