// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    recentMatchedData: [],
    latestMatchData: [],
    bannerImage: '',
  }

  componentDidMount() {
    this.getTeamData()
  }

  getFormateData = data => ({
    id: data.id,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)

    const teamsDetailsData = await response.json()

    const latestMatchItem = teamsDetailsData.latest_match_details

    const latestMatch = this.getFormateData(latestMatchItem)

    const recentMatchItem = teamsDetailsData.recent_matches
    const recentMatches = recentMatchItem.map(each => this.getFormateData(each))

    const bannerImageUrl = teamsDetailsData.team_banner_url

    this.setState({
      recentMatchedData: recentMatches,
      latestMatchData: latestMatch,
      isLoading: false,
      bannerImage: bannerImageUrl,
    })
  }

  Loader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  teamData = () => {
    const {recentMatchedData, latestMatchData, bannerImage} = this.state
    return (
      <div className="sub-team-matches-cont">
        <img src={bannerImage} alt="team banner" className="banner-image" />
        <p className="latest-match">Latest Match Against</p>
        <div className="dark-container">
          <LatestMatch data={latestMatchData} />
        </div>
        <p className="latest-match">Recent Matches</p>
        <ul className="match-card-un-list">
          {recentMatchedData.map(each => (
            <MatchCard key={each.id} match={each} />
          ))}
        </ul>
      </div>
    )
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      case 'KXP':
        return 'kxp'
      case 'KKR':
        return 'kkr'
      case 'RR':
        return 'rr'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-match-cont ${this.getClassName()}`
    return (
      <div className={className}>
        {isLoading ? this.Loader() : this.teamData()}
      </div>
    )
  }
}
export default TeamMatches
