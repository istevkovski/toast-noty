/// <reference types="react" />
import { IconProps } from './Icons';
export type TToastTypes = 'warning' | 'success' | 'danger';
export type TToastDefaults = {
    title: string;
    icon: (props: IconProps) => JSX.Element;
};
export interface IToastProps {
    id: string;
    type?: TToastTypes;
    title?: string;
    message: string;
    duration?: number;
}
