import classnames from 'classnames';
import {
	IconCross,
	IconDanger,
	IconSuccess,
	IconWarning,
} from 'components/icons';
import { useToasts } from 'hooks/useToasts';
import React, { useEffect } from 'react';
import { IToastProps, TToastDefaults, TToastTypes } from 'types/Toasts';
import '../../styles/fonts.scss';
import '../../styles/reset.scss';
import styles from './Toast.module.scss';

const defaults: { [key in TToastTypes]: TToastDefaults } = {
	warning: { title: 'Warning ', icon: IconWarning },
	success: { title: 'Success', icon: IconSuccess },
	danger: { title: 'Danger', icon: IconDanger },
};

function Toast({
	id,
	type = 'success',
	title,
	message,
	duration = 6,
	...rest
}: IToastProps) {
	const IconElement = defaults[type].icon;
	const { removeToast } = useToasts();

	useEffect(() => {
		const dismissTimerId = setTimeout(() => {
			removeToast(id);
		}, duration * 1000);

		return () => {
			clearTimeout(dismissTimerId);
		};
	}, [duration, id, removeToast]);

	return (
		<div
			key={id}
			className={classnames([styles['Toast'], styles[type]])}
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
				onClick={() => removeToast(id)}
			/>
		</div>
	);
}

export default React.memo(Toast);
