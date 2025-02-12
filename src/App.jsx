import "./App.css";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showTrickyButton, setshowTrickyButton] = useState(false);
  const [trickyButtonPosition, settrickyButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const handleClickYes = () => {
    setShowModal(true);
  };

  const handleClickNo = () => {
    setshowTrickyButton(true);
  };

  const moveButton = () => {
    settrickyButtonPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  return (
    <>
      <div className="bg-rose-100 w-screen h-screen flex justify-center items-center text-white">
        {showModal ? (
          <div className="bg-pink-400 p-6 rounded-lg shadow-lg text-center max-w-xs md:max-w-md">
            <p>
              Yay!!! I love youuuuuuu!!!🤍 See you this Saturday baby!! Late
              valentines lang sa ta hehe.
            </p>
          </div>
        ) : (
          <div
            className="group relative bg-pink-400 w-full max-w-xs md:max-w-md h-64 md:h-96 p-12 rounded-lg transition-all duration-300 ease-in-out flex justify-center items-center"
            onClick={() => setIsClicked(!isClicked)}
          >
            <span
              className={`text-lg group-hover:opacity-0 transition-opacity duration-500 ${
                isClicked ? "opacity-0" : "group-hover:opacity-0"
              }`}
            >
              Hover over me or tap me
            </span>
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center space-y-4 p-8 ${
                isClicked ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <span className="text-center text-lg">
                Kcia Kharene Ducay, will you be my valentines?
              </span>
              <div className="flex gap-4">
                <button
                  onClick={handleClickYes}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Yes
                </button>
                <button
                  onClick={handleClickNo}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  No
                </button>
              </div>
              {showTrickyButton && (
                <button
                  className="w-1/2 bg-gray-400 text-white px-4 py-2 rounded-lg absolute transition-all duration-500 ease-in-out"
                  style={{
                    position: "absolute",
                    top: trickyButtonPosition.top,
                    left: trickyButtonPosition.left,
                  }}
                  onMouseEnter={moveButton}
                >
                  Ngiiiii, sure najud na???? Huhuhu😭😭😭
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
