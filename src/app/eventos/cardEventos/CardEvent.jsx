"use client";
import { Carousel } from "@material-tailwind/react";
/* import { defaults } from "autoprefixer"; */

function CarouselTransition({ event1, event2 }) {
  return (
    <div className="flex p-4 m-2 justify-around">
      {/* <Carousel transition={{ duration: 2 }} className="rounded-xl w-4/6"> */}
      <img
        src={event1}
        alt="Event 1"
        className="h-full w-2/5 object-cover m-2 p-2"
      />
      <img
        src={event2}
        alt="Event 2"
        className="h-full w-2/5 object-cover m-2 p-2"
      />
      {/*   <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      /> 
    /* </Carousel> */}
    </div>
  );
}
export default CarouselTransition;
