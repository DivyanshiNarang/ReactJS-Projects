import Options from "./Options";

const Question = ({question, dispatch, answer}) => {

  return (
    <div>
      <h4>{question.question}</h4>

      {/* on click of any option: points will change, correct incorrect options will be shown, Next button will be displayed 
      which basically means re-rendering of screen -> new state*/}
      <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  )
}

export default Question
