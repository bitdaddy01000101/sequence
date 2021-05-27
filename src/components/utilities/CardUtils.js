import cardBack from '../../images/card-back.png';
import bonusCard from '../../images/bonus-card.png';

import aceOfHearts from '../../images/ace-of-hearts.png';
import twoOfHearts from '../../images/two-of-hearts.png';
import threeOfHearts from '../../images/three-of-hearts.png';
import fourOfHearts from '../../images/four-of-hearts.png';
import fiveOfHearts from '../../images/five-of-hearts.png';
import sixOfHearts from '../../images/six-of-hearts.png';
import sevenOfHearts from '../../images/seven-of-hearts.png';
import eightOfHearts from '../../images/eight-of-hearts.png';
import nineOfHearts from '../../images/nine-of-hearts.png';
import tenOfHearts from '../../images/ten-of-hearts.png';
import jackOfHearts from '../../images/jack-of-hearts.png';

import aceOfClubs from '../../images/ace-of-clubs.png';
import twoOfClubs from '../../images/two-of-clubs.png';
import threeOfClubs from '../../images/three-of-clubs.png';
import fourOfClubs from '../../images/four-of-clubs.png';
import fiveOfClubs from '../../images/five-of-clubs.png';
import sixOfClubs from '../../images/six-of-clubs.png';
import sevenOfClubs from '../../images/seven-of-clubs.png';
import eightOfClubs from '../../images/eight-of-clubs.png';
import nineOfClubs from '../../images/nine-of-clubs.png';
import tenOfClubs from '../../images/ten-of-clubs.png';

import aceOfDiamonds from '../../images/ace-of-diamonds.png';
import twoOfDiamonds from '../../images/two-of-diamonds.png';
import threeOfDiamonds from '../../images/three-of-diamonds.png';
import fourOfDiamonds from '../../images/four-of-diamonds.png';
import fiveOfDiamonds from '../../images/five-of-diamonds.png';
import sixOfDiamonds from '../../images/six-of-diamonds.png';
import sevenOfDiamonds from '../../images/seven-of-diamonds.png';
import eightOfDiamonds from '../../images/eight-of-diamonds.png';
import nineOfDiamonds from '../../images/nine-of-diamonds.png';
import tenOfDiamonds from '../../images/ten-of-diamonds.png';

import aceOfSpades from '../../images/ace-of-spades.png';
import twoOfSpades from '../../images/two-of-spades.png';
import threeOfSpades from '../../images/three-of-spades.png';
import fourOfSpades from '../../images/four-of-spades.png';
import fiveOfSpades from '../../images/five-of-spades.png';
import sixOfSpades from '../../images/six-of-spades.png';
import sevenOfSpades from '../../images/seven-of-spades.png';
import eightOfSpades from '../../images/eight-of-spades.png';
import nineOfSpades from '../../images/nine-of-spades.png';
import tenOfSpades from '../../images/ten-of-spades.png';

const cardImageMap = {
		CLUB: {
			ACE: aceOfClubs,
			TWO: twoOfClubs,
			THREE: threeOfClubs,
			FOUR: fourOfClubs,
			FIVE: fiveOfClubs,
			SIX: sixOfClubs,
			SEVEN: sevenOfClubs,
			EIGHT: eightOfClubs,
			NINE: nineOfClubs,
			TEN: tenOfClubs,
			JACK: undefined,
			QUEEN: undefined,
			KING: undefined
		},
		DIAMOND: {
			ACE: aceOfDiamonds,
			TWO: twoOfDiamonds,
			THREE: threeOfDiamonds,
			FOUR: fourOfDiamonds,
			FIVE: fiveOfDiamonds,
			SIX: sixOfDiamonds,
			SEVEN: sevenOfDiamonds,
			EIGHT: eightOfDiamonds,
			NINE: nineOfDiamonds,
			TEN: tenOfDiamonds,
			JACK: undefined,
			QUEEN: undefined,
			KING: undefined
		},
		HEART: {
			ACE: aceOfHearts,
			TWO: twoOfHearts,
			THREE: threeOfHearts,
			FOUR: fourOfHearts,
			FIVE: fiveOfHearts,
			SIX: sixOfHearts,
			SEVEN: sevenOfHearts,
			EIGHT: eightOfHearts,
			NINE: nineOfHearts,
			TEN: tenOfHearts,
			JACK: jackOfHearts,
			QUEEN: undefined,
			KING: undefined
		},
		SPADE: {
			ACE: aceOfSpades,
			TWO: twoOfSpades,
			THREE: threeOfSpades,
			FOUR: fourOfSpades,
			FIVE: fiveOfSpades,
			SIX: sixOfSpades,
			SEVEN: sevenOfSpades,
			EIGHT: eightOfSpades,
			NINE: nineOfSpades,
			TEN: tenOfSpades,
			JACK: undefined,
			QUEEN: undefined,
			KING: undefined
		},
		BONUS: {
			BONUS: bonusCard
		}
	};

export default class CardUtils {

	static getCardImage(face, suit) {
		return cardImageMap[suit][face] || cardBack;
	}
}