import { Example } from 'examples/Example';
import { ToastsProvider } from './components/Toast/ToastsProvider';

export function App() {
	return (
		<ToastsProvider>
			<Example />
		</ToastsProvider>
	);
}
