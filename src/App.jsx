import { useState,useContext } from 'react'
import SeatRow from './components/SeatRow';
import screenImg from "../src/assets/screen-icon.8dd7f126.svg";
import { PriceContext } from "./components/Context/PriceContext";
import { SeatPriceContext } from "./components/Context/SeatPriceContext";

function App() {
  const [totalPrice, setTotalPrice] = useState([]);
  const totalAmount = totalPrice.reduce((sum, seat) => {   
    return sum + seat.price;
  }, 0);

  const handleclick = () => { 
    const seats = totalPrice.map((obj)=> obj.label);
   const confirmation = confirm(
    `Confirm your Tickets.You have Booked ${totalPrice.length} Tickets of Seats ${seats} \n 
    Total Price: ₹${totalAmount}`
  );
  if(confirmation){
    alert("Your Seats Are Booked");
  }
  }
  return (
    <>
      <div className='md:w-full md:h-full grid md:grid-rows-2'>
        <PriceContext.Provider value={{ totalPrice, setTotalPrice }}>
          <section className='mb-6'>

          <h1 className="text-center font-semibold"> Platinum Tier: ₹200 </h1>
            <SeatPriceContext.Provider value={{ price: 200, type: "Platinum" }}>
              <SeatRow
                name="A"
              />
            </SeatPriceContext.Provider>
          </section>
          <section className='mb-6'>
          <h1 className="text-center font-semibold"> Gold Tier: ₹150 </h1>
            <SeatPriceContext.Provider value={{ price: 150, type: "Gold" }}>
              <SeatRow name="B"
              />
              <SeatRow name="C"
              />
            </SeatPriceContext.Provider>
          </section>
          <section className='mb-6'>
          <h1 className="text-center font-semibold"> Silver Tier: ₹100 </h1>
            <SeatPriceContext.Provider value={{ price: 100, type: "Silver" }}>
              <SeatRow name="D"
              />
              <SeatRow name="E"
              />
              <SeatRow name="F"
              />
            </SeatPriceContext.Provider>
          </section>

          <section className='text-center mt-10'>
            <img className="mx-auto" src={screenImg} alt='screen' />
          </section>
        </PriceContext.Provider>
        <footer className="text-center font-bold text-xl mt-4 fixed w-full bottom-0 bg-gray-800 h-35 p-4">
        <button
          type="button"
          className="bg-blue-500 text-white font-semibold h-15 w-40 p-1 m-auto rounded hover:bg-blue-700"
          onClick={handleclick}
        >
          Book Now: ₹{totalAmount} <br/> ({totalPrice.length} {totalPrice.length === 1 ? "Ticket" : "Tickets"})
        </button>
      </footer>
      </div>


    </>
  )
}

export default App
