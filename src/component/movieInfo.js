import PropTypes from "prop-types";

function Movie({coverIMG, title, year, summary, genres}) {
    return (
    <div>
        <img src={coverIMG} alt=""/>
        <h3>{title}({year})</h3>
        <p>{summary}</p>
        <ul>
            {genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
    </div>
  
    )
}

Movie.propTypes = {
    coverIMG : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;