import { Icon } from './Icon';
import { IconProps } from 'types/icons';

export function IconDanger({ size, fill, className, ...rest }: IconProps) {
  return (
    <Icon size={size} className={className} {...rest}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
      >
        <path d="M14 .667a13.333 13.333 0 1 0 0 26.666A13.333 13.333 0 0 0 14 .667Zm0 24A10.667 10.667 0 0 1 3.333 14a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 14 24.667Zm8.413-4.134L7.467 5.587A10.56 10.56 0 0 1 14 3.333 10.667 10.667 0 0 1 24.667 14a10.56 10.56 0 0 1-2.254 6.533Z" />
      </svg>
    </Icon>
  );
}
