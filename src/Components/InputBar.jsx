import { IoClose } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
const InputBar = () => {
  return (
    <div className="">
      <div className="">
        <label htmlFor="">Muliplier</label>
        <div className="">
          <input className="" type="number" name="" id="" />
          <span className="">
            <IoClose className="" />
          </span>
        </div>
      </div>
      <div className="">
        <label htmlFor="">Roll Over</label>
        <div className="">
          <input className="" type="number" name="" id="" />
          <button type="button">
            <IoClose className="" />
          </button>
        </div>
      </div>
      <div className="">
        <label htmlFor="">Win Chance</label>
        <div className="">
          <input className="" type="number" min={50} defaultValue={50} name="" id="" />
          <span className="">
            <FaArrowRightArrowLeft className="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
