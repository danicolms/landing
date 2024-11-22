import { ColumnSize } from "./grid";
import { Slot, SlotDictionary } from "./slot";

export type ShapeData = {
    type: string
}

export type TextData = ShapeData & {
    type: "text",
    text: string,
    fontSize: number
}

export type Shape<DataType extends ShapeData> = {
    slots: Slot
    data: DataType
}

