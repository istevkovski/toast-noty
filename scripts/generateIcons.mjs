import fs from "fs";
import path from "path";
import svgr from "@svgr/core";

const ICONS_DIR = "./src/components/icons";
const SVG_DIR = "./src/components/icons/svg";

const svgFolder = SVG_DIR;
const outputFolder = ICONS_DIR;

if (!fs.existsSync(outputFolder)) {
	fs.mkdirSync(outputFolder);
}

const svgFiles = fs.readdirSync(svgFolder);

svgFiles.forEach(async (file) => {
	const svgFilePath = path.join(svgFolder, file);
	const componentName = path.basename(file, ".svg");
	const outputFilePath = path.join(outputFolder, `${componentName}.js`);

	const svgContent = fs.readFileSync(svgFilePath, "utf-8");

	try {
		const componentCode = await svgr(
			svgContent,
			{ icon: true },
			{ componentName }
		);
		fs.writeFileSync(outputFilePath, componentCode);
		console.log(`${componentName}.js created`);
	} catch (error) {
		console.error(`Error converting ${componentName}.svg: ${error}`);
	}
});
