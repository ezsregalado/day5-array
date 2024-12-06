import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const [popup, setPopup] = useState(true);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <main className="w-screen h-screen bg-cyan-300 sm:bg-red-300 sm:text-xl sm:font-bold">
      <nav className="flex gap-5 items-center justify-between px-5 py-2 relative">
        <div className="flex gap-3 items-center">
          <img
            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            alt="logo"
            className="w-[50px]"
          />
          <h1>tailwind</h1>
        </div>
        <div className="hidden lg:flex gap-3 items-center">
          <a href="#">sdads</a>
          <h1>21312</h1>
          <a href="#">sdads</a>
          <a href="#">sdads</a>
          <a href="#">sdads</a>
        </div>
        <div className="relative flex lg:hidden flex-col">
          <button onClick={togglePopup}>icon</button>
          <div
            className={`${
              popup ? "flex" : "hidden"
            } flex-col bg-white rounded-lg shadow-md p-5 absolute top-7  right-3`}
          >
            <a href="#">sasasa</a>
            <a href="#">sasasa</a>
            <a href="#">sasasa</a>
            <a href="#">sasasa</a>
          </div>
        </div>
      </nav>
      <button
        className="bg-green-300 px-5 py-2 rounded-lg"
        onClick={handleClick}
      >
        {count}
      </button>
    </main>
  );
}

export default App;
