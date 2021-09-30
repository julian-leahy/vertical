import Carousel from "../components/Carousel";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="container">
      <SideBar />
      <Carousel />
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
    </div>
  );
}
