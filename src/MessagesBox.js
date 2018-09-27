import React from 'react';
import MessageList from './MessageList';

export default class MessagesBox extends React.Component {

    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.textAreaValueChanged = this.textAreaValueChanged.bind(this);
        this.state = {messageList: [], keyCounter: 0, textAreaValue: "", username: "Test User", ws:new WebSocket("ws://52.1.214.93:8086/Chat")};
    }

    /*static getDerivedStateFromProps(props, state) {
      const ws = state.ws
      let data = {}
      console.log("test")
      state.ws.onmessage = function(event) {
          console.log("WebSocket message received:", event);
          data = event.data
      }

      this.addMessage(data)
    }*/

    addMessage(data) {
        console.log("test")
        let messageData = data
        let keyCounter = this.state.keyCounter+1;
        let messages = this.state.messageList;
          messages.push({
              user:messageData.Name,
              text:messageData.Content,
              key: keyCounter
          })

          this.setState({messageList: messages, keyCounter: keyCounter})
      }

    textAreaValueChanged(event) {
        this.setState({textAreaValue: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault()
        event.target.reset()
        this.setState({textAreaValue: ""})
        this.sendMessage()
    }

    sendMessage() {
      let ws = this.state.ws
      const message = this.state.textAreaValue;
      const data = {"Command":0,"Name":"gggs","Content":"sdfsd","Receiver":null,"Dominion":null,"Level":1,"Coven":null,"TimeStamp":1538071677676.0,"Avatar":3,"Degree":0,"Latitude":0.0,"Longitude":0.0,"CommandRaw":"WorldMessage"}
      this.state.ws.send(data);
      console.log(data)


      /*if(wss.readyState === 1) {
        console.log(wss);
        wss.send(json object)
        console.log(json object)
      }*/
    }



    render() {

        return (

                <div>

                  <MessageList keyValue={this.state.keyValue} messages={this.state.messageList}/>
                  <form onSubmit={this.onSubmit} className = "messageForm">
                      <textarea rows="8" cols="50" className="textArea" placeholder={this.state.textValue} onChange={this.textAreaValueChanged} ></textarea>
                      <input type="Submit" value="Send" className="submitButton" readOnly/>
                  </form>

                </div>

        )
    }
}
