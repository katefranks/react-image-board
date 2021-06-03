import { Component } from 'react';
import './ImageBoard.css';
import ImageList from './ImageList';
import ImageForm from './ImageForm';




// //   return(){
// //   const images = props.addImage.map(image => (
// //     <li key={image.id}>
// //       <img src="{images.imageUrl}" alt=""/>
// //       <p>{images.imageCaption}</p>
// //     </li>
// //   ));
// // }
//


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
        images: [],
        counter: 4,
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
      },
      {
        id:3,
        imageUrl: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=982&q=80",
        imageCaption: 'Another Cute Puppy!'
      }
    ];

    this.setState({ images });
    }

    addImage(image){
      image.id = this.state.counter;
      const images = [ ...this.state.images ];
      images.push(image);
      this.setState((state) => ({ images, counter: state.counter + 1 }));
    }

    render() {
      return (
        <div className= "image-container">
          <h1>Cute Puppy Image Board</h1>
          <ImageForm addImage={this.addImage} />
          <ImageList images={this.state.images} />
        </div>
      );
    }
    }


export default ImageBoard;
