export { default as AppBarButton, AppBarButtonButtonProps } from "./AppBarButton";
export { default as AppBarSeparator, AppBarSeparatorProps } from "./AppBarSeparator";
export { default as AutoSuggestBox, AutoSuggestBoxProps, AutoSuggestBoxState } from "./AutoSuggestBox";
export { default as Button, ButtonProps } from "./Button";
export { default as CalendarDatePicker, CalendarDatePickerProps, CalendarDatePickerState } from "./CalendarDatePicker";
export { default as CalendarView, CalendarViewProps, CalendarViewState } from "./CalendarView";
export { default as CheckBox, CheckBoxProps, CheckBoxState } from "./CheckBox";
export { default as ColorPicker, ColorPickerProps, ColorPickerState } from "./ColorPicker";
export { default as CommandBar, CommandBarProps, CommandBarState } from "./CommandBar";
export { default as ContentDialog, ContentDialogProps } from "./ContentDialog";
export { default as DatePicker, DatePickerProps, DatePickerState } from "./DatePicker";
export { default as Dialog, DialogProps, DialogState } from "./Dialog";
export { default as DropDownMenu, DropDownMenuProps, DropDownMenuState } from "./DropDownMenu";
export { default as FlipView, FlipViewProps, FlipViewState } from "./FlipView";
export { default as FloatNav, FloatNavProps, FloatNavState } from "./FloatNav";
export { default as Flyout, FlyoutProps } from "./Flyout";
export { default as FlyoutContent, FlyoutContentProps, FlyoutContentState } from "./FlyoutContent";
export { default as HyperLink, HyperLinkProps } from "./HyperLink";
export { default as Icon, IconProps, IconState } from "./Icon";
export { default as IconButton, IconButtonProps } from "./IconButton";
export { default as Image, ImageProps } from "./Image";
export { default as Link, LinkProps } from "./Link";
export { default as ListView, ListViewProps, ListViewState } from "./ListView";
export { default as MarkdownRender, MarkdownRenderProps } from "./MarkdownRender";
export { default as MediaPlayer, MediaPlayerProps, MediaPlayerState } from "./MediaPlayer";
export { default as NavigationView, NavigationViewProps, NavigationViewState } from "./NavigationView";
export { default as Menu, MenuProps, MenuState, MenuItem, MenuItemProps } from "./Menu";
export { default as PasswordBox, PasswordBoxProps, PasswordBoxState } from "./PasswordBox";
export { default as ProgressBar, ProgressBarProps, ProgressBarState } from "./ProgressBar";
export { default as ProgressRing, ProgressRingProps } from "./ProgressRing";
export { default as RadioButton, RadioButtonProps, RadioButtonState } from "./RadioButton";
export { default as RatingControl, RatingControlProps, RatingControlState } from "./RatingControl";
export { default as RenderToBody, RenderToBodyProps } from "./RenderToBody";
export { default as ScrollBar, ScrollBarProps, ScrollBarState } from "./ScrollBar";
export { default as ScrollReveal, ScrollRevealProps } from "./ScrollReveal";
export { default as SemanticZoom, SemanticZoomProps, SemanticZoomState } from "./SemanticZoom";
export { default as Separator, SeparatorProps } from "./Separator";
export { default as Slider, SliderProps, SliderState } from "./Slider";
export { default as SplitView, SplitViewPaneProps, SplitViewPane } from "./SplitView";
export { default as SplitViewCommand, SplitViewCommandProps } from "./SplitViewCommand";
export { default as Swipe, SwipeProps, SwipeState } from "./Swipe";
export { default as Tabs, TabsProps, TabsState } from "./Tabs";
export { default as TextBox, TextBoxProps, TextBoxState } from "./TextBox";
export { default as Theme, ThemeProps, ThemeState } from "./Theme";
export { default as TimePicker, TimePickerProps, TimePickerState } from "./TimePicker";
export { default as Toast, ToastProps, ToastState } from "./Toast";
export { default as Toggle, ToggleProps, ToggleState } from "./Toggle";
export { default as Tooltip, TooltipProps, TooltipState } from "./Tooltip";
export { default as TreeView, TreeViewProps, TreeViewState } from "./TreeView";
export { default as addCSSRule } from "./common/browser/addCSSRule";
export { default as darkTheme } from "./styles/darkTheme";
export { default as getTheme } from "./styles/getTheme";
export { default as lightTheme } from "./styles/lightTheme";
export { accentColors };
import * as accentColors from "./styles/accentColors";
export * from "./Animate";
import * as tinycolor from "tinycolor2";
export { tinycolor };

/// <reference types="core-js" />
/// <reference types="node" />
/// <reference types="marked" />
/// <reference types="prop-types" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="react-transition-group" />
/// <reference types="@types/tinycolor2" />

export as namespace ReactUWP;

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

export interface ScrollRevealType {
  rootElm?: HTMLElement;
  animated?: boolean;
  setEnterStyle?: () => void;
  setLeaveStyle: () => void;
  props: {
    speed?: number;
    style?: React.CSSProperties;
    animatedStyle?: React.CSSProperties;
    children?: React.ReactElement<any>;
    topOffset?: number;
    bottomOffset?: number;
  }
}

export interface AcrylicTexture {
  tintColor?: string;
  tintOpacity?: number;
  blurSize?: number;
  noiseSize?: number;
  noiseOpacity?: number;
  background?: string;
}

