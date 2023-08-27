import { IToastProps } from '../../types/Toasts';
type TToastContainerProps = {
    toasts: IToastProps[];
};
declare const ToastsContainer: ({ toasts }: TToastContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ToastsContainer;
