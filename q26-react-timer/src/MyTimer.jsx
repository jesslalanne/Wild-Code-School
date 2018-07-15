import React, { Component } from 'react';

class MyTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        console.log('Un UPDATE a bien eu lieu');
    }

    render() {
        return (
            <div>
                <h2>Voici l'heure : {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default MyTimer;