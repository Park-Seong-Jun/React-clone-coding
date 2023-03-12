import PropTypes from "prop-types";
import styles from "../App.module.css";
import { useState} from "react";

function Movie({coverIMG, title, year, summary, genres}) {
    const [detailActivation, setDetailActivation] = useState(false);
  
    function mouseActivation(){
        setDetailActivation((curent)=>!curent)
    }
    
    return (
    <div className={styles.movieInfo}   >
        
        {detailActivation ?  ShowMovieDetail({coverIMG, title, year, summary, genres, mouseActivation}): <img className={styles.moviePoster}src={coverIMG} alt="" onMouseOver={mouseActivation}/>}
        

    </div>
  
    )
}

function ShowMovieDetail({coverIMG, title, year, summary, genres, mouseActivation}){
   
    return(
        <div className={styles.movieDetail} onMouseOut={mouseActivation}>
            <img className={styles.movieDetailIMG} src={coverIMG} alt="" />
            <div className={styles.movieDetailInfo}>
                <h3 className={styles.movieDetailInfo__title}>{title}({year})</h3>
                {summary.length > 255 ? summary.slice(0, 255)+"...": summary }
                <h4 className={styles.movieDetailInfo__genre}>genre</h4>
                <ul>
                    {genres.map((genre) => <li key={genre}>{genre}</li>)}
                </ul>
            </div>
            
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