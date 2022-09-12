import Card from "./Card"

export default function CardSlider({data, title}) {
     console.log(data);
  return <div>
  {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
    </div>
 
}