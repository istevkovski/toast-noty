export interface IconProps
	extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
	fill?: string;
	size?: 'small' | 'default';
}
