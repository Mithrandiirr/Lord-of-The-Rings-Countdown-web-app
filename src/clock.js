import React, { Component } from "react";
import symbol1 from './assets/11.png'
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    leading0(num) {
        return num < 10 ? "0" + num : num;
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ days, hours, minutes, seconds });
        }
    }
    render() {
        return (
            <div className="lotr-countdown_values">
                <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="days" />
                    <figcaption class="wp-caption-text" id='here'>{this.leading0(this.state.days)}</figcaption>
                    <figcaption class="wp-caption-text days">Days</figcaption>
                </figure>
                <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="hours" />
                    <figcaption class="wp-caption-text">{this.leading0(this.state.hours)}</figcaption>
                    <figcaption class="wp-caption-text days">Hours</figcaption>
                </figure>
                <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="minutes" />
                    <figcaption class="wp-caption-text">{this.leading0(this.state.minutes)}</figcaption>
                    <figcaption class="wp-caption-text days">Minutes</figcaption>
                </figure>
                <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="seconds" />
                    <figcaption class="wp-caption-text">{this.leading0(this.state.seconds)}</figcaption>
                    <figcaption class="wp-caption-text days">Seconds</figcaption>
                </figure>
            </div>
        );
    }
}
export default Clock;
