import { fruits_data } from "@/constants/data"
import { SCREENS } from "@/constants/screens"
import { useRouter } from "expo-router"
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react"

export interface FruitContract {
	id: number
	title: string
	img: any
	price: number
	is_favorite: boolean
}

export interface CartContract {
	fruit: FruitContract
	qty: number
}

interface AppContextType {
	user: string
	cart: CartContract[]
	fruits: FruitContract[]
	recommended: FruitContract[]
	addToCart: (fruit: FruitContract, qty: number) => void
	clearCart: () => void
	changeUser: (name: string) => void
	toggleFavorite: (id: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const [user, setUser] = useState<string>(``)
	const [recommended, setRecommended] = useState<FruitContract[]>([])
	const [fruits, setFruits] = useState<FruitContract[]>(fruits_data)
	const [cart, setCart] = useState<CartContract[]>([])

	useEffect(() => {
		if (user.trim() !== ``) {
			router.replace(SCREENS.HOME)
		}
	}, [user, router])

	useEffect(() => {
		const selectUniqueFruits = (currentSelection: FruitContract[] = []): FruitContract[] => {
			if (currentSelection.length === 2) {
				return currentSelection
			}

			const randomIndex = Math.floor(Math.random() * fruits.length)
			const selectedFruit = fruits[randomIndex]

			const isUnique = !currentSelection.some(fruit => fruit.id === selectedFruit.id)

			return selectUniqueFruits(isUnique ? [...currentSelection, selectedFruit] : currentSelection)
		}

		setRecommended(selectUniqueFruits())
	}, [])

	const toggleFavorite = (id: number) => {
		const toggle = (prevFruits: FruitContract[]) => prevFruits.map(_fruit => (_fruit.id === id ? { ..._fruit, is_favorite: !_fruit.is_favorite } : _fruit))
		setFruits(prev => toggle(prev))
		setRecommended(prev => toggle(prev))
	}

	const addToCart = (fruit: FruitContract, qty = 1) => {
		setCart(prevCart => {
			if (prevCart.find(item => item.fruit.id === fruit.id)) {
				return cart.map(item => {
					if (item.fruit.id === fruit.id) {
						item.qty = item.qty + qty
					}
					return item
				})
			}

			return [...prevCart, { fruit, qty }]
		})
	}

	const clearCart = () => setCart([])

	const changeUser = (name: string) => setUser(name)

	return (
		<AppContext.Provider
			value={{
				user,
				cart,
				fruits,
				recommended,
				addToCart,
				clearCart,
				changeUser,
				toggleFavorite,
			}}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (context === undefined) {
		throw new Error(`useAppContext must be used within AppProvider`)
	}
	return context
}
