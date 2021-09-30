export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        asperiores voluptate repudiandae ut, tempore, aliquid minus officiis
        excepturi quaerat maxime enim iste harum corrupti modi? Animi
        repudiandae ullam voluptatum nihil repellat vel alias eum! Iste,
        assumenda. Quos id dolor natus! Esse ullam ex distinctio sequi quis
        voluptates et at perspiciatis, porro vel incidunt consequuntur tenetur,
        corporis sapiente officia omnis ut quod magni beatae amet obcaecati.
        Laborum perferendis, maxime possimus, illum culpa neque dolorem porro
      </div>
      <style jsx>{`
        .sidebar {
          max-height: 100vh;
          background: blue;
          flex: 1;
          overflow: hidden;
          color: white;
          padding: 20px;
        }
      `}</style>
    </>
  );
}
