import { Slot } from "./slot";

export type ShapeData = {
    type: string
}

export type TextData = ShapeData & {
    type: "text",
    text: string,
    fontSize: number
    color: string
}

export type Shape<DataType extends ShapeData> = {
    slots: Slot
    data: DataType
}

