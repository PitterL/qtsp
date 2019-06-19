import * as React from "react";
import * as PropTypes from "prop-types";
export interface DataProps {
}
export interface ToastWrapperProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {
}
export interface ToastWrapperState {
    toasts?: React.ReactElement<any>[];
}
export declare class ToastWrapper extends React.Component<ToastWrapperProps, ToastWrapperState> {
    state: ToastWrapperState;
    static contextTypes: {
        theme: PropTypes.Requireable<any>;
    };
    context: {
        theme: ReactUWP.ThemeType;
    };
    addToast: (toast: React.ReactElement<any>) => void;
    updateToast: (toastId: number, toast: React.ReactElement<any>) => void;
    render(): JSX.Element;
}
export default ToastWrapper;
