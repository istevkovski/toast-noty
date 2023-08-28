import { IToastProps } from '../../types/toasts';
type TToastContainerProps = {
    toasts: IToastProps[];
};
declare const ToastsContainer: ({ toasts }: TToastContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ToastsContainer;
