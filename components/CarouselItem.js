export default function CarouselItem({ src }) {
  return (
    <div className="carousel-item">
      <div className="item">
        <img src={src} alt="" />
      </div>
      <style jsx>{`
        .carousel-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 90vh;
          width: 100%;
          align-items: center;
        }

        .item {
          height: 86vh;
        }
      `}</style>
    </div>
  );
}
