import Card from "./Card"
import styled from "styled-components";
import { useRef, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export default function CardSlider({data, title}) {
    const [showControls, setShowControls] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const listRef = useRef();
    const handleDirection = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 70;
        if (direction === "left" && sliderPosition > 0) {
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
          setSliderPosition(sliderPosition - 1);
        }
        if (direction === "right" && sliderPosition < 4) {
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
          setSliderPosition(sliderPosition + 1);
        }
      };
  return(
     <Container 
     className="flex column"
     onMouseEnter={() => setShowControls(true)}
     onMouseLeave={() => setShowControls(false)}
     
     >
          <h1>{title}</h1>
          <div className="wrapper">
            <div className=
            {`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
          >
             <AiOutlineLeft onClick={() => handleDirection("left")} />
            </div>
            <div className="slider flex" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
          </div>
  {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
    </Container>
  );
}

const Container = styled.div``