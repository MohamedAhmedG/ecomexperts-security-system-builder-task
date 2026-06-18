import { useState } from "react"
import {
	CounterButtonStyle,
	CounterValueStyle,
	ProductCounterStyle,
} from "./styles"

interface ProductCounterProps {
	min?: number
	max?: number
	initialValue?: number
	onChange?: (value: number) => void
}

export default function ProductCounter({
	min = 1,
	max = 99,
	initialValue = 1,
	onChange,
}: ProductCounterProps) {
	const [count, setCount] = useState(initialValue)

	function decrement() {
		const next = Math.max(min, count - 1)
		setCount(next)
		onChange?.(next)
	}

	function increment() {
		const next = Math.min(max, count + 1)
		setCount(next)
		onChange?.(next)
	}

	return (
		<ProductCounterStyle>
			<CounterButtonStyle
				onClick={decrement}
				disabled={count <= min}
				type='button'
				isFirstStyle
			>
				−
			</CounterButtonStyle>
			<CounterValueStyle>{count}</CounterValueStyle>
			<CounterButtonStyle
				onClick={increment}
				disabled={count >= max}
				type='button'
				isFirstStyle
			>
				+
			</CounterButtonStyle>
		</ProductCounterStyle>
	)
}
