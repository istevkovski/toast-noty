import { useToasts } from 'hooks/useToasts';
import { v4 as uuid } from 'uuid';

export const Example = () => {
	const { createToast } = useToasts();

	return (
		<button
			onClick={() =>
				createToast({
					type: "warning",
					title: `Title: ${uuid()}`,
					message:
						'Sit esse duis incididunt nostrud tempor est pariatur enim. Quis cillum est cupidatat qui do. Exercitation velit ea velit irure dolor deserunt eiusmod ut reprehenderit. Cillum sunt duis ullamco aliquip elit cillum pariatur.',
					duration: 3,
				})
			}
		>
			Toast Noty!
		</button>
	);
};
