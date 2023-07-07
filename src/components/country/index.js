import './index.css'

const Country = props => {
  const {countryDetails, changeVisit} = props
  const {id, name, isVisited} = countryDetails
  const changeVisitedButton = () => {
    changeVisit(id)
  }

  return (
    <li className="country-list">
      <p className="name">{name}</p>
      {isVisited && <p className="visited-text">Visited</p>}
      {!isVisited && (
        <button
          className="visit-button button"
          type="button"
          onClick={changeVisitedButton}
        >
          Visit
        </button>
      )}
    </li>
  )
}
export default Country
