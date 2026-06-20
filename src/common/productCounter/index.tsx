import { useState } from "react"
import {
	CounterButtonStyle,
	CounterValueStyle,
	ProductCounterStyle,
} from "./styles"

interface ProductCounterProps {
	initialValue?: number
	min?: number
	max?: number
	onChange?: (value: number) => void
}

export default function ProductCounter({
	initialValue = 0,
	min = 0,
	max = 99,
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
				$isFirstStyle={true}
			>
				−
			</CounterButtonStyle>
			<CounterValueStyle>{count}</CounterValueStyle>
			<CounterButtonStyle
				onClick={increment}
				disabled={count >= max}
				type='button'
				$isFirstStyle={true}
			>
				+
			</CounterButtonStyle>
		</ProductCounterStyle>
	)
}
