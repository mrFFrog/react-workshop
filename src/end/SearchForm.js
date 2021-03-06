import React, { Fragment, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const RATINGS = [
  { value: '', label: 'All' },
  { value: 'g', label: 'G' },
  { value: 'pg', label: 'PG' },
  { value: 'pg-13', label: 'PG-13' },
  { value: 'r', label: 'R' },
]
const LIMITS = [6, 12, 18, 24, 30]

const SearchForm = ({
  initialLimit,
  initialRating,
  initialSearchQuery,
  initialShowInstant,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(initialSearchQuery)
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)
  const [showInstant, setShowInstant] = useState(initialShowInstant)
  const [searchRating, setSearchRating] = useState(initialRating)
  const [searchLimit, setSearchLimit] = useState(initialLimit)
  const realSearchQuery = showInstant ? inputValue : searchQuery
  const queryFieldEl = useRef(null)

  useEffect(() => {
    onChange({
      searchQuery: realSearchQuery,
      rating: searchRating,
      limit: searchLimit,
    })
  }, [onChange, realSearchQuery, searchRating, searchLimit])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(inputValue)

    // focus the query field after submitting
    // to make easier to quickly search again
    queryFieldEl.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="input-group">
        <input
          type="search"
          placeholder="Search Giphy"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          className="input-group-field"
          ref={queryFieldEl}
        />
        <aside className="input-group-button">
          <button type="submit" className="button">
            Search
          </button>
        </aside>
      </section>
      <section>
        <input
          type="checkbox"
          id="instant-results"
          name="instant-results"
          checked={showInstant}
          onChange={(e) => {
            setShowInstant(e.target.checked)
          }}
        />
        <label htmlFor="instant-results">Show instant results?</label>
      </section>
      <hr />
      <fieldset>
        <legend>Choose a rating</legend>
        {RATINGS.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              id={`rating-${value}`}
              checked={value === searchRating}
              onChange={() => {
                setSearchRating(value)
              }}
            />
            <label htmlFor={`rating-${value}`}>{label}</label>
          </Fragment>
        ))}
      </fieldset>
      <hr />
      <label>
        # of Results
        <select
          onChange={(e) => setSearchLimit(e.target.value)}
          value={searchLimit}
        >
          {LIMITS.map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}

SearchForm.propTypes = {
  initialLimit: PropTypes.number,
  initialRating: PropTypes.string,
  initialSearchQuery: PropTypes.string,
  initialShowInstant: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}
SearchForm.defaultProps = {
  initialLimit: 12,
  initialRating: '',
  initialSearchQuery: '',
  initialShowInstant: false,
}

export default SearchForm
