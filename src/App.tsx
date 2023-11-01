import { useState } from "react";
import StarComponent from "./start.component";
import { FiSettings } from "react-icons/fi";
import { AiFillStar, AiFillFire, AiFillSketchCircle } from "react-icons/ai";

function App() {
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState(0);
  const [edit, setEdit] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [icon, setIcon] = useState(0);
  const [drag, setDrag] = useState(false);

  const result = [
    {
      value: "Please Rate us",
    },
    {
      value: `We're soryy to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.`,
    },
    {
      value:
        "We apologize for the inconvenience you experienced. We appreciate your feedbak and would like to work with you to addess any issues.",
    },
    {
      value:
        "Thank you for your feedback. We're soryy to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve",
    },
    {
      value:
        "Thank you for your positive feedback! We're glad to now that you had a great experience and we appreciate support.",
    },
    {
      value:
        "Exellent! We're thrilled to hear you had such a positive experience. thank you for choosing our platform",
    },
  ];

  const changeStars = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > 0 && +e.target.value < 10) {
      const newArray = Array.from(
        { length: parseInt(e.target.value, 10) },
        (_, index) => index + 1
      );
      setStars(newArray);
    }
  };

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-10 right-10 "
      >
        <FiSettings className={"w-6 h-6 text-slate-400 hover:text-slate-600"} />
      </button>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="bg-black/50 fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-5 flex flex-col gap-6"
          >
            <label>
              <input
                type="number"
                value={stars.length}
                onChange={(e) => changeStars(e)}
                className="w-60 p-1 border-[1px] border-black/30"
              />
            </label>
            <div className="w-full flex justify-around">
              <button onClick={() => setIcon(0)}>
                <AiFillStar
                  className={`w-8 h-8  ${
                    icon === 0 ? "text-red-500" : "text-slate-500"
                  }`}
                />
              </button>
              <button onClick={() => setIcon(1)}>
                <AiFillFire
                  className={`w-8 h-8  ${
                    icon === 1 ? "text-red-500" : "text-slate-500"
                  }`}
                />
              </button>
              <button onClick={() => setIcon(2)}>
                <AiFillSketchCircle
                  className={`w-8 h-8  ${
                    icon === 2 ? "text-red-500" : "text-slate-500"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`bg-white p-10 rounded-lg flex flex-col justify-center items-center gap-6`}
        style={{ width: `${stars.length * 100}px`, minWidth: "500px" }}
      >
        <h1 className="font-bold select-none text-center">
          How many stars would you give to our Inline Code Editor?
        </h1>
        <div
          className="flex gap-6"
          onMouseDown={() => {
            setDrag(true);
          }}
          onMouseUp={() => {
            setDrag(false);
          }}
        >
          {stars.map((v) => {
            return (
              <StarComponent
                key={v}
                id={v}
                value={value}
                setValue={setValue}
                edit={edit}
                setEdit={setEdit}
                icon={icon}
                drag={drag}
              />
            );
          })}
        </div>
        <p className={`text-center w-full h-10 select-none`}>
          {
            result[Math.round(value / (stars.length / (result.length - 1)))]
              .value
          }
        </p>
      </div>
    </div>
  );
}

export default App;
