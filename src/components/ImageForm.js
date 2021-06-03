import { Component } from 'react';
class ImageForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      imageCaption: '',
  }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addImage({
      imageUrl: this.state.imageUrl,
      imageCaption: this.state.imageCaption,
    });

    this.setState({ imageUrl: '', imageCaption: '' });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="imageUrl" placeholder="Enter an Image URL" value={this.state.imageUrl} onChange={this.handleInput}  />
        <br/>
        <input type="text" name="imageCaption" placeholder="Enter an Image Caption" value={this.state.imageCaption} onChange={this.handleInput}  />
        <br/>
        <button type="submit">Add Image</button>
      </form>
    )
  }
}

export default ImageForm;
