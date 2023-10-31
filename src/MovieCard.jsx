/* eslint-disable react/prop-types */

export default function MovieCard({mov}) {
  return (
    <>
    <div className="movie">
        <div>
           <p>{mov.Year}</p>
        </div>
   
         <div>
           <img src={mov?.Poster} alt={mov?.Title}></img>
         </div>

         <div>
           <span >{mov?.Type}</span>
           <h3 >{mov?.Title}</h3>
        </div>

    </div>
    </>
  )
}
