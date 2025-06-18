import { useState } from "react";
import CardForm from "./pages/CardForm";
import CardPreview from "./pages/CardPreview";
import bgMainMobile from "./assets/images/bg-main-mobile.png";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import iconComplete from "./assets/images/icon-complete.svg";

function App() {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReset = () => {
    setCardData({
      cardNumber: "",
      cardName: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* الخلفية تعتمد على الحجم عبر Tailwind */}
      <div className="relative lg:w-1/3 min-h-[15rem] lg:min-h-screen bg-no-repeat bg-cover bg-center
                      bg-[url('./assets/images/bg-main-mobile.png')]
                      lg:bg-[url('./assets/images/bg-main-desktop.png')]">
        <CardPreview cardData={cardData} />
      </div>

      <div className="lg:w-2/3 flex items-center justify-center p-6 bg-white">
        {!isSubmitted ? (
          <CardForm
            cardData={cardData}
            setCardData={setCardData}
            onSubmitSuccess={() => setIsSubmitted(true)}
          />
        ) : (
          <div className="text-center max-w-md mx-auto">
            <img
              src={iconComplete}
              alt="Success"
              className="mx-auto mb-8 w-20 h-20"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-wider">THANK YOU!</h2>
            <p className="text-gray-500 mb-8 text-lg">We've added your card details</p>
            <button
              onClick={handleReset}
              className="w-full bg-indigo-900 text-white py-3 rounded-lg hover:bg-indigo-800 transition-colors text-lg"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
