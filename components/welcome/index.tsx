import { useState } from "react"
import { WelcomeStepOne } from "./welcome-step-one"
import { WelcomeStepTwo } from "./welcome-step-two"

const Welcome = () => {
	const [step, setStep] = useState<1 | 2>(1)

	const changeStep = () => setStep(2)

	return step === 1 ? <WelcomeStepOne changeStep={changeStep} /> : <WelcomeStepTwo />
}

export { Welcome }
