import React, { useState } from 'react'

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;
  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <img src={image} alt="dest-img" />
      <div>
        <div>
          <h4 className="">${price}</h4>
          <h4 className="">{name}</h4>
        </div>
        <div>
          {description}
          <span className="" onClick={readMoreHandler}>
            {readMore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      <button className="" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
