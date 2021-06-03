import { Component } from 'react';
class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      imageCaption: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveImage = this.saveImage.bind(this);
  }
  saveImage() {
    this.setState({ imageUrl: '', imageCaption: ''});
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    const images = this.props.images.map((image) => (
      <li key={image.id}>
      <img src={image.imageUrl} alt=""/>
      <p>{image.imageCaption}</p>
      </li>
    ));

      return(
        <ul>{ images }</ul>
      )
    }
  }

export default ImageList;
