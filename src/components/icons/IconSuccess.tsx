import { Icon } from './Icon';
import { IconProps } from 'types/Icons';

export function IconSuccess({ size, fill, className, ...rest }: IconProps) {
  return (
    <Icon size={size} className={className} {...rest}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
      >
        <path d="m17.627 9.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.88l3.133 3.147a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.334 1.334 0 1 0-1.88-1.893ZM14 .667a13.333 13.333 0 1 0 0 26.666A13.333 13.333 0 0 0 14 .667Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" />
      </svg>
    </Icon>
  );
}