export interface Sheet {
  CSSText?: string;
  className?: string;
  classNameWithHash?: string;
  id?: number;
}

export class StyleManager {
  globalClassName?: string;
  theme?: ReactUWP.ThemeType;
  themeId?: number;
  styleElement?: HTMLStyleElement;
  sheets?: {
    [key: string]: Sheet
  };
  styleDidUpdate?: () => void;
  CSSText?: string;
  addedCSSText?: {
    [key: string]: boolean;
  };

  constructor(config: {
    theme?: ReactUWP.ThemeType;
    globalClassName?: string;
    styleDidUpdate?: () => void;
  })

  setupTheme(theme?: ThemeType): void;

  setupStyleElement(): void;

  cleanStyleSheet(): void;

  style2CSSText(style: React.CSSProperties): string;

  sheetsToString(): string;

  addStyle(style: CustomCSSProperties, className?: string, callback?: () => void): Sheet;

  addStyleWithUpdate(style: CustomCSSProperties, className?: string): Sheet;

  addCSSText(CSSText: string, callback?: (shouldUpdate?: boolean) => void ): void;

  addCSSTextWithUpdate(CSSText: string): void;

  setStyleToManager(config?: {
    style?: CustomCSSProperties;
    className?: string;
  }, callback?: (theme?: ReactUWP.ThemeType) => StyleClasses): StyleClasses;

  setStylesToManager<T>(config?: {
    styles: T;
    className?: string;
  }, callback?: (theme?: ReactUWP.ThemeType) => { [P in keyof T]: StyleClasses }): { [P in keyof T]: StyleClasses };

  renderSheets(): void;

  updateStyleElement(textContent: string): void;
}

export interface ThemeType {
  themeName?: "dark" | "light";
  fonts?: {
    sansSerifFonts?: string;
    segoeMDL2Assets?: string;
  };
  styleManager?: StyleManager;
  scrollReveals?: ScrollRevealType[];
  scrollRevealListener?: (e?: Event) => void;

  useFluentDesign?: boolean;
  desktopBackgroundImage?: string;
  desktopBackground?: string;
  useInlineStyle?: boolean;

  haveAcrylicTextures?: boolean;
  acrylicTexture40?: AcrylicTexture;
  acrylicTexture60?: AcrylicTexture;
  acrylicTexture80?: AcrylicTexture;

  accent?: string;
  accentLighter1?: string;
  accentLighter2?: string;
  accentLighter3?: string;
  accentDarker1?: string;
  accentDarker2?: string;
  accentDarker3?: string;

  baseLow?: string;
  baseMediumLow?: string;
  baseMedium?: string;
  baseMediumHigh?: string;
  baseHigh?: string;

  altLow?: string;
  altMediumLow?: string;
  altMedium?: string;
  altMediumHigh?: string;
  altHigh?: string;

  listLow?: string;
  listMedium?: string;
  listAccentLow?: string;
  listAccentMedium?: string;
  listAccentHigh?: string;

  chromeLow?: string;
  chromeMediumLow?: string;
  chromeMedium?: string;
  chromeHigh?: string;

  chromeAltLow?: string;

  chromeDisabledLow?: string;
  chromeDisabledHigh?: string;

  chromeBlackLow?: string;
  chromeBlackMediumLow?: string;
  chromeBlackMedium?: string;
  chromeBlackHigh?: string;

  chromeWhite?: string;

  prefixStyle?: (style?: CustomCSSProperties) => React.CSSProperties;
  prepareStyle?: (config?: {
    style?: CustomCSSProperties;
    className?: string;
    extendsClassName?: string;
  }, callback?: (theme?: ReactUWP.ThemeType) => StyleClasses) => StyleClasses ;
  prepareStyles<T>(
    config?: {
      styles: T;
      className?: string;
    },
    callback?: (theme?: ReactUWP.ThemeType) => { [P in keyof T]: StyleClasses }
  ) : { [P in keyof T]: StyleClasses };
  classNames?: (...classNames: string[]) => string;

  isDarkTheme?: boolean;
  updateTheme?: (theme: ThemeType) => void;
  forceUpdateTheme?: (theme: ThemeType) => void;
  saveTheme?: (theme: ThemeType) => void;
  generateAcrylicTextures?: {
    (theme: ThemeType, themeCallback?: (theme?: ReactUWP.ThemeType) => void): ThemeType;
    callback?: (theme?: ReactUWP.ThemeType) => void;
  };

  toasts?:React.ReactElement<any>[];
  addToast?: (toast: React.ReactElement<any>, callback?: (toastId?: number) => void) => void;
  updateToast?: (toastId: number, toast: React.ReactElement<any>) => void;
  deleteToast?: (toastId: number) => void;

  typographyStyles?: {
    header?: React.CSSProperties;
    subHeader?: React.CSSProperties;

    title?: React.CSSProperties;
    subTitle?: React.CSSProperties;
    subTitleAlt?: React.CSSProperties;

    base?: React.CSSProperties;
    baseAlt?: React.CSSProperties;
    body?: React.CSSProperties;

    captionAlt?: React.CSSProperties;
    caption?: React.CSSProperties;
  };
  zIndex?: {
    listView?: number;
    calendarView?: number;
    flyout?: number;
    tooltip?: number;
    dropDownMenu?: number;
    commandBar?: number;
    contentDialog?: number;
    mediaPlayer?: number;
    header?: number;
    toast?: number;
  };
}
