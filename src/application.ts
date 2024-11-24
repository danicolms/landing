import { ColumnSize } from "./domain/grid";
import { Shape, TextData } from "./domain/shape";
import { Slot } from "./domain/slot";

export default function createHeadlineShape(): Shape<TextData> {
  
  const headlineSlots: Slot[] = [{
    columnsSize: ColumnSize.L,
    from: { x: 0, y: 0 },
    to: { x: 2, y: 2 },
  }]

  const headlineData: TextData = {
    type: "text",
    text: "Turn your ideas into creative digital solutions",
    fontSize: 60,
    color: "black",
  };

  const headlineShape: Shape<TextData> = {
    slots: headlineSlots,
    data: headlineData,
  };

  return headlineShape;
}
