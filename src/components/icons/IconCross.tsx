import { Icon } from './Icon';
import { IconProps } from 'types/Icons';

export function IconCross({ size, fill, className, ...rest }: IconProps) {
  return (
    <Icon size={size} className={className} {...rest}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
      >
        <path d="m6.94 6 4.2-4.193a.67.67 0 0 0-.947-.947L6 5.06 1.807.86a.67.67 0 0 0-.947.947L5.06 6l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L6 6.94l4.193 4.2a.667.667 0 0 0 1.093-.217.666.666 0 0 0-.146-.73L6.94 6Z" />
      </svg>
    </Icon>
  );
}
