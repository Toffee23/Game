const ColoredBox = ({inputs}) => {
    const customStyles={
        width:`${inputs.rolloverInput}%`
    }
  return (
    <div className="h-2/3 mb-4">
      
        <h3 className="font-bold mb-3 text-2xl text-center">{inputs.rolloverInput}</h3>
        <div className="">
            <div className="w-full h-5  bg-green-600 ">
                <div style={customStyles} className="h-full  bg-red-500 transition-all"></div>
            </div>
            <div className="flex items-center justify-between mt-1">
                <h3 className="ml-3 font-semibold">9</h3>
                <h3 className="mr-3 font-semibold">99</h3>
            </div>
        </div>
      
    </div>
  );
};

export default ColoredBox;
