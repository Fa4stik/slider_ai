import { useCallback, useEffect, useRef, useState } from 'react'
import { Circle } from './Circle.tsx'
import { getNumberByRange } from './lib/getNumberByRange.ts'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { Button } from 'antd'
import { CircleData, Size } from './model/types.ts'

// Limited test-cases
// const data: CircleData[] = [
// 	{
// 		startCord: [0, 0],
// 		circleDia: [50, 50],
// 	},
// 	{
// 		startCord: [200, 0],
// 		circleDia: [50, 50],
// 	},
// 	{
// 		startCord: [0, 200],
// 		circleDia: [50, 50],
// 	},
// 	{
// 		startCord: [3000, 0],
// 		circleDia: [50, 50],
// 	},
// 	{
// 		startCord: [0, 3000],
// 		circleDia: [50, 50],
// 	},
// ]

function App() {
	const [parentSize, setParentSize] = useState<Size | null>(null)
	const [circles, setCircles] = useState<CircleData[] | null>(null)
	const [activeCircles, setActiveCircles] = useState<Record<
		string,
		boolean
	> | null>(null)

	const slideRef = useRef<HTMLDivElement>(null)
	const handleAddCircle = useCallback(() => {
		if (!slideRef.current) {
			return
		}

		const slideWidth = slideRef.current.offsetWidth
		const slideHeight = slideRef.current.offsetHeight
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		!parentSize && setParentSize([slideWidth, slideHeight])
		const x = getNumberByRange(0, slideWidth)
		const y = getNumberByRange(0, slideHeight)

		const circleData: CircleData = {
			id: Date.now().toString(),
			startCord: [x, y],
			editedCord: [x, y],
			circleDia: [slideWidth * 0.05, slideWidth * 0.2],
		}

		setCircles(prevState =>
			prevState ? [...prevState, circleData] : [circleData],
		)
	}, [parentSize])

	const handleAddActiveCircle = useCallback(
		(id: string) => {
			if (activeCircles && id in activeCircles) {
				setActiveCircles(prevState => {
					if (!prevState) {
						return prevState
					}

					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { [id]: _, ...rest } = prevState
					return rest
				})
				return
			}

			setActiveCircles(prevState =>
				prevState ? { ...prevState, [id]: true } : { [id]: true },
			)
		},
		[activeCircles],
	)

	const handleDragShape = useCallback(
		(id: string, [mx, my]: [number, number], isStopDragging: boolean) => {
			if (!activeCircles) {
				return
			}

			setCircles(prevState => {
				if (!prevState) {
					return prevState
				}

				return prevState.map(c => {
					if (!(c.id in activeCircles)) {
						return c
					}

					if (isStopDragging) {
						return {
							...c,
							startCord: [c.startCord[0] + mx, c.startCord[1] + my],
							editedCord: [c.startCord[0] + mx, c.startCord[1] + my],
						}
					}

					if (c.id === id) {
						return c
					}

					return {
						...c,
						editedCord: [c.startCord[0] + mx, c.startCord[1] + my],
					}
				})
			})
		},
		[activeCircles],
	)

	useEffect(() => {
		const removeCircle = (e: KeyboardEvent) => {
			if (e.key === 'Backspace' && activeCircles) {
				setCircles(prevState =>
					prevState
						? prevState.filter(c => !Object.keys(activeCircles).includes(c.id))
						: prevState,
				)
				setActiveCircles(null)
			}
		}

		window.addEventListener('keyup', removeCircle)
		return () => {
			window.removeEventListener('keyup', removeCircle)
		}
	}, [activeCircles])

	return (
		<div className='max-h-screen min-h-screen bg-gray flex flex-col justify-center items-center gap-5'>
			<div className={'px-[10vw] w-[35vw]'}>
				<HappyProvider>
					<Button type={'primary'} block onClick={handleAddCircle}>
						Добавить
					</Button>
				</HappyProvider>
			</div>
			<div
				className='w-[70vw] h-[70vh] bg-white rounded-2xl shadow-2xl relative'
				ref={slideRef}
			>
				{circles &&
					parentSize &&
					circles.map(({ circleDia, editedCord, id }) => (
						<Circle
							key={id}
							id={id}
							startCord={editedCord}
							parentSize={parentSize}
							circleDia={circleDia}
							isActive={activeCircles ? id in activeCircles : false}
							onClick={() => handleAddActiveCircle(id)}
							onDrag={handleDragShape}
						/>
					))}
			</div>
		</div>
	)
}

export default App
