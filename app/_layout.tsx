import { AppProvider } from "@/store/app-context"
import Constants from "expo-constants"
import { useFonts } from "expo-font"
import { Slot } from "expo-router"
import * as expoSplash from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import FlashMessage from "react-native-flash-message"
import { GestureHandlerRootView } from "react-native-gesture-handler"

expoSplash.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	})

	useEffect(() => {
		if (loaded) {
			setTimeout(() => {
				expoSplash.hideAsync()
			}, 1500)
		}
	}, [loaded])

	return (
		<GestureHandlerRootView>
			<AppProvider>
				<StatusBar style="auto" />
				<Slot />
			</AppProvider>
			<FlashMessage
				position="top"
				statusBarHeight={Constants.statusBarHeight}
				floating={true}
				duration={2000}
				titleProps={{ allowFontScaling: false }}
				textProps={{ allowFontScaling: false }}
				hideOnPress={true}
			/>
		</GestureHandlerRootView>
	)
}
