// Write your code here
import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = data

  return (
    <div className="latest-match-container">
      <div className="top-container">
        <div className="first-container">
          <p className="latest-team-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="result">{venue}</p>
          <p>{result}</p>
        </div>
        <div className="latest-img-cont">
          <img
            src={competingTeamLogo}
            alt={`"latest match ${competingTeam}"`}
            className="latest-team-img"
          />
        </div>
      </div>
      <div className="line-container">
        <hr className="line" />
      </div>
      <div className="third-container">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
