import { CircleCheck, Trash2 } from "lucide-react";
import { useState } from "react";

const Task = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleCheckBoxClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleOnClickDelete = () => {
    console.log("Delete Clicked");
  };

  return (
    <div className="min-h-14 h-max py-2 px-4 flex items-center gap-2 bg-[#262626] rounded-md justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <button onClick={handleCheckBoxClick}>
            {isClicked ? (
              <CircleCheck size={16} color="#4EA8DE" />
            ) : (
              <div className="min-w-4 min-h-4 rounded-full border-solid border-2 border-[#4EA8DE]"></div>
            )}
          </button>
        </div>
        <div>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            inventore sapiente quos harum enim ad accusantium atque consequatur
            delectus eius?
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <button onClick={handleOnClickDelete}>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default Task;
