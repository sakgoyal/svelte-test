import repos from '$lib/repos.yaml?raw';
import YAML from "yaml";

export const prerender = false;
export const ssr = true;

export async function load() {
	// const ymlText = YAML.parse(repos);
	// let go = true;
	// for (const [itemNum, item] of Object.entries(ymlText)) {
	// 	if (!go) break;
	// 	// console.log(`${Object.values(item)[1].split('github.com/')[1]}/main/hero.png`);
	// 	const img = await fetch(`https://raw.githubusercontent.com/${Object.values(item)[1].split('github.com/')[1]}/main/hero.png`).then(res => res.blob())
	// 	const buf = await img.arrayBuffer();
	// 	const b64 = Buffer.from(buf).toString('base64') 

	// 	// // set the key of the image to the blob url
	// 	ymlText[itemNum].img = b64;
	// 	go = false;
	// }
	// return { ymlText: ymlText };
}