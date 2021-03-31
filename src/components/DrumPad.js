import React from 'react'

class DrumPad extends React.Component {


    componentDidMount() {

        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {

        if (event.keyCode === this.props.keyCode) {
            document.getElementById(this.props.keyTrigger).parentElement.classList.add("active");
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.handleDisplay(this.props.id);
        }
    }
    handleKeyUp = () => {
        document.getElementById(this.props.keyTrigger).parentElement.classList.remove("active");
    }
    handleOnClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
    }
    render() {
        return (
            <div
                className="drum-pad"
                id={this.props.id}
                onClick={this.handleOnClick}

            >
                <h3>{this.props.keyTrigger}</h3>
                <audio
                    ref={ref => this.audio = ref}
                    src={this.props.url}
                    id={this.props.keyTrigger}
                    className="clip">
                </audio>
            </div>
        )
    }

}

export default DrumPad;