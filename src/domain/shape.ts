import { ColumnSize } from "./grid";
import { Slot } from "./slot";


export type ShapeData = {
    type: string 
}

export type TextData = ShapeData & {
    type: "text",
    text: string,
    fontSize: number
}


export type Shape<DataType extends ShapeData>  = {
    slots: Slot | Record<ColumnSize, Slot>
    data: DataType
}

