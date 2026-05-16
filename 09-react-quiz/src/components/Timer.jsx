import {useEffect} from 'react'

const Timer = ({dispatch, secondsRemaining}) => {

  useEffect(() => {
    // as we do not have a clean up function
    // this timer keeps running even after this component has unmounted
    // was that each time we restarted our quiz, a new timer got added.
    // setInterval(() => {
        // dispatch({type: 'tick'})
    // }, 1000);
    // we have many timers running at the same time which were all dispatching this action.
    // And so then our time was going down really really fast because of that
    // so store the id of setInterval
    // every single setInterval timer will return a unique id
    const id = setInterval(() => {
        dispatch({type: 'tick'})
    }, 1000);

    // so now we cancel the timer
    // this will run between re-renders and after this component is unmounted
    // so timer stops
    return () => clearInterval(id);

  }, [dispatch]);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className='timer'>{mins < 10 && "0"}{mins} : {seconds < 10 && "0"}{seconds}</div>
  )
}

export default Timer
