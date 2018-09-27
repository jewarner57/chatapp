import React from 'react';

export default class MessageList extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {

        return (

                <div>

                  {this.props.messages.map((message , index) => (

                    <div key={message.key}>{message.user}: {message.text}</div>

                  ))}

                </div>

        )
    }
}
