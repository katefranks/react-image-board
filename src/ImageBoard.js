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
    this.props.addImage({
      imageUrl: this.state.imageUrl,
      imageCaption: this.state.imageCaption,
      id: 3
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
//   return(){
//   const images = props.addImage.map(image => (
//     <li key={image.id}>
//       <img src="{images.imageUrl}" alt=""/>
//       <p>{images.imageCaption}</p>
//     </li>
//   ));
// }
}


class ImageBoard extends Component{

  // first where are the images saved? STATE
  // constructor
  // setup the state object with images property (can be an empty array)
  // if you want to add static images to start - do that in the ComponentDidMount lifecycle method
  // use this.setState to update state properties
  // write your addItem method that takes an image and adds it to the images array saved to state
  constructor(props) {
      super(props);
      this.state = {
        images: []
      }
      this.addImage = this.addImage.bind(this);
      }
    componentDidMount() {
    const images = [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        imageCaption: 'Two Cute Puppies',

      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80",
        imageCaption: 'Puppy with Big Ears',
      }
    ];

    this.setState({ images });
    }

    addImage(image){
      const images = [ ...this.state.images ];
      images.push(image);
      this.setState( { images });
    }

    render() {
      return (
        <div>
          <ImageForm addImage={this.addImage} />
          <ImageList images={this.state.images} />
        </div>
      )
    }
    }


export default ImageBoard;
