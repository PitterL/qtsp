/// <reference types="react" />
export declare const replace2Dashes: (key: string) => string;
export declare const getStyleValue: (key: string, value: string) => string;
export interface CustomCSSProperties extends React.CSSProperties {
    "&:hover"?: React.CSSProperties;
    "&:active"?: React.CSSProperties;
    "&:visited"?: React.CSSProperties;
    "&:focus"?: React.CSSProperties;
    "&:disabled"?: React.CSSProperties;
    dynamicStyle?: React.CSSProperties;
}
export interface StyleClasses {
    style?: CustomCSSProperties;
    className?: string;
}
export interface Sheet {
    CSSText?: string;
    className?: string;
    classNameWithHash?: string;
    id?: number;
}
export declare const extendsStyleKeys: any;
export interface StyleManagerConfig {
    theme?: ReactUWP.ThemeType;
    globalClassName?: string;
    styleDidUpdate?: () => void;
}
declare let StyleManager: new (config: StyleManagerConfig) => ReactUWP.StyleManager;
export default StyleManager;
