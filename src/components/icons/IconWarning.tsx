import { Icon } from './Icon';
import { IconProps } from 'types/icons';

export function IconWarning({ size, fill, className, ...rest }: IconProps) {
  return (
    <Icon size={size} className={className} {...rest}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
      >
        <path d="M14 12.667A1.333 1.333 0 0 0 12.667 14v5.333a1.333 1.333 0 1 0 2.666 0V14A1.333 1.333 0 0 0 14 12.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28c-.117.13-.212.278-.28.44a1.12 1.12 0 0 0-.106.507 1.333 1.333 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM14 .667a13.333 13.333 0 1 0 0 26.666A13.333 13.333 0 0 0 14 .667Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" />
      </svg>
    </Icon>
  );
}
