import { Component } from 'react';
import './ImageBoard.css';

class ImageForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      imageCaption: '',
  }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addItem({
      imageUrl: this.state.imageUrl,
      imageCaption: this.state.imageCaption,
    });

    this.setState({ imageUrl: '', imageCaption: '' });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} name="imageUrl" type="text"/>
        <input onChange={this.handleInput} name="imageCaption" type="text"/>
        <button type="submit">Add Image</button>
      </form>
    )
  }
}

class ImageList extends Component{
  render() {
    return(
      <ul>
      here is the list
      </ul>
    )
  }
};

class ImageBoard extends Component{

  // first where are the images saved? STATE
  // constructor
  // setup the state object with images property (can be an empty array)
  // if you want to add static images to start - do that in the ComponentDidMount lifecycle method
  // use this.setState to update state properties
  // write your addItem method that takes an image and adds it to the images array saved to state

  render() {
    return(
      <div>
        <ImageForm />
        <ImageList />
      </div>
    )
  }
}


export default ImageBoard;
