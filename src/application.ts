import { Shape, TextData } from './domain/shape';
import { Slot } from './domain/slot';

export default function createHeadlineShape(): Shape<TextData> {

  const headlineSlot: Slot = { from: { x: 1, y: 1 }, to: { x: 2, y: 2 } }

  const headlineData: TextData = {
    type: "text",
    text: "Turn your ideas into creative digital solutions",
    fontSize: 60,
  }
  const headlineShape: Shape<TextData> = {
    slots: headlineSlot,
    data: headlineData
  }

  return headlineShape

}