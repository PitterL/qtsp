/// <reference types="react" />
export interface PrefixAll {
    (userAgent?: string): (style: React.CSSProperties) => React.CSSProperties;
}
declare function prefixAll(userAgent?: string | false): (style?: React.CSSProperties) => React.CSSProperties;
export default prefixAll;
