import './styles.css';
import CountdownTimer from './js/class';


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
 
});

timer.start();



