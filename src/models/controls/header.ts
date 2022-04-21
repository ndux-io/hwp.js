import { BaseControl } from './base'
import ParagraphList from '../paragraphList'

export enum HeaderRange {
  All,
  Even,
  Odd,
}

export default class HeaderControl implements BaseControl {
  id: number = 0

  width: number = 0

  height: number = 0

  range: HeaderRange = HeaderRange.All

  content: ParagraphList<null>[] = []
}
