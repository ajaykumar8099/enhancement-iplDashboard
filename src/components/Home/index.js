// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)

    const responseTeamData = await response.json()
    console.log(responseTeamData.teams)
    const iplTeamsData = responseTeamData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: iplTeamsData, isLoading: false})
  }

  loader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getTeamsData = () => {
    const {teamsData} = this.state
    return (
      <ul className="un-list-teams">
        {teamsData.map(each => (
          <TeamCard key={each.id} eachTeamData={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="heading-logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="load-data-cont">
          {isLoading ? this.loader() : this.getTeamsData()}
        </div>
      </div>
    )
  }
}
export default Home
