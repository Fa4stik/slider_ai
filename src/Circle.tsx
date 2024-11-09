import { useEffect, useMemo } from 'react'
import { getNumberByRange } from './lib/getNumberByRange.ts'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

type CircleProps = {
	id: string
	startCord: [number, number]
	parentSize: [number, number]
	circleDia: [number, number]
	isActive?: boolean
	onClick: () => void
	onDrag: (
		id: string,
		movement: [number, number],
		isStopDragging: boolean,
	) => void
}

export const Circle = ({
	id,
	startCord: [startX, startY],
	parentSize: [px, py],
	circleDia: [minWidth, maxWidth],
	isActive,
	onClick,
	onDrag,
}: Readonly<CircleProps>) => {
	const dia = useMemo(
		() => getNumberByRange(minWidth, maxWidth),
		[minWidth, maxWidth],
	)

	const updatedCord = useMemo<[number, number]>(() => {
		let newX = startX
		let newY = startY

		if (startX < 0) {
			newX = 0
		}

		if (startY < 0) {
			newY = 0
		}

		if (startX + dia > px) {
			newX = px - dia
		}

		if (startY + dia > py) {
			newY = py - dia
		}

		return [newX, newY]
	}, [dia, startX, startY, px, py])

	const [{ x, y }, apiMove] = useSpring(() => ({
		x: updatedCord[0],
		y: updatedCord[1],
	}))
	const bindMove = useDrag(
		({ down, offset: [ox, oy], movement, ctrlKey, dragging }) => {
			apiMove.start({ x: ox, y: oy, immediate: down })
			onDrag(id, movement, !down)
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			ctrlKey && !dragging && onClick()
		},
		{
			bounds: { left: 0, right: px - dia, top: 0, bottom: py - dia },
			from: () => [x.get(), y.get()],
		},
	)

	useEffect(() => {
		apiMove.start({ x: updatedCord[0], y: updatedCord[1] })
	}, [updatedCord])

	return (
		<animated.div
			className={`absolute bg-blue rounded-full`}
			style={{
				width: `${dia}px`,
				height: `${dia}px`,
				border: isActive ? '1px solid black' : 'none',
				x,
				y,
				touchAction: 'none',
			}}
			{...bindMove()}
		/>
	)
}
