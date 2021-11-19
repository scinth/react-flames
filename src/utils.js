const countPair = (baseName, pairName) => {
	let name1 = baseName.replaceAll(' ', '').toLowerCase().split('');
	let name2 = pairName.replaceAll(' ', '').toLowerCase().split('');
	let result = {
		name: [],
		pairs: 0,
	};
	name1.forEach(char => {
		let index = 0;
		while (index < name2.length) {
			if (name2[index] == char) {
				result.pairs++;
				result.name.push({
					char: char,
					isHit: true,
				});
				break;
			}
			index++;
		}
		if (index == name2.length)
			result.name.push({
				char: char,
				isHit: false,
			});
	});
	return result;
};

export const flames = (name1, name2) => {
	let result1 = countPair(name1, name2);
	let result2 = countPair(name2, name1);

	let total = result1.pairs + result2.pairs;
	let _total;
	for (_total = total; _total > 6; _total -= 6);
	let message;
	switch (_total) {
		case 1:
			message = 'Friends';
			break;
		case 2:
			message = 'Lovers!';
			break;
		case 3:
			message = 'Admirers';
			break;
		case 4:
			message = 'Married';
			break;
		case 5:
			message = 'Enemies';
			break;
		case 6:
			message = 'Sweet';
			break;
		default:
			message = 'nothing';
	}
	let result = {
		name1Pairs: result1,
		name2Pairs: result2,
		total: total,
		message: message,
	};
	return result;
};
