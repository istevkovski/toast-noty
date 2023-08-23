declare module "*.module.css" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module "*.module.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module "*.css" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module "*.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module "*.mdx" {
	const component: unknown;
	export default component;
}
