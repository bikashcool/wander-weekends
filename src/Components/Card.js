import React, { useState } from 'react'

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;
  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="w-[400px] flex m-4 h-max p-4 flex-col items-center rounded-lg shadow-xl">
      <img
        src={image}
        alt="dest-img"
        className="w-[380px] aspect-square object-cover"
      />
      <div className="my-5 mx-[5px]">
        <div className="">
          <h2 className="text-green-500 text-[1.3rem] font-semibold">
            ₹{price}
          </h2>
          <h4 className="text-2xl font-semibold">{name}</h4>
        </div>
        <div className="">
          {description}
          <span
            className="text-blue-700 capitalize cursor-pointer"
            onClick={readMoreHandler}
          >
            {readMore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      <button
        className="mt-4 py-3 px-20 bg-blue-300 rounded-xl font-bold text-xl cursor-pointer border border-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Card;
