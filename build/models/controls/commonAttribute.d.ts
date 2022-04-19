/**
 * Copyright Han Lee <hanlee.dev@gmail.com> and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export declare enum VertRelTo {
    Paper = 0,
    Page = 1,
    Paragraph = 2
}
export declare enum HorzRelTo {
    Page = 0,
    Column = 1,
    Paragraph = 2
}
export declare enum WidthCriterion {
    Paper = 0,
    Page = 1,
    Column = 2,
    Paragraph = 3,
    Absolute = 4
}
export declare enum HeightCriterion {
    Paper = 0,
    Page = 1,
    Absolute = 2
}
export declare enum TextFlowMethod {
    Square = 0,
    Tight = 1,
    Through = 2,
    TopAndBottom = 3,
    BehindText = 4,
    InFrontOfText = 5
}
export declare enum TextHorzArrange {
    BothSides = 0,
    LeftOnly = 1,
    RightOnly = 2,
    LargestOnly = 3
}
export declare enum ObjectType {
    None = 0,
    Figure = 1,
    Table = 2,
    Equation = 3
}
declare class CommonAttribute {
    isTextLike: boolean;
    isApplyLineSpace: boolean;
    vertRelTo: VertRelTo;
    vertRelativeArrange: number;
    horzRelTo: HorzRelTo;
    horzRelativeArrange: number;
    isVertRelToParaLimit: boolean;
    isAllowOverlap: boolean;
    widthCriterion: WidthCriterion;
    heightCriterion: HeightCriterion;
    isProtectSize: boolean;
    textFlowMethod: TextFlowMethod;
    textHorzArrange: TextHorzArrange;
    objectType: ObjectType;
    setHorzRelTo(value: number): void;
    getVertAlign(): string | null;
    getHorzAlign(): string | null;
}
export default CommonAttribute;
