import React from 'react';
import BoardCard from './BoardCard';
import boardLayout from './config/BoardLayout';
import CardUtils from './utilities/CardUtils';

// TODO: delete this function & its references after testing...
const testRenderCard = (face, suit) => {
	return (
		<input
				type="image"
				src={CardUtils.getCardImage(face, suit)}
				className="sequence-hand-card"
				alt={`${face} OF ${suit}`}
		/>
	);
};

export default class SequenceBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedBoardCard: undefined};
		this.handleBoardCardClick = this.handleBoardCardClick.bind(this);
	}

	handleBoardCardClick(cardData) {
		this.setState({selectedBoardCard: cardData});
	}

	render() {
		return (
			<div>
			  <div className="sequence-main sequence-board-container">
				  {
					  boardLayout.rows.map((row, rowIndex) => {
						  return (
							  <div className="sequence-board-row" key={`board-row-${rowIndex}`}>
								  {
									  row.map((card, cardIndex) => {
									  	return (
										  	<div className="sequence-card-container" key={`card-container-${rowIndex}-${cardIndex}`}>
										      <BoardCard
										        face={card.face}
										        suit={card.suit}
										        key={`card-${rowIndex}-${cardIndex}`}
										        onBoardCardClick={this.handleBoardCardClick}
										      />
										    </div>
										  );
								    })
							    }
							  </div>
						  );
					  })
				  }
				</div>
				<div className="sequence-main temp-card-display">
					<h2>Current Selection: {this.state.selectedBoardCard ? `${this.state.selectedBoardCard.face} OF ${this.state.selectedBoardCard.suit}`: "N/A"}</h2>
					{this.state.selectedBoardCard && testRenderCard(this.state.selectedBoardCard.face, this.state.selectedBoardCard.suit)}
				</div>
			</div>
		);
	}
}
