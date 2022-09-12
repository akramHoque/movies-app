import Card from "./Card"
import styled from "styled-components";
import { useRef, useState } from "react";

export default function CardSlider({data, title}) {
    const [showControls, setShowControls] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const listRef = useRef();
  return(
     <Container 
     className="flex column"
     onMouseEnter={() => setShowControls(true)}
     onMouseLeave={() => setShowControls(false)}
     
     >
  {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
    </Container>
  );
}

const Container = styled.div``