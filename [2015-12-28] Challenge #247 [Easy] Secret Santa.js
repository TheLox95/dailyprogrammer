'use strict'

const input = `Sean
Winnie
Brian Amy
Samir
Joe Bethany
Bruno Anna Matthew Lucas
Gabriel Martha Philip
Andre
Danielle
Leo Cinthia
Paula
Mary Jane
Anderson
Priscilla
Regis Julianna Arthur
Mark Marina
Alex Andrea`;

function generateSecretSantas(people){
	const relationIcon = ` --> `;
	let relations = [];

	people = people.split(`\n`);

	let family = people.filter((item,index,arr) =>{
		if (item.includes(` `)) {
			return item;
		}
	}).map( item => {return item.split(" ")} );

	people = people.filter((item) =>{
		if (item.includes(' ') === false) {
			return item;
		}
	});
	family.forEach(item => people = people.concat(item) );


	while(people.length !== 0){
		let relation = [];
		for (let i = 0; i <= 1; i++) {
			let randomIndex = Math.floor((Math.random() * (people.length - 0) ) + 0);
			relation.push(people[randomIndex]);
			people.splice(randomIndex,1);
			// if are family
			for (let i = 0; i < family.length; i++) {
				if (family[i].indexOf(relation[0]) != -1 && family[i].indexOf(relation[1]) != -1) {
					people.splice(randomIndex,0,relation[0],relation[1]);
					relation.fill(0);
				}
			}
		}

		if (relation.indexOf(0) == -1) {
			relations.push(relation.join(relationIcon));
		}
	}

	return relations.join(`\n`);

}

console.log(generateSecretSantas(input));