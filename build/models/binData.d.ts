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
export declare enum BinDataType {
    LINK = 0,
    EMBEDDING = 1,
    STORAGE = 2
}
export declare enum BinDataCompress {
    DEFAULT = 0,
    COMPRESS = 1,
    NOT_COMPRESS = 2
}
export declare enum BinDataStatus {
    INITIAL = 0,
    SUCCESS = 1,
    ERROR = 2,
    IGNORE = 3
}
interface BinProperties {
    type: BinDataType;
    compress: BinDataCompress;
    status: BinDataStatus;
}
declare class BinData {
    properties: BinProperties;
    extension: string;
    payload: Uint8Array;
    constructor(properties: BinProperties, extension: string, payload: Uint8Array);
}
export default BinData;
