import PropTypes from "prop-types";
import styles from "../App.module.css";
import { useState} from "react";

function Movie({coverIMG, title, year, summary, genres}) {
    const [detailActivation, setDetailActivation] = useState(false);
  
    function mouseActivation(){
        setDetailActivation((curent)=>!curent)

    }
    
    return (
    <div className={styles.movieDetail}  onMouseOver={mouseActivation} onMouseOut={mouseActivation}>
        <img className={styles.moviePoster}src={coverIMG} alt="" />
        <div>{detailActivation ?  ShowMovieDetail({title, year, summary, genres}): null}</div>
        

    </div>
  
    )
}

function ShowMovieDetail({title, year, summary, genres}){
   
    return(
        <div>
            <h3>{title}({year})</h3>
            {summary.length > 255 ? summary.slice(0, 255)+"...": summary }
            
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