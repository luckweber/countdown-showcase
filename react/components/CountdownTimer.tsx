import * as React from 'react';
import * as PropTypes from 'prop-types';



interface State {
  days: number,
  hours: number,
  min: number,
  sec: number,
  dates:  any
}

interface DefaultProps {
    date:any
}

interface Props extends DefaultProps {
  interval: any

}

class CountdownTimer extends React.Component<Props, State> {

  private  interval: any;

  public constructor(props: Props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      dates: ''
    }

  }



  public static propTypes = {
    date: PropTypes.string.isRequired
  }

  public stop() {
    clearInterval(this.interval);
  }

  public addLeadingZeros(value:any) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  componentWillUnmount() {
    this.stop();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }


  public calculateCountdown(endDate:any) {
    let dateInit = new Date().toString();
    let dateFinal = new Date(endDate).toString();
    let diff = (Date.parse(dateFinal) - Date.parse(dateInit)) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  public render():React.ReactNode {
    const countDown = this.state;
    // console.log(this.props)
    //{this.addLeadingZeros(countDown.days)} {countDown.days === 1 ? 'Dia' : 'Dias'}  {this.addLeadingZeros(countDown.hours)}:{this.addLeadingZeros(countDown.min)}:{this.addLeadingZeros(countDown.sec)}

    return(
      <div>
        {this.addLeadingZeros(countDown.hours)}:{this.addLeadingZeros(countDown.min)}:{this.addLeadingZeros(countDown.sec)}
      </div>
    )
  }
}

export default CountdownTimer;
