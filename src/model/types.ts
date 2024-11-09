export type X = number
export type Y = number
export type Cord = [X, Y]

export type Width = number
export type Height = number
export type Size = [Width, Height]

export type MinDia = number
export type MaxDia = number
export type CircleDia = [MinDia, MaxDia]

export type CircleData = {
	id: string
	startCord: Cord
	editedCord: Cord
	circleDia: CircleDia
}
