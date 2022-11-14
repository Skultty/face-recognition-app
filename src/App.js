import {Component} from 'react';
import ImageLinkForm from './components/ImageLinkForm';
import Nav from './components/Nav';
import ParticleBackground from './components/ParticleBackground';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  getRequestOptions = (url) => {
   const raw = JSON.stringify({
    "user_app_id": {
      "user_id": "clarifai",
      "app_id": "main"
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": url
                }
            }
        }
    ]
  })

  const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key 5b697d940a5746d3ba96f1359114d187',
    },
    body: raw
  }

  return requestOptions;
}

  onInputChange = (event) => {
    this.setState({imageUrl: event.target.value});
    console.log(this.state.imageUrl);
  }

  onButtonSubmit = () => {
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, this.getRequestOptions(this.state.imageUrl))
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
  }

  render() {
    return (
      <div>
        <Nav/>
        <ImageLinkForm  onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/*
    <FaceRecognition />*/}

        <ParticleBackground id="tsparticles"/>
      </div>
    );
  }
}

export default App;
