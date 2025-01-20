import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";

function Creditcards() {
  const creditCards = [
    { name: "HDFC Card", amount: "₹3,00,000" },
    { name: "ICICI Card", amount: "₹2,50,000" },
    { name: "SBI Card", amount: "₹1,80,000" },
  ];
  return (
    <>
    <div>
    <div
      className="card credit-card text-white">
      <h6 className="mb-5 poppins-semibold fs-2">Credit Cards</h6>
      <Carousel className="mb-5" indicators={false} interval={3000}>
        {creditCards.map((card, index) => (
          <Carousel.Item key={index}>
            <div
              className="d-flex flex-column align-items-center"
              style={{ backgroundImage: "url('/path/to/background-image.png')", backgroundSize: 'cover', borderRadius: '8px' }}
            >
              <h5 className="poppins-bold fs-4 text-white">{card.name}</h5>
              <h2 className="mt-3 poppins-bold fs-4">{card.amount}</h2>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </div>
    
    </>
  );
}

export default Creditcards;