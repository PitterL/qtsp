import * as React from "react";
import * as PropTypes from "prop-types";
export interface DataProps {
    direction?: "row" | "column";
    disabled?: boolean;
}
export interface SeparatorProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {
}
export declare class Separator extends React.Component<SeparatorProps> {
    static defaultProps: SeparatorProps;
    static contextTypes: {
        theme: PropTypes.Requireable<any>;
    };
    context: {
        theme: ReactUWP.ThemeType;
    };
    render(): JSX.Element;
}
export default Separator;
