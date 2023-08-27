import fs from 'fs';
import path from 'path';
import { format } from 'prettier';
import { optimize } from 'svgo';

const ICONS_DIR = './src/components/icons';
const SVG_DIR = './src/components/icons/svg';

const PRETTIER_CONFIG = {
	parser: 'typescript',
	singleQuote: true,
	trailingComma: 'all',
};

async function generateIcons() {
	const filenames = fs
		.readdirSync(SVG_DIR)
		.filter((filename) => filename.match(/\.svg$/i));

	const indexExports = ['Icon'];
	const componentNames = [];

	for (const filename of filenames) {
		// Get svg files only
		const iconName = filename.replace(/\.svg$/i, '');
		const iconNamePascalCase = toPascalCase(iconName);
		const componentName = `Icon${iconNamePascalCase}`;
		const componentFilename = `${componentName}.tsx`;

		const content = fs
			.readFileSync(path.join(SVG_DIR, filename))
			?.toString();

		const svg = optimizeSvg(sanitizeSvg(content));

		const component = await generateIconComponent({ componentName, svg });

		fs.writeFileSync(path.join(ICONS_DIR, componentFilename), component);

		indexExports.push(componentName);
		componentNames.push(componentName);
	}

	fs.writeFileSync(
		path.join(ICONS_DIR, 'index.ts'),
		await generateIconIndex(indexExports),
	);
}

function toPascalCase(string) {
	return string.replace(/^[a-z]|[^a-zA-Z0-9]+(.)/g, (match) => {
		return match?.toUpperCase().slice(-1);
	});
}

function generateIconComponent({ componentName, svg }) {
	return format(
		`import { Icon } from "./Icon";
		 import { IconProps } from 'types/icons';

		export function ${componentName}({ size, fill, className, ...rest }: IconProps) {
			return <Icon size={size} className={className} {...rest}>${svg}</Icon>;
		}`,
		PRETTIER_CONFIG,
	);
}

function generateIconIndex(indexExports) {
	return format(
		indexExports
			.sort()
			.map(
				(componentName) =>
					`export { ${componentName} } from './${componentName}';`,
			)
			.join('\n'),
		PRETTIER_CONFIG,
	);
}

function sanitizeSvg(svg) {
	return svg.replace(/(fill|stroke|opacity)="[^"]*"/g, '');
}

// Ensuring unique ids in all SVGs
let globalIdPrefix = 1;

function optimizeSvg(svg) {
	++globalIdPrefix;

	const { data } = optimize(svg, {
		plugins: [
			'removeDoctype',
			'removeXMLProcInst',
			'removeComments',
			'removeMetadata',
			'removeEditorsNSData',
			'cleanupAttrs',
			'mergeStyles',
			'inlineStyles',
			'minifyStyles',
			{
				name: 'cleanupIds',
				params: {
					prefix: `i${globalIdPrefix}`,
				},
			},
			'removeUselessDefs',
			'cleanupNumericValues',
			'convertColors',
			'removeUnknownsAndDefaults',
			'removeNonInheritableGroupAttrs',
			'removeUselessStrokeAndFill',
			//'removeViewBox', // https://github.com/svg/svgo/issues/1128
			'cleanupEnableBackground',
			'removeHiddenElems',
			'removeEmptyText',
			'convertShapeToPath',
			'convertEllipseToCircle',
			'moveElemsAttrsToGroup',
			'moveGroupAttrsToElems',
			'collapseGroups',
			'convertPathData',
			'convertTransform',
			'removeEmptyAttrs',
			'removeEmptyContainers',
			'mergePaths',
			'removeUnusedNS',
			'sortDefsChildren',
			'removeTitle',
			'removeDesc',
			{
				name: 'addAttributesToSVGElement',
				params: {
					attribute: 'fill={fill}',
				},
			},
		],
	});

	return data;
}

generateIcons().catch((err) => {
	console.error(err);
	process.exit(1);
});
