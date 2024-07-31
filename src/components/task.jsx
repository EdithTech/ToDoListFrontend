import axios from "axios";
import { CircleCheck, Trash2 } from "lucide-react";
import { useState } from "react";

const Task = ({todo}) => {
  // console.log("task", todo);

  const [isClicked, setIsClicked] = useState(false);

  const handleCheckBoxClick = () => {
    // setIsClicked((prevState) => !prevState);
    const response = axios.post(`http://localhost:3000/todo/toggleToDoDone/${todo._id}`);
  };

  const handleOnClickDelete = () => {
    console.log("Delete Clicked");
    const response = axios.post(`http://localhost:3000/todo/deleteToDo/${todo._id}`);

  };

  return (
    <div className="min-h-14 h-max py-2 px-4 flex items-center gap-2 bg-[#262626] rounded-md justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <button onClick={handleCheckBoxClick}>
            {todo.done ? (
              <CircleCheck size={16} color="#4EA8DE" />
            ) : (
              <div className="min-w-4 min-h-4 rounded-full border-solid border-2 border-[#4EA8DE]"></div>
            )}
          </button>
        </div>
        <div>
          <p className={`${todo.done && "line-through"}`}>
            {/* dahhfdhs */}
            {todo.data}
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
