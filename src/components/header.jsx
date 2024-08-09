import { CirclePlus } from "lucide-react";
import todologo from "../assets/Logo.svg";
import store from "../utils";
import { useNavigate } from "react-router-dom";
import {apiClient} from "../services"


export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    store.remove("token");
    navigate('/login');

  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Create an object from the FormData
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    data["userId"] = store.get("userId");

    console.log("form data", data);

    try {
      const response = await apiClient.post(
        `/todo/addToDo`,
        data,
        {
          headers: {
            "userId": store.get("userId"),
            "Authorization": store.get("token")
          }
        }
      );
      console.log("res", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="">
        <div className="min-h-[230px] bg-black flex flex-col justify-center items-center relative">
          <div className="py-3 px-3 absolute top-0 right-0">
            <div className="bg-[#333333] rounded-lg absolute p-2 top-2 right-2 ">
              <button onClick={handleLogout}>logout</button>
            </div>
          </div>
          <img src={todologo} />

          <form onSubmit={handleFormSubmit}>
            <div className="min-w-full absolute top-[205px] left-0 flex justify-center gap-2">
              <input
                className="bg-[#262626]  outline-none w-1/3 h-12  px-4 py-2 rounded-lg border-[1px] border-black flex items-center text-gray-400"
                placeholder="Add a new todo"
                type="text"
                name="data"
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
