import classnames from "classnames";
import "../styles/fonts.scss";
import "../styles/reset.scss";
import styles from "./Toast.module.scss";

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
		<div className={classnames([styles["Toast"], className])} {...rest}>
			<div className="icon"></div>
			<div className="content">
				<h2 className="title">{title}</h2>
				<p className="message">{message}</p>
			</div>
		</div>
	);
}

export default Toast;
