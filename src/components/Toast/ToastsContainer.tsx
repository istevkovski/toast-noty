import { IToastProps } from 'types/toasts';
import Toast from './Toast';
import styles from './ToastsContainer.module.scss';

type TToastContainerProps = {
	toasts: IToastProps[];
};

const ToastsContainer = ({ toasts }: TToastContainerProps) => {
	return (
		<ul className={styles.ToastsContainer}>
			{toasts.map((toast) => (
				<Toast key={toast.id} {...toast} />
			))}
		</ul>
	);
};

export default ToastsContainer;
