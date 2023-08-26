import { useToasts } from 'hooks/useToasts';
import { v4 as uuid } from 'uuid';

export const Example = () => {
	const { createToast } = useToasts();

	return (
		<button
			onClick={() =>
				createToast({
					title: `Title: ${uuid()}`,
					message: 'Message: Potatoes',
					duration: 300,
				})
			}
		>
			Toasty
		</button>
	);
};
