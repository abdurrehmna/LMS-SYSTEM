import React from "react";
import ReactCardSlider from "react-card-slider-component";
// import { Carousel } from "@trendyol-js/react-carousel";

const slides = [
  {
    image: "https://tse1.mm.bing.net/th?id=OIP.4cZggQ1evy9v8_16d7bQ8AHaEo&pid=Api&P=0",
    title: "This is a title",
    description: "This is a description",
    clickEvent: "sliderClick"
    // clickEvent: sliderClick
  },
  {
    image: "https://tse3.mm.bing.net/th?id=OIP.KJjXQ8PCvwOkX3xtkYHv5gHaD4&pid=Api&P=0",
    title: "This is a second title",
    description: "This is a second description",
    clickEvent: "sliderClick"
    // clickEvent: sliderClick
  },
  {
    image: "https://tse3.mm.bing.net/th?id=OIP.gaE1DtjcvmSgWQJPNgvuRwHaFF&pid=Api&P=0",
    title: "This is a third title",
    description: "This is a third description",
    clickEvent: "sliderClick"
    // clickEvent: sliderClick
  },
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.EDJ9xoErBbZqK2tExVoJfAHaHY&pid=Api&P=0",
    title: "This is a fourth title",
    description: "This is a fourth description",
    clickEvent: "sliderClick"
    // clickEvent: sliderClick
  },
  {
    image: "https://tse4.mm.bing.net/th?id=OIP.6EYPDYud8B6UYL_RreDoyAHaH9&pid=Api&P=0",
    title: "This is a fifth title",
    description: "This is a fifth description",
    clickEvent: "sliderClick"
    // clickEvent: sliderClick
  },
  {
    image: "https://tse3.mm.bing.net/th?id=OIP.fVpd3QUfPiUM39TF6eGI1wHaDP&pid=Api&P=0",
    title: "This is a sixth title",
    description: "This is a sixth description",
    clickEvent: "sliderClick",
    // clickEvent: sliderClick
  },
  {
    image: "https://tse1.mm.bing.net/th?id=OIP.q85uMC6nn1YPLlt0NMrkoAHaIM&pid=Api&P=0",
    title: "This is a seventh title",
    description: "This is a seventh description",
    clickEvent: "sliderClick"
    // clickEvent: sliderClick
  }
];
const cardslider = () => {
  return (
    <div style={{ marginTop: "5em",height:"300px ",float:"left",width:"75%",marginleft:"20%",marginLeft:"15%"}}>
      <ReactCardSlider slides={slides} />
    </div>
  );
};

export default cardslider;