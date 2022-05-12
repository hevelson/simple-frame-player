import React, { Component } from "react";

interface IProps {
  frames: string[];
  fps: number;
}

interface IState {
  currentImage: string;
  timeCounter: number;
  totalTime: number;
  playFrames: boolean;
}

class FramePlayer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { frames, fps } = props;
    const totalTime = (frames.length * 1000) / fps;
    const initialFrame = frames.length ? frames[0] : "";
    this.state = {
      currentImage: initialFrame,
      timeCounter: 0,
      playFrames: false,
      totalTime
    };
  }

  _interval: ReturnType<typeof setInterval> = setInterval(() => {}, 60000);;

  componentWillUnmount(): void {
    clearInterval(this._interval);
  }

  playFrames = () => {
    const { timeCounter, totalTime } = this.state;
    const { frames, fps } = this.props;
    const nextTime = timeCounter + 1000;

    if (nextTime >= totalTime) {
      clearInterval(this._interval);
      this.setState({ playFrames: false, timeCounter: nextTime });
      return;
    }
    
    const index = Math.floor((nextTime/1000) * fps);
    console.log('play', index);
    const currentImage = frames[index];

    this.setState({ currentImage, timeCounter: nextTime });
  }

  toggleFrames = () => {
    const { playFrames } = this.state;
    if (playFrames) {
      clearInterval(this._interval);
      this.setState({ playFrames: false });
      return;
    }
    
    this.playFrames();
    this.setState({ playFrames: true });
    this._interval = setInterval(this.playFrames, 1000);
  }

  stopFrames = () => {
    const { frames } = this.props;
    const initialFrame = frames.length ? frames[0] : "";
    clearInterval(this._interval);
    this.setState({
      currentImage: initialFrame,
      timeCounter: 0,
      playFrames: false,
    });
  }

  render() {
    const { currentImage, timeCounter, totalTime, playFrames } = this.state;
    const percentage = (timeCounter / totalTime) * 100;
    return (
      <section className="player-section">
        <div className="frame-container">
          <img src={currentImage} className="image-frame" alt="Slide player" />
        </div>
        <div className="progress-container">
          <span className="progress-bar" style={{ width: `${percentage}%` }} />
        </div>
        <div className="commands">
          <button type="button" className="btn-default" onClick={this.toggleFrames}>
            <span className={`${playFrames ? 'pause-icon' : 'play-icon'}`} />
          </button>
          <button type="button" className="btn-default" onClick={this.stopFrames}>
            <span className="stop-icon" />
          </button>
        </div>
      </section>
    );
  }
}

export default FramePlayer;
