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
    return(
      <div className=''>
        <h2>No tours Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
