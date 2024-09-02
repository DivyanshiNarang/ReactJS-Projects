
const Progress = ({index, numQuestions, points, maxPossiblePoints, answer}) => {
  return (
    <header className="progress">
      {/* if no answer then Number will convert it to 0, else 1, so after user has answered the progress bar will move ahead*/}
        <progress max={numQuestions} value={index + Number(answer !== null)} /> 
        <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
        <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  )
}

export default Progress
