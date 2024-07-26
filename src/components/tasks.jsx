import Task from "./task";

export const Tasks = () => {
  return (
    <>
      <div className="h-[400px] flex justify-center pt-[75px]">
        <div className="w-full md:w-1/2 flex flex-col gap-4 px-10">
          <div className="px-3 text-[#4EA8DE] font-semibold flex justify-between">
            <div className="flex gap-2">
                <p>created tasks</p>
                <div className="w-6 h-6 px-1 rounded-full text-[#d9d9d9] bg-[#333333]">
                    <p className="">10</p>
                </div>
            </div>
            <div className="flex gap-2">
                <p>completed task</p>
                <div className="w-6 h-6 px-1 rounded-full text-[#d9d9d9] bg-[#333333]">
                    <p className="">10</p>
                </div>
            </div>
          </div>
          <div>
            <Task />
          </div>
        </div>
      </div>
    </>
  );
};
