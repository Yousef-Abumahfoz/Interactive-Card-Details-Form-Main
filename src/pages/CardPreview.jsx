import bgCardFront from "../assets/images/bg-card-front.png";
import bgCardBack from "../assets/images/bg-card-back.png";
import cardLogo from "../assets/images/card-logo.svg";

export default function CardPreview({ cardData }) {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-16 px-6 lg:px-24 py-10 lg:py-20">
      
      <div className="relative w-full lg:w-[400px] h-[300px] lg:h-[500px]">
        <div 
          className="absolute top-10 bottom-34 left-30 z-20 w-[85%] max-w-[22rem] h-44 lg:h-52 lg:w-96 rounded-xl shadow-2xl"
          style={{
            backgroundImage: `url(${bgCardFront})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="p-5 lg:p-6 h-full flex flex-col justify-between">
            <img src={cardLogo} alt="Card Logo" className="w-14 lg:w-16" />
            <div>
              <div className="text-lg lg:text-xl tracking-widest mb-4 lg:mb-6 text-white">
                {cardData.cardNumber || '0000 0000 0000 0000'}
              </div>
              <div className="flex justify-between text-xs lg:text-sm text-white uppercase tracking-wider">
                <span>{cardData.cardName || 'Jane Appleseed'}</span>
                <span>
                  {cardData.expiryMonth || '00'}/{cardData.expiryYear || '00'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute top-32 left-8 lg:top-70 lg:left-65 z-10 w-[85%] max-w-[22rem] h-44 lg:h-52 lg:w-96 rounded-xl shadow-2xl"
          style={{
            backgroundImage: `url(${bgCardBack})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute top-[45%] right-10 lg:right-12 text-white text-sm tracking-widest">
            {cardData.cvc || '000'}
          </div>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center lg:text-left">
          
          
          
        </div>
      </div>
    </div>
  );
}
