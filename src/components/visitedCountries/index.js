import './index.css'

const VisitedCountries = props => {
  const {removeVisitedCountry, visitedCountry} = props
  const {id, imageUrl, name} = visitedCountry
  const removeCountry = () => {
    removeVisitedCountry(id)
  }
  return (
    <li className="visited-list">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="remove-container">
        <p className="remove-name">{name}</p>
        <button type="button" className="remove-button" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
