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
import { RGB } from '../types/color';
declare type SupportedLocaleOptions = [number, number, number, number, number, number, number];
declare class CharShape {
    fontId: SupportedLocaleOptions;
    fontScale: SupportedLocaleOptions;
    fontSpacing: SupportedLocaleOptions;
    fontRatio: SupportedLocaleOptions;
    fontLocation: SupportedLocaleOptions;
    fontBaseSize: number;
    attr: number;
    shadow: RGB;
    shadow2: RGB;
    color: RGB;
    underLineColor: RGB;
    shadeColor: RGB;
    shadowColor: RGB;
    fontBackgroundId: number | null;
    strikeColor: RGB | null;
    constructor(fontId: SupportedLocaleOptions, fontScale: SupportedLocaleOptions, fontSpacing: SupportedLocaleOptions, fontRatio: SupportedLocaleOptions, fontLocation: SupportedLocaleOptions, fontBaseSize: number, attr: number, shadow: number, shadow2: number, color: number, underLineColor: number, shadeColor: number, shadowColor: number);
}
export default CharShape;
