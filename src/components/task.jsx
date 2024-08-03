import axios from "axios";
import { CircleCheck, Pencil, Pin, PinOff, Trash2 } from "lucide-react";
import { useState } from "react";



const Task = ({ todo }) => {
  // console.log("task", todo);

  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [updateText, setUpdateText] = useState(todo.data);
  // const [isPinned, setIsPinned] = useState(false)

  const vercelBackend = "https://to-do-list-backend-five.vercel.app";

  const handleCheckBoxClick = async () => {
    // setIsClicked((prevState) => !prevState);
    const response = await axios.post(
      `${vercelBackend}/todo/toggleToDoDone/${todo._id}`
    );
  };

  const handleOnClickDelete = async () => {
    console.log("Delete Clicked");
    const response = await axios.post(
      `${vercelBackend}/todo/deleteToDo/${todo._id}`
    );
  };

  const handleOnClickEdit = async () => {
    console.log("Edit Clicked");
    setIsUpdateClicked((pre) => !pre);
  };

  const handleUpdateFromSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Create an object from the FormData
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const response = await axios.post(
      `${vercelBackend}/todo/updateToDo/${todo._id}`,
      data
    );
    setIsUpdateClicked((pre) => !pre);
  };

  const handleOnClickPin = async () => {
    // setIsPinned((pre) => !pre);
    const response = await axios.post(
      `${vercelBackend}/todo/pin-unpin/${todo._id}`,
    );
  }

  return (
    <div className="min-h-14 h-max py-2 px-4 flex items-center gap-2 bg-[#262626] rounded-md justify-between">
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <button onClick={handleCheckBoxClick}>
            {todo.done ? (
              <CircleCheck size={20} color="#4EA8DE" />
            ) : (
              <div className="min-w-5 min-h-5 rounded-full border-solid border-2 border-[#4EA8DE]"></div>
            )}
          </button>
        </div>
        <div>
          {isUpdateClicked ? (
            <form onSubmit={handleUpdateFromSubmit}>
              <input
                className="bg-[#262626] outline-none border-solid border-b-2 "
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
                type="text"
                name="data"
              />
            </form>
            
          ) : (
            <p className={`${todo.done && "line-through"}`}>
              {todo.data}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={handleOnClickPin}>
          {
            !todo.isPinned ? <Pin size={18} /> : <PinOff size={18}/>  
          }
        </button>

        <button onClick={handleOnClickEdit}>
          <Pencil size={18} />
        </button>

        <button onClick={handleOnClickDelete}>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default Task;
