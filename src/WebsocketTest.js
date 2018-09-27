import React from 'react';
import Websocket from 'react-websocket';

class WebsocketTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "some text"
    };
    this.handleData = this.handleData.bind(this)
  }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({message: result.Content});
  }

  render() {
    return (
      <div>
        Message: <strong>{this.state.message}</strong>

        <Websocket url='ws://104.196.14.209:80/Chat'
            onMessage={this.handleData}/>
      </div>
    );
  }
}

export default WebsocketTest;
