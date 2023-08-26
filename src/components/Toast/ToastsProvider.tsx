import React, { createContext, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { IToastProps } from 'types/Toasts';
import { v4 as uuid } from 'uuid';
import ToastsContainer from './ToastsContainer';

export interface IToastsContextProps {
	createToast: ({ ...props }: Omit<IToastProps, 'id'>) => void;
	removeToast: (id: string) => void;
}

export const ToastsContext = createContext<IToastsContextProps | undefined>(
	undefined,
);

export const ToastsProvider = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	const [toasts, setToasts] = useState<IToastProps[]>([]);

	const createToast = useCallback((toast: Omit<IToastProps, 'id'>) => {
		const uniqId = uuid();
		setToasts((prevToasts) => [...prevToasts, { ...toast, id: uniqId }]);
	}, []);

	const removeToast = useCallback((id: string) => {
		setToasts((prevToasts) =>
			prevToasts.filter((toast) => toast.id !== id),
		);
	}, []);

	// We create a memoized context value to control and prevent every Toast from
	// re-rendering every time we add a new Toast or when this component re-renders
	const store = React.useMemo(
		() => ({ createToast, removeToast }),
		[createToast, removeToast],
	);

	return (
		<ToastsContext.Provider value={store}>
			{ReactDOM.createPortal(
				<ToastsContainer toasts={toasts} />,
				document.body,
			)}
			{children}
		</ToastsContext.Provider>
	);
};
