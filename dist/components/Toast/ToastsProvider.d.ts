import React from 'react';
import { IToastProps } from '../../types/Toasts';
export interface IToastsContextProps {
    createToast: ({ ...props }: Omit<IToastProps, 'id'>) => void;
    removeToast: (id: string) => void;
}
export declare const ToastsContext: React.Context<IToastsContextProps | undefined>;
export declare const ToastsProvider: ({ children, }: {
    children?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
