import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[linear-gradient(90deg,rgba(159,175,198,1)4%,rgba(119,169,212,1)38%,rgba(115,135,209,1)77%,rgba(124,107,154,1)100%)]">
      <div>
        <h2 className="text-5xl m-[6vh] rounded-md border-dashed border-[7px] border-blue-800 font-bold py-[1vh] px-[5vw]">
          Wander Weekends
        </h2>
      </div>
      <div className="flex justify-center flex-wrap my-0 mx-auto w-screen">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
