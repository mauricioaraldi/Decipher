$(function() {
	$('#decode').on('click', function() {
		var textToRank = $('#rankText').val(),
			cypher = $('#cypher').val(),
			ranking = countCharsFromAlphabet(textToRank, App.Alphabet);
		
		$('#message').val(decode(ranking, cypher));
	});
});

function countCharsFromAlphabet(text, alphabet) {
	var chars = {};
	
	for (var i=0; i < text.length; i++) {
		var character = text[i];
		
		if (alphabet.indexOf(character) >= 0) {
			chars[character] == undefined ? chars[character] = 1 : chars[character]++;
		}
	}
	
	return chars;
}

function countCharsFromText(text) {
	var chars = {};
	
	for (var i=0; i < text.length; i++) {
		var character = text[i];
		
		chars[character] == undefined ? chars[character] = 1 : chars[character]++;
	}
	
	return chars;
}

function getCharOrder(charsRanking) {
	var charOrder = Object.keys(charsRanking);
	
	charOrder.sort(function(a, b) {
		a = charsRanking[a];
		b = charsRanking[b];
		return a>b ? -1 : a<b ? 1 : 0;
	});
	
	return charOrder;
}

function decode(ranking, message) {
	var messageRanking = countCharsFromText(message),
		textCharOrder = getCharOrder(ranking),
		messageCharOrder = getCharOrder(messageRanking),
		newMessage = message;
		
	for (var i=0; i <= messageCharOrder.length-1; i++) {
		var messageChar = messageCharOrder[i],
			textChar = textCharOrder[i];
			
		if (!textChar) {
			textChar = textCharOrder[textCharOrder.length-1];
		}
		
		while (message.indexOf(messageChar) >= 0) {
			var index = message.indexOf(messageChar);
			
			message = message.slice(0, index) + ' ' + message.slice(index+1);
			newMessage = newMessage.slice(0, index) + textChar + newMessage.slice(index+1);
		}
	}
	
	return newMessage;
}

String.prototype.replaceAll = function(oldChar, newChar) {
	var newStr = this.toString();
	
	while (newStr.indexOf(oldChar) >= 0) {
		newStr = newStr.replace(oldChar, newChar);
	}
	
	return newStr;
};

//For purpose of tests
function encoder(text) {
	text=text.replaceAll('a', '!');
	text=text.replaceAll('b', 'a');
	text=text.replaceAll('c', '(');
	text=text.replaceAll('d', 'c');
	text=text.replaceAll('e', ')');
	text=text.replaceAll('f', 'e');
	text=text.replaceAll('g', '+');
	text=text.replaceAll('h', ']');
	text=text.replaceAll('i', '#');
	text=text.replaceAll('j', 'i');
	text=text.replaceAll('k', 'j');
	text=text.replaceAll('l', 'k');
	text=text.replaceAll('m', '@');
	text=text.replaceAll('n', 'm');
	text=text.replaceAll('o', 'n');
	text=text.replaceAll('p', '[');
	text=text.replaceAll('q', ',');
	text=text.replaceAll('r', '&');
	text=text.replaceAll('s', 'r');
	text=text.replaceAll('t', 's');
	text=text.replaceAll('u', 't');
	text=text.replaceAll('v', '*');
	text=text.replaceAll('w', '¬');
	text=text.replaceAll('x', 'w');
	text=text.replaceAll('y', '-');
	text=text.replaceAll('z', 'y');
	
	return text;
}

function countOcurrences(text, ocurrence, beforeAndAfter) {
	var returnValues = [];
	
	while (text.indexOf(ocurrence) >= 0) {
		var index = text.indexOf(ocurrence);

		if (beforeAndAfter) {
			returnValues.push(text.substr(index-2 < 0 ? 0 : index-2, ocurrence.length + (index-2 < 0 ? 2 : 4)));
		} else {
			returnValues.push(text.substr(index, ocurrence.length));
		}
		
		text = text.substr(index+ocurrence.length);
	}
	
	return returnValues;
}