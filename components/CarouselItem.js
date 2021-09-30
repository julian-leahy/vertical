export default function CarouselItem({ src }) {
  return (
    <div className="carousel-item">
      <div className="item">
        <img src={src} alt="" />
      </div>
    </div>
  );
}
