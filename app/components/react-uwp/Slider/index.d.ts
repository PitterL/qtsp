import * as React from "react";
import * as PropTypes from "prop-types";
export interface DataProps {
    /**
     * Set the Slider display mode.
     */
    displayMode?: "vertical" | "horizon";
    /**
     * Set the Slider minValue.
     */
    minValue?: number;
    /**
     * Set the Slider maxValue.
     */
    maxValue?: number;
    /**
     * Set the Slider initValue.
     */
    initValue?: number;
    /**
     * Set `value.toFixed(numberToFixed)`.
     */
    numberToFixed?: number;
    /**
     * Set value info add `unit`.
     */
    unit?: string;
    /**
     * Toggle show value info.
     */
    showValueInfo?: boolean;
    /**
     * Set transition to all Slider Element.
     */
    transition?: string;
    /**
     * onChangeValue callback.
     */
    onChangeValue?: (value?: number) => void;
    /**
     * After finished onChangeValue callback.
     */
    onChangedValue?: (value?: number) => void;
    /**
     * onChangeValueRatio callback.
     */
    onChangeValueRatio?: (valueRatio?: number) => void;
    /**
     * After finished onChangeValueRatio callback.
     */
    onChangedValueRatio?: (value?: number) => void;
    /**
     * Set custom Slider bar Hight.
     */
    barHeight?: number;
    /**
     * Set custom Slider bar background.
     */
    barBackground?: string;
    /**
     * Set custom Slider bar backgroundImage.
     */
    barBackgroundImage?: string;
    /**
     * Set custom Slider controllerStyle.
     */
    customControllerStyle?: React.CSSProperties;
    /**
     * Set custom Slider controller width.
     */
    controllerWidth?: number;
    /**
     * Set custom Slider controller without animation.
     */
    useSimpleController?: boolean;
    /**
     * How many time call onChange callback.
     */
    throttleTimer?: number;
    width?: string | number;
    height?: string | number;
    label?: string;
}
export interface SliderProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {
}
export interface SliderState {
    currValue?: number;
    valueRatio?: number;
    hovered?: boolean;
    dragging?: boolean;
}
export declare class Slider extends React.Component<SliderProps, SliderState> {
    static defaultProps: SliderProps;
    originBodyStyle: {
        [x: number]: string;
        alignContent: string;
        alignItems: string;
        alignSelf: string;
        alignmentBaseline: string;
        animation: string;
        animationDelay: string;
        animationDirection: string;
        animationDuration: string;
        animationFillMode: string;
        animationIterationCount: string;
        animationName: string;
        animationPlayState: string;
        animationTimingFunction: string;
        backfaceVisibility: string;
        background: string;
        backgroundAttachment: string;
        backgroundClip: string;
        backgroundColor: string;
        backgroundImage: string;
        backgroundOrigin: string;
        backgroundPosition: string;
        backgroundPositionX: string;
        backgroundPositionY: string;
        backgroundRepeat: string;
        backgroundSize: string;
        baselineShift: string;
        border: string;
        borderBottom: string;
        borderBottomColor: string;
        borderBottomLeftRadius: string;
        borderBottomRightRadius: string;
        borderBottomStyle: string;
        borderBottomWidth: string;
        borderCollapse: string;
        borderColor: string;
        borderImage: string;
        borderImageOutset: string;
        borderImageRepeat: string;
        borderImageSlice: string;
        borderImageSource: string;
        borderImageWidth: string;
        borderLeft: string;
        borderLeftColor: string;
        borderLeftStyle: string;
        borderLeftWidth: string;
        borderRadius: string;
        borderRight: string;
        borderRightColor: string;
        borderRightStyle: string;
        borderRightWidth: string;
        borderSpacing: string;
        borderStyle: string;
        borderTop: string;
        borderTopColor: string;
        borderTopLeftRadius: string;
        borderTopRightRadius: string;
        borderTopStyle: string;
        borderTopWidth: string;
        borderWidth: string;
        bottom: string;
        boxShadow: string;
        boxSizing: string;
        breakAfter: string;
        breakBefore: string;
        breakInside: string;
        captionSide: string;
        clear: string;
        clip: string;
        clipPath: string;
        clipRule: string;
        color: string;
        colorInterpolationFilters: string;
        columnCount: any;
        columnFill: string;
        columnGap: any;
        columnRule: string;
        columnRuleColor: any;
        columnRuleStyle: string;
        columnRuleWidth: any;
        columnSpan: string;
        columnWidth: any;
        columns: string;
        content: string;
        counterIncrement: string;
        counterReset: string;
        cssFloat: string;
        cssText: string;
        cursor: string;
        direction: string;
        display: string;
        dominantBaseline: string;
        emptyCells: string;
        enableBackground: string;
        fill: string;
        fillOpacity: string;
        fillRule: string;
        filter: string;
        flex: string;
        flexBasis: string;
        flexDirection: string;
        flexFlow: string;
        flexGrow: string;
        flexShrink: string;
        flexWrap: string;
        floodColor: string;
        floodOpacity: string;
        font: string;
        fontFamily: string;
        fontFeatureSettings: string;
        fontSize: string;
        fontSizeAdjust: string;
        fontStretch: string;
        fontStyle: string;
        fontVariant: string;
        fontWeight: string;
        gap: string;
        glyphOrientationHorizontal: string;
        glyphOrientationVertical: string;
        grid: string;
        gridArea: string;
        gridAutoColumns: string;
        gridAutoFlow: string;
        gridAutoRows: string;
        gridColumn: string;
        gridColumnEnd: string;
        gridColumnGap: string;
        gridColumnStart: string;
        gridGap: string;
        gridRow: string;
        gridRowEnd: string;
        gridRowGap: string;
        gridRowStart: string;
        gridTemplate: string;
        gridTemplateAreas: string;
        gridTemplateColumns: string;
        gridTemplateRows: string;
        height: string;
        imeMode: string;
        justifyContent: string;
        justifyItems: string;
        justifySelf: string;
        kerning: string;
        layoutGrid: string;
        layoutGridChar: string;
        layoutGridLine: string;
        layoutGridMode: string;
        layoutGridType: string;
        left: string;
        length: number;
        letterSpacing: string;
        lightingColor: string;
        lineBreak: string;
        lineHeight: string;
        listStyle: string;
        listStyleImage: string;
        listStylePosition: string;
        listStyleType: string;
        margin: string;
        marginBottom: string;
        marginLeft: string;
        marginRight: string;
        marginTop: string;
        marker: string;
        markerEnd: string;
        markerMid: string;
        markerStart: string;
        mask: string;
        maskImage: string;
        maxHeight: string;
        maxWidth: string;
        minHeight: string;
        minWidth: string;
        msContentZoomChaining: string;
        msContentZoomLimit: string;
        msContentZoomLimitMax: any;
        msContentZoomLimitMin: any;
        msContentZoomSnap: string;
        msContentZoomSnapPoints: string;
        msContentZoomSnapType: string;
        msContentZooming: string;
        msFlowFrom: string;
        msFlowInto: string;
        msFontFeatureSettings: string;
        msGridColumn: any;
        msGridColumnAlign: string;
        msGridColumnSpan: any;
        msGridColumns: string;
        msGridRow: any;
        msGridRowAlign: string;
        msGridRowSpan: any;
        msGridRows: string;
        msHighContrastAdjust: string;
        msHyphenateLimitChars: string;
        msHyphenateLimitLines: any;
        msHyphenateLimitZone: any;
        msHyphens: string;
        msImeAlign: string;
        msOverflowStyle: string;
        msScrollChaining: string;
        msScrollLimit: string;
        msScrollLimitXMax: any;
        msScrollLimitXMin: any;
        msScrollLimitYMax: any;
        msScrollLimitYMin: any;
        msScrollRails: string;
        msScrollSnapPointsX: string;
        msScrollSnapPointsY: string;
        msScrollSnapType: string;
        msScrollSnapX: string;
        msScrollSnapY: string;
        msScrollTranslation: string;
        msTextCombineHorizontal: string;
        msTextSizeAdjust: any;
        msTouchAction: string;
        msTouchSelect: string;
        msUserSelect: string;
        msWrapFlow: string;
        msWrapMargin: any;
        msWrapThrough: string;
        objectFit: string;
        objectPosition: string;
        opacity: string;
        order: string;
        orphans: string;
        outline: string;
        outlineColor: string;
        outlineOffset: string;
        outlineStyle: string;
        outlineWidth: string;
        overflow: string;
        overflowX: string;
        overflowY: string;
        padding: string;
        paddingBottom: string;
        paddingLeft: string;
        paddingRight: string;
        paddingTop: string;
        pageBreakAfter: string;
        pageBreakBefore: string;
        pageBreakInside: string;
        parentRule: CSSRule;
        penAction: string;
        perspective: string;
        perspectiveOrigin: string;
        pointerEvents: string;
        position: string;
        quotes: string;
        resize: string;
        right: string;
        rotate: string;
        rowGap: string;
        rubyAlign: string;
        rubyOverhang: string;
        rubyPosition: string;
        scale: string;
        stopColor: string;
        stopOpacity: string;
        stroke: string;
        strokeDasharray: string;
        strokeDashoffset: string;
        strokeLinecap: string;
        strokeLinejoin: string;
        strokeMiterlimit: string;
        strokeOpacity: string;
        strokeWidth: string;
        tableLayout: string;
        textAlign: string;
        textAlignLast: string;
        textAnchor: string;
        textCombineUpright: string;
        textDecoration: string;
        textIndent: string;
        textJustify: string;
        textKashida: string;
        textKashidaSpace: string;
        textOverflow: string;
        textShadow: string;
        textTransform: string;
        textUnderlinePosition: string;
        top: string;
        touchAction: string;
        transform: string;
        transformOrigin: string;
        transformStyle: string;
        transition: string;
        transitionDelay: string;
        transitionDuration: string;
        transitionProperty: string;
        transitionTimingFunction: string;
        translate: string;
        unicodeBidi: string;
        userSelect: string;
        verticalAlign: string;
        visibility: string;
        webkitAlignContent: string;
        webkitAlignItems: string;
        webkitAlignSelf: string;
        webkitAnimation: string;
        webkitAnimationDelay: string;
        webkitAnimationDirection: string;
        webkitAnimationDuration: string;
        webkitAnimationFillMode: string;
        webkitAnimationIterationCount: string;
        webkitAnimationName: string;
        webkitAnimationPlayState: string;
        webkitAnimationTimingFunction: string;
        webkitAppearance: string;
        webkitBackfaceVisibility: string;
        webkitBackgroundClip: string;
        webkitBackgroundOrigin: string;
        webkitBackgroundSize: string;
        webkitBorderBottomLeftRadius: string;
        webkitBorderBottomRightRadius: string;
        webkitBorderImage: string;
        webkitBorderRadius: string;
        webkitBorderTopLeftRadius: string;
        webkitBorderTopRightRadius: string;
        webkitBoxAlign: string;
        webkitBoxDirection: string;
        webkitBoxFlex: string;
        webkitBoxOrdinalGroup: string;
        webkitBoxOrient: string;
        webkitBoxPack: string;
        webkitBoxSizing: string;
        webkitColumnBreakAfter: string;
        webkitColumnBreakBefore: string;
        webkitColumnBreakInside: string;
        webkitColumnCount: any;
        webkitColumnGap: any;
        webkitColumnRule: string;
        webkitColumnRuleColor: any;
        webkitColumnRuleStyle: string;
        webkitColumnRuleWidth: any;
        webkitColumnSpan: string;
        webkitColumnWidth: any;
        webkitColumns: string;
        webkitFilter: string;
        webkitFlex: string;
        webkitFlexBasis: string;
        webkitFlexDirection: string;
        webkitFlexFlow: string;
        webkitFlexGrow: string;
        webkitFlexShrink: string;
        webkitFlexWrap: string;
        webkitJustifyContent: string;
        webkitOrder: string;
        webkitPerspective: string;
        webkitPerspectiveOrigin: string;
        webkitTapHighlightColor: string;
        webkitTextFillColor: string;
        webkitTextSizeAdjust: any;
        webkitTextStroke: string;
        webkitTextStrokeColor: string;
        webkitTextStrokeWidth: string;
        webkitTransform: string;
        webkitTransformOrigin: string;
        webkitTransformStyle: string;
        webkitTransition: string;
        webkitTransitionDelay: string;
        webkitTransitionDuration: string;
        webkitTransitionProperty: string;
        webkitTransitionTimingFunction: string;
        webkitUserModify: string;
        webkitUserSelect: string;
        webkitWritingMode: string;
        whiteSpace: string;
        widows: string;
        width: string;
        wordBreak: string;
        wordSpacing: string;
        wordWrap: string;
        writingMode: string;
        zIndex: string;
        zoom: string;
        getPropertyPriority(propertyName: string): string;
        getPropertyValue(propertyName: string): string;
        item(index: number): string;
        removeProperty(propertyName: string): string;
        setProperty(propertyName: string, value: string, priority?: string): void;
    };
    state: SliderState;
    throttleNow: number;
    throttleNowTimer: any;
    onChangedValueTimer: any;
    rootElm: HTMLDivElement;
    labelElm: HTMLSpanElement;
    controllerWrapperElm: HTMLDivElement;
    controllerElm: HTMLDivElement;
    barElm: HTMLDivElement;
    componentWillReceiveProps(nextProps: SliderProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    static contextTypes: {
        theme: PropTypes.Requireable<any>;
    };
    context: {
        theme: ReactUWP.ThemeType;
    };
    handelMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
    handelMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
    handelOnClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleDraggingStart: (e: any) => void;
    handleDragged: (e: any) => void;
    setValueByEvent: (e: any, type?: any) => void;
    render(): JSX.Element;
}
export default Slider;
