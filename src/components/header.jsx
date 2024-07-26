import { CirclePlus } from "lucide-react";
import todologo from "../assets/Logo.svg";

export const Header = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("form data", formData.get("todo"));
  };

  return (
    <>
      <div className="">
        <div className="min-h-[230px] bg-black flex flex-col justify-center items-center static">
          <img src={todologo} />

          <form onSubmit={handleFormSubmit}>
            <div className="min-w-full absolute top-[205px] left-0 flex justify-center gap-2">
              <input
                className="bg-[#262626]  outline-none w-1/3 h-12  px-4 py-2 rounded-lg border-[1px] border-black flex items-center text-gray-400"
                placeholder="Add a new todo"
                type="text"
                name="todo"
              />

              <div className="bg-[#1E6F9F] px-4 py-2 rounded-lg flex items-center gap-2">
                <button className="flex gap-2 items-center" type="submit">
                  <p>Create</p>
                  <span>
                    <CirclePlus size={20} />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
