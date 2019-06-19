import * as React from "react";
import * as PropTypes from "prop-types";
export interface PseudoClassesProps {
    children?: React.ReactElement<any>;
    style?: React.CSSProperties;
    [key: string]: any;
}
export declare class PseudoClasses extends React.Component<PseudoClassesProps> {
    static contextTypes: {
        theme: PropTypes.Requireable<any>;
    };
    context: {
        theme: ReactUWP.ThemeType;
    };
    rootElm: Element;
    componentDidMount(): void;
    render(): React.ReactElement<any>;
}
export default PseudoClasses;
