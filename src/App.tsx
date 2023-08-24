import Toast from 'components/Toast/Toast';
import { ToastProvider } from './components/Toast/ToastProvider';

export function App() {
	return (
		<ToastProvider>
			<Toast
				type="warning"
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
	eiusmod tempor incididunt ut labore et dolore magna aliqua. 
	Ut enim ad minim veniam, quis nostrud exercitation ullamco 
	laboris nisi ut aliquip ex ea commodo consequat."
			/>
		</ToastProvider>
	);
}
