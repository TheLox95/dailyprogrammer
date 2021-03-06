function calculate(data:string){
	let dataArray = data.split(`\n`);
	let [goldilockWeight,goldilockTemperatureTolerance] = dataArray[0].split(" ").map(toInt);
	let validSeats = [];

	for(let i = 1; i < dataArray.length; i++){
		let [seatCapacity, temperatureTolerance] = dataArray[i].split(" ").map(toInt);
		if(seatCapacity > goldilockWeight && goldilockTemperatureTolerance > temperatureTolerance){
			validSeats.push(i);
		}
	}

	return validSeats.join(" ");
}

function toInt(strNum){
	return parseInt(strNum);
}

console.log(calculate(`100 80
30 50
130 75
90 60
150 85
120 70
200 200
110 100`));

console.log(calculate(`100 120
297 90
66 110
257 113
276 191
280 129
219 163
254 193
86 153
206 147
71 137
104 40
238 127
52 146
129 197
144 59
157 124
210 59
11 54
268 119
261 121
12 189
186 108
174 21
77 18
54 90
174 52
16 129
59 181
290 123
248 132`));