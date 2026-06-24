import { useState } from "react"
import {
	CounterButtonStyle,
	CounterValueStyle,
	ProductCounterStyle,
} from "./styles"

interface ProductCounterProps {
	value?: number
	initialValue?: number
	min?: number
	max?: number
	onChange?: (value: number) => void
}

export default function ProductCounter({
	value,
	initialValue = 0,
	min = 0,
	max = 99,
	onChange,
}: ProductCounterProps) {
	const isControlled = value !== undefined
	const [internalCount, setInternalCount] = useState(initialValue)
	const count = isControlled ? value : internalCount

	function decrement() {
		const next = Math.max(min, count - 1)
		if (!isControlled) setInternalCount(next)
		onChange?.(next)
	}

	function increment() {
		const next = Math.min(max, count + 1)
		if (!isControlled) setInternalCount(next)
		onChange?.(next)
	}

	return (
		<ProductCounterStyle>
			<CounterButtonStyle onClick={decrement} disabled={count <= min} type='button'>
				−
			</CounterButtonStyle>
			<CounterValueStyle>{count}</CounterValueStyle>
			<CounterButtonStyle onClick={increment} disabled={count >= max} type='button'>
				+
			</CounterButtonStyle>
		</ProductCounterStyle>
	)
}
