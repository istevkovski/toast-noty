/// <reference types="react" />
interface IconProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small' | 'default';
}
export declare function Icon({ size, children, className, ...rest }: IconProps): import("react/jsx-runtime").JSX.Element;
export {};
