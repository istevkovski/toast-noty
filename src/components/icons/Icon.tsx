import classnames from 'classnames';
import styles from './Icon.module.scss';

interface IconProps extends React.HTMLAttributes<HTMLElement> {
	size?: 'small' | 'default';
}

export function Icon({
	size = 'default',
	children,
	className,
	...rest
}: IconProps) {
	return (
		<span
			className={classnames([styles.Icon, styles[size], className])}
			{...rest}
		>
			{children}
		</span>
	);
}
