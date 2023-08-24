import classnames from 'classnames';
import styles from './Icon.module.scss';

interface IconProps extends React.HTMLAttributes<HTMLElement> {}

export function Icon({ children, className, ...rest }: IconProps) {
	return (
		<span className={classnames([styles.Icon, className])} {...rest}>
			{children}
		</span>
	);
}
