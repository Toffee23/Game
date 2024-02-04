import { IoClose } from "react-icons/io5";
import { FaArrowRightArrowLeft, FaPercent } from "react-icons/fa6";
const InputBar = () => {
  return (
    <div className="flex items-center justify-between gap-4 mt-5">
      <div className="">
        <label className="font-medium text-gray-800 " htmlFor="">Muliplier</label>
        <div className="flex items-center border-2 mt-2 shadow-md border-gray-800 py-1 px-2">
          <input
            className=" font-semibold outline-none px-1 border-none remove-arrow"
            type="number"
            name=""
            id=""
          />
          <span className="">
            <IoClose className="cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="">
        <label  className="font-medium text-gray-800 "  htmlFor="">Roll Over</label>
        <div className="flex items-center border-2 mt-2 shadow-lg border-gray-800  ">
          <input
            className="font-semibold outline-none px-1 border-none remove-arrow"
            type="number"
            name=""
            id=""
          />
          <button type="button" className="bg-gray-800 py-2 px-3 shadow-lg items-center flex justify-center">
            <FaArrowRightArrowLeft className="cursor-pointer bg-gray-800" />
          </button>
        </div>
      </div>
      <div className="">
        <label  className="font-medium text-gray-800 "  htmlFor="">Win Chance</label>
        <div className="flex mt-2 items-center border-2 shadow-md border-gray-800 py-1 px-2">
          <input
            className="font-semibold outline-none px-1 border-none remove-arrow"
            type="number"
            min={50}
            defaultValue={50}
            name=""
            id=""
          />
          <span className="">
            <FaPercent className="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
