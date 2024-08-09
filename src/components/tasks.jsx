import { useEffect, useState } from "react";
import Task from "./task";
import axios from "axios";
import store from "../utils";
import { apiClient } from "../services";

const backendUrl = "http://localhost:3000";
// const backendUrl = "https://to-do-list-backend-five.vercel.app";

export const Tasks = () => {
  
  const [allToDos, setAllToDos] = useState([]);
  const [pinnedToDo, setPinnedToDo] = useState([]);
  const [unpinnedToDo, setUnpinnedToDo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get(`/todo/getToDos`, {
          headers: {
            "userId": store.get("userId"),
            "Authorization": store.get("token")
          }
        });  
        if (response.data) {
          setAllToDos(response.data.allToDos);
          setPinnedToDo(response.data.pinnedTodos);
          setUnpinnedToDo(response.data.unPinnedTodos);
          // console.log('unpin', response.data.unPinnedTodos);
          
        } else {
          setUnpinnedToDo([]);
          setPinnedToDo([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching todos', error);
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, [created]);

  var doneToDoCount = () => {
    var count = 0;

    allToDos.forEach((todo)=>{
      todo.done && count++;
    })
    return count;
  }
  
  
  return (
    <>
      <div className="h-[400px] flex justify-center pt-[75px]">
        <div className="w-full md:w-1/2 flex flex-col gap-4 px-10">
          <div className="px-3 text-[#4EA8DE] font-semibold flex justify-between">
            <div className="flex gap-2">
                <p>created tasks</p>
                <div className="w-6 h-6 px-1 rounded-full text-[#d9d9d9] bg-[#333333]">
                    <p className="">{allToDos.length}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <p>completed task</p>
                <div className="w-6 h-6 px-1 rounded-full text-[#d9d9d9] bg-[#333333]">
                    <p className="">{doneToDoCount()}</p>
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {
              pinnedToDo?.map((todo)=>{
                // console.log('alltodo', todo.data);
                return <Task key={todo._id} todo={todo} />;
              })
            }

            {
              unpinnedToDo?.map((todo)=>{
                // console.log('alltodo', todo.data);
                return <Task key={todo._id} todo={todo} />;
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};
