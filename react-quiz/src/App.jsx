import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  // status possible values: 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  // to display question one by one, we need to have the index of current questions
  // (to keep track of current question) (will use this index to take certain object out of the questions array)
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status: 'ready'}
    case 'dataFailed':
      return {...state, status: 'error'}
    case 'start':
      return {...state, status: 'active', secondsRemaining: state.questions.length * SECS_PER_QUESTION}
    case 'newAnswer': {
      const currentQuestion = state.questions.at(state.index);

      return {
        ...state, 
        answer: action.payload, 
        points: 
          currentQuestion.correctOption === action.payload 
            ? state.points + currentQuestion.points 
            : state.points
      };
    }
    case 'newQuestion': {
      return {...state, index: state.index + 1, answer: null}
    }
    case 'finish': {
      return {...state, status: 'finished', highscore: state.points > state.highscore ? state.points : state.highscore}
    }
    case 'restart': {
      return {...initialState, questions: state.questions, status: 'ready', highscore: state.highscore};
      // return {...state, status: 'ready', index: 0, answer: null, points: 0, highscore: state.highscore}
    }
    case 'tick': {
      return {...state, secondsRemaining: state.secondsRemaining - 1, status: state.secondsRemaining === 0 ? 'finished' : state.status}
    }
    default:
      throw new Error("Action unknown");
  }
}

const App = () => {
  const [{questions, status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => (
    prev + cur.points
  ), 0)

  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then(res => res.json())
    .then(data => dispatch({type: 'dataReceived', payload: data}))
    .catch(err => dispatch({type: 'dataFailed'}));
  }, []);

  return (
    <div className='app'>
      <Header />
      <MainContent>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && 
          <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>
        }
        {status === 'active' && (
          // timer starts when the game starts, and as time gets up set status to finished
          <>
            <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
            {/* passing current question as prop*/}
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
              <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
            </Footer>
            </>
        )}
        {status === 'finished' && <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highscore={highscore} dispatch={dispatch}/>}
      </MainContent>

    </div>
  )
}

export default App

// in timer secondsRemaining is changing ever second which leads to re-rendering of UI each second
// so if App component is re-rendering every second, its child component will also re-render every second
// in large App having many components, we should not have our timer in App component which leads to re-rendering of all child components