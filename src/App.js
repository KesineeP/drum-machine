import React from 'react'
import DrumPad from './components/DrumPad';
import "./App.css";

// const KEYS = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
// const KEYCODES = [81, 87, 69, 65, 83, 68, 90, 88, 67];
const data = [
    {
        keyTrigger: "Q",
        keyCode: 81,
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        keyTrigger: "W",
        keyCode: 87,
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        keyTrigger: "E",
        keyCode: 69,
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        keyTrigger: "A",
        keyCode: 65,
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        keyTrigger: "S",
        keyCode: 83,
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        keyTrigger: "D",
        keyCode: 68,
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        keyTrigger: "Z",
        keyCode: 90,
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        keyTrigger: "X",
        keyCode: 88,
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        keyTrigger: "C",
        keyCode: 67,
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
];




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Drum Sounds'
        }
    }
    handleDisplay = display => this.setState({ display });

    render() {
        const keyPads = data.map((pad, i) => (
            <DrumPad
                id={pad.id}
                key={i}
                keyTrigger={pad.keyTrigger}
                keyCode={pad.keyCode}
                url={pad.url}
                handleDisplay={this.handleDisplay}

            />
        ))
        return (
            <div id="drum-machine">
                <div id="header">
                    <h1 className="header">Drum Machine</h1>
                </div>
                <div className="container">
                    <div id="display">{this.state.display}</div>
                    <div className="drum-pads">
                        {keyPads}
                    </div>
                </div>


            </div>
        )
    }
}

export default App;