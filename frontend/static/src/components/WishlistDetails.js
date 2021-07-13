import React from 'react'
import Moment from 'react-moment'


class WishlistDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      is_owned: this.props.game.is_owned
    }
  }
  render() {
    const game = this.props.game;
    return(
      <>
      <li>
        <h2>{game.name}</h2>
        <img src={game.background_image} alt="game screenshot"/>
        <p>Date Added To Wishlist:</p><Moment className="release-date" format="MM/DD/YYYY">{game.date_added}</Moment>
        <br/>
        <button type="button" onClick={() => this.props.updateOwned(game.id)}>Add to Collection</button>
        <button type="button" onClick={() => this.props.removeGame(game.id)}>Remove</button>
      </li>
      </>
    )
  }
}

export default WishlistDetails
