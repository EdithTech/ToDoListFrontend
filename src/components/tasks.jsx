import Task from "./task";

export const Tasks = () => {
  return (
    <>
      <div className="h-[400px] flex justify-center pt-[75px]">
        <div className="w-full md:w-1/2 flex flex-col gap-4 px-10">
          <div className="px-3 text-[#1E6F9F] font-semibold flex justify-between">
            <p>created tasks 10</p>
            <p>completed 5</p>
          </div>
          <div>
            <Task />
          </div>
        </div>
      </div>
    </>
  );
};
