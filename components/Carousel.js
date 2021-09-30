import { useState } from "react";
import images from "../images";
import CarouselItem from "./CarouselItem";
import { useSwipeable } from "react-swipeable";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlers = useSwipeable({
    onSwipedUp: () => {
      setActiveIndex(activeIndex + 1);
    },
    onSwipedDown: () => {
      setActiveIndex(activeIndex - 1);
    },
  });
  return (
    <div className="carousel" {...handlers}>
      <div
        className="inner"
        style={{ transform: `translateY(-${activeIndex * 90}vh)` }}
      >
        {images.map((y, i) => {
          return <CarouselItem key={i} src={y.url} />;
        })}
      </div>
    </div>
  );
}
