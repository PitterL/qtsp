export declare function darken(color: string, coefficient: number): string;
export declare function lighten(color: string, coefficient: number): string;
export interface ThemeConfig {
    themeName?: "dark" | "light";
    accent?: string;
    useFluentDesign?: boolean;
    desktopBackgroundImage?: string;
    userAgent?: string;
    useInlineStyle?: boolean;
}
export default function getTheme(themeConfig?: ThemeConfig): ReactUWP.ThemeType;
