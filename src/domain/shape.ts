import { ColumnSize } from "./grid";
import { Slot } from "./slot";


export type ShapeData = {
    type: string 
}

// NOTE: Must use interface to extend the ShapeData,
// would have loved to use type for consistency.
export interface TextData extends ShapeData {
    type: "text",
    text: string,
    fontSize: number
}


export type Shape = {
    slots: Slot | Record<ColumnSize, Slot>
    data: ShapeData
}

