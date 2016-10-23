// https://www.reddit.com/r/dailyprogrammer/comments/4tetif/20160718_challenge_276_easy_recktangles/
function recktangle(word:string ,h:number ,w:number){
	let length = word.length;
	let recktangle = ``;
	let spaces = ``;
	

	for (let i = 0; i < length/2; i++){
		spaces += ` `;
	}

	for (let a = 0; a < w; a++){
		recktangle = recktangle.replace(word[word.length-1],``);
		for (let i = 0; i < length; i++){
			recktangle += word[i];
		}
	}

	let firtsRow = recktangle;


	for (let i = 0; i < h; i++){
		let lastLine = ``;

		let row = ``;
		for (let i = 1; i < length; i++){
			row += `\n${word[i]}${spaces}${word[i]}`;
			lastLine = `\n${word[i]}${spaces}${word[i]}`;

			for (let a = 1; a < w; a++){
				row += `${spaces}${word[i]}`;
				lastLine += `${spaces}${word[i]}`;
			}
		}

		recktangle += row;

		recktangle = recktangle.replace(lastLine,`\n`+firtsRow);
		//recktangle = recktangle.replace(/\\w+\\s\\s+./,`xxx`);
	}

	

	return recktangle;
}

console.log(recktangle(`REKT`,8,8));