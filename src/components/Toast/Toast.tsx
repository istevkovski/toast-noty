import classnames from 'classnames';
import { IconCross, IconSuccess } from 'components/icons';
import '../../styles/fonts.scss';
import '../../styles/reset.scss';
import styles from './Toast.module.scss';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	message: string;
	duration?: number;
}

function Toast({
	title,
	message,
	duration = 6,
	className,
	...rest
}: ToastProps) {
	return (
		<div className={classnames([styles['Toast'], className])} {...rest}>
			<IconSuccess className={styles.IndicationIcon} fill="#0F552C" />
			<div className={styles.Content}>
				<h2>{title}</h2>
				<p>{message}</p>
			</div>
			<IconCross
				className={styles.Close}
				fill="#135E32"
				size="small"
				onClick={() => alert('Closed')}
			/>
		</div>
	);
}

export default Toast;
