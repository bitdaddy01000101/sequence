import React from 'react';
import CardUtils from './utilities/CardUtils';

export default class BoardCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isMouseHovered: false};
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleClick(e) {
		this.props.onBoardCardClick({face: this.props.face, suit: this.props.suit});
	}

	handleMouseOver(e) {
		this.setState({isMouseHovered: true});
	}

	handleMouseLeave(e) {
		this.setState({isMouseHovered: false});
	}

	render() {
		return (
			<input
				type="image"
				src={CardUtils.getCardImage(this.props.face, this.props.suit)}
				className={`sequence-board-card${this.state.isMouseHovered ? " sequence-board-card-hovered" : ""}`}
				alt={`${this.props.face} OF ${this.props.suit}`}
				value={{face: this.props.face, suit: this.props.suit}}
				onClick={this.handleClick}
				onMouseOver={this.handleMouseOver}
				onMouseLeave={this.handleMouseLeave}
			/>
		);
	}
}