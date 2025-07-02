const useCurrency = (price: any, locale = "en-NG", curr = "NGN") => {
	const converted = new Intl.NumberFormat(locale, {
		style: `currency`,
		currency: curr,
	}).format(price.toFixed(2))

	return [converted]
}

export { useCurrency }
