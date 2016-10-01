//https://www.reddit.com/r/dailyprogrammer/comments/3twuwf/20151123_challenge_242_easy_funny_plant/?st=itrt36fi&sh=88d62e9b

class Plant{
	public amountOfWeeksPlanted:number = 0;
}


function weeksNeededToFeed(amountPeople:number, amountFruits:number): number{
	let weeksNeeded: number = 1;
	let amountOfPlants:number = 0;
	let plants:Plant[] = [];

	for (let i = 0; i <amountFruits; i++) plants.push(new Plant());


	while(amountFruits <= amountPeople){

		plants.forEach((item)=> item.amountOfWeeksPlanted++);

		amountFruits = plants.map((item)=>{
			return item.amountOfWeeksPlanted;
		})
		.reduce((a,b)=> {return a+b},0);


		for(let b = 0; b < amountFruits; b++) plants.push(new Plant());

		weeksNeeded++;
	}

	return weeksNeeded;

}

console.log(weeksNeededToFeed(15,1)); //5
console.log(weeksNeededToFeed(200, 15)); //5
console.log(weeksNeededToFeed(50000, 1)); //14
console.log(weeksNeededToFeed(150000, 250)); //9