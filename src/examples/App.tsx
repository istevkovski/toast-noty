import { ToastsProvider } from 'components/Toast/ToastsProvider';
import { Example } from './Example';

export function App() {
	return (
		<ToastsProvider>
			<Example />
		</ToastsProvider>
	);
}
