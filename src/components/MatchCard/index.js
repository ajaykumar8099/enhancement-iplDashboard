// Write your code here

import './index.css'

const MatchCard = props => {
  const {match} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = match

  const classNameResult = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="list-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-head">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={classNameResult}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
