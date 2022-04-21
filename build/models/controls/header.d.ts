import { BaseControl } from './base';
import ParagraphList from '../paragraphList';
export declare enum HeaderRange {
    All = 0,
    Even = 1,
    Odd = 2
}
export default class HeaderControl implements BaseControl {
    id: number;
    width: number;
    height: number;
    range: HeaderRange;
    content: ParagraphList<null>[];
}
