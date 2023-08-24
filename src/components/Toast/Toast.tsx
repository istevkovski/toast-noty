import classnames from 'classnames';
import {
	IconCross,
	IconDanger,
	IconSuccess,
	IconWarning,
} from 'components/icons';
import { IconProps } from 'src/types/Icons';
import '../../styles/fonts.scss';
import '../../styles/reset.scss';
import styles from './Toast.module.scss';

type TToastTypes = 'warning' | 'success' | 'danger';

type TToastDefaults = {
	title: string;
	icon: (props: IconProps) => JSX.Element;
};

const defaults: { [key in TToastTypes]: TToastDefaults } = {
	warning: { title: 'Warning ', icon: IconWarning },
	success: { title: 'Success', icon: IconSuccess },
	danger: { title: 'Danger', icon: IconDanger },
};

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
	type?: TToastTypes;
	title?: string;
	message: string;
	duration?: number;
}

function Toast({
	type = 'success',
	title,
	message,
	duration = 6,
	className,
	...rest
}: ToastProps) {
	const IconElement = defaults[type].icon;

	return (
		<div
			className={classnames([styles['Toast'], styles[type], className])}
			{...rest}
		>
			<IconElement className={styles.IndicationIcon} />
			<div className={styles.Content}>
				<h2>{title || defaults[type].title}</h2>
				<p>{message}</p>
			</div>
			<IconCross
				className={styles.Close}
				size="small"
				onClick={() => alert('Closed')}
			/>
		</div>
	);
}

export default Toast;
