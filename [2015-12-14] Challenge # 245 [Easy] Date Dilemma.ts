'use strict'

interface iDateParser {
	regExp:RegExp;
	parseFun:(date:Array<string>)=>string;
};

class DateOneParser implements iDateParser {
	regExp:RegExp = /([1-9]{1})+\/+([0-9]{2})+\/+([1-9]{1,2})/;

	parseFun (date) {
		let year = date[3];
		let month = date[1] > 10 ? date[1] : `0${date[1]}`;
		let day = date[2];

		return `20${year}-${month}-${day}`
	}
}

class DateTwoParser implements iDateParser {
	regExp = /^([0-9]{1})+-+([0-9]{2})+-+([0-9]{2})/;

	parseFun (date) {
		let year = date[3];
		let month = date[1] > 10 ? date[1] : `0${date[1]}`;
		let day = date[2];

		return `20${year}-${month}-${day}`
	}
}

class DateThreeParser implements iDateParser {
	regExp = /^([0-9]{1})+\s+([0-9]{2})+\s+([0-9]{4})/;

	parseFun (date) {
		let year = date[3];
		let month = date[1] > 10 ? date[1] : `0${date[1]}`;
		let day = date[2];

		return `${year}-${month}-${day}`
	}
}

class DateFourParser implements iDateParser {
	regExp = /^([0-9]{4})+\s+([0-9]{1})+\s+([0-9]{2})/;

	parseFun (date) {
		let year = date[1];
		let month = date[2] > 10 ? date[2] : `0${date[2]}`;
		let day = date[3];

		return `${year}-${month}-${day}`
	}
}

class DateFiveParser implements iDateParser {
	regExp = /^([0-9]{4})+-+([0-9]{2})+-+([0-9]{2})/;

	parseFun (date) {
		let year = date[1];
		let month = date[2];
		let day = date[3];

		return `${year}-${month}-${day}`
	}
}

class DateSixParser implements iDateParser {
	regExp = /^([0-9]{4})+\/+([0-9]{2})+\/+([0-9]{2})/;

	parseFun (date) {
		let year = date[1];
		let month = date[2];
		let day = date[3];

		return `${year}-${month}-${day}`
	}
}

function parseDates(dates){
	let newDates:string = "";
	let dateParserCollection:iDateParser[] = [];
	dateParserCollection.push(new DateOneParser());
	dateParserCollection.push(new DateTwoParser());
	dateParserCollection.push(new DateThreeParser());
	dateParserCollection.push(new DateFourParser());
	dateParserCollection.push(new DateFiveParser());
	dateParserCollection.push(new DateSixParser());

	dates = dates.split("\n");

	for (let i of dates) {
		for (let a of dateParserCollection) {
			let hasMatch = i.match(a.regExp);
			if (hasMatch !== null) {
				newDates += `${a.parseFun(hasMatch)}\n`;

			}
		}
	}

	return newDates;
}

let dates = `2/13/15
1-31-10
5 10 2015
2012 3 17
2001-01-01
2008/01/07`;

console.log(parseDates(dates));