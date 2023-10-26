import { AiFillStar, AiFillFire, AiFillSketchCircle } from "react-icons/ai";

interface PropsType {
  id: number;
  value: number;
  setValue: (arg: number) => void;
  edit: boolean;
  setEdit: (arg: boolean) => void;
  icon: number;
}

const StarComponent = ({
  id,
  value,
  setValue,
  edit,
  setEdit,
  icon,
}: PropsType) => {
  return (
    <div className="flex">
      <div
        onMouseEnter={() => (edit ? setValue(id - 0.5) : null)}
        onMouseLeave={() => (edit ? setValue(value < 1 ? 0 : value) : null)}
        onClick={() => setValue(id - 0.5)}
        className="w-5 h-10 relative overflow-hidden"
      >
        {icon === 0 ? (
          <AiFillStar
            className={`w-10 h-10 ${
              value < id - 0.5 ? "text-neutral-300" : "text-yellow-500"
            } absolute overflow-hidden left-0`}
          />
        ) : icon === 1 ? (
          <AiFillFire
            className={`w-10 h-10 ${
              value < id - 0.5 ? "text-neutral-300" : "text-yellow-500"
            } absolute overflow-hidden left-0`}
          />
        ) : icon === 2 ? (
          <AiFillSketchCircle
            className={`w-10 h-10 ${
              value < id - 0.5 ? "text-neutral-300" : "text-yellow-500"
            } absolute overflow-hidden left-0`}
          />
        ) : null}
      </div>
      <div
        onMouseEnter={() => (edit ? setValue(id) : null)}
        onMouseLeave={() => (edit ? setValue(value) : null)}
        onClick={() => {
          setValue(id), setEdit(false);
        }}
        className="w-5 h-10 relative overflow-hidden"
      >
        {icon === 0 ? (
          <AiFillStar
            className={`w-10 h-10 ${
              value < id ? "text-neutral-300" : "text-yellow-500"
            } absolute overflow-hidden right-0`}
          />
        ) : icon === 1 ? (
          <AiFillFire
            className={`w-10 h-10 ${
              value < id ? "text-neutral-300" : "text-yellow-500"
            } absolute overflow-hidden right-0`}
          />
        ) : icon === 2 ? (
          <AiFillSketchCircle
            className={`w-10 h-10 ${
              value < id ? "text-neutral-300" : "text-yellow-500"
            } absolute overflow-hidden right-0`}
          />
        ) : null}
      </div>
    </div>
  );
};

export default StarComponent;
