// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeamData} = props
  const {id, name, teamImageUrl} = eachTeamData

  return (
    <Link to={`/team-matches/${id}`} className="team-list-item-container">
      <li className="team-card-list-container">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
