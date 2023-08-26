import { ToastsContext } from 'components/Toast/ToastsProvider';
import { useContext } from 'react';

export const useToasts = () => {
	const context = useContext(ToastsContext);
	if (context === undefined) {
		throw new Error('useToasts must be used within a ToastsProvider');
	}
	return context;
};
