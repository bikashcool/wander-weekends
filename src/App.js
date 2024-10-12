import Tours from './Components/Tours';
import { useState } from 'react';
import data from './data';

function App() {

  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="h-screen font-bold flex items-center justify-center flex-col bg-[linear-gradient(90deg,rgba(159,175,198,1)4%,rgba(119,169,212,1)38%,rgba(115,135,209,1)77%,rgba(124,107,154,1)100%)]">
        <h2 className="text-3xl">No tours Left</h2>
        <button
          className="px-12 py-3 my-8 bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
          onClick={() => setTours(data)}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="flex">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
