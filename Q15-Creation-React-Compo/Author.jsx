import React, {Component} from 'react'; 

class Author extends Component {
  getAuthor() {
    alert(this.props.name)
  }
  render() {
    return(
      <div>
        <button onClick={this.getAuthor.bind(this)}>Voir l'auteur</button>
      </div>
    )
  }
}

export default Author;