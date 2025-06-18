import bgCardFront from "../assets/images/bg-card-front.png";
import bgCardBack from "../assets/images/bg-card-back.png";
import cardLogo from "../assets/images/card-logo.svg";

export default function CardPreview({ cardData }) {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-24 py-10 lg:py-20">
      
      <div className="relative w-full max-w-sm h-[280px] sm:h-[320px] lg:w-[400px] lg:h-[500px]">
        {/* بطاقة الخلف */}
        <div 
          className="absolute top-0 left-4 sm:left-8 lg:top-32 lg:left-16 z-10 w-[85%] max-w-xs h-40 sm:h-44 lg:h-52 lg:w-96 rounded-xl shadow-2xl"
          style={{
            backgroundImage: `url(${bgCardBack})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute top-[45%] right-6 sm:right-10 text-white text-sm tracking-widest">
            {cardData.cvc || '000'}
          </div>
        </div>

        {/* بطاقة الأمام */}
        <div 
          className="absolute top-16 sm:top-20 left-2 sm:left-6 lg:top-10 lg:left-10 z-20 w-[85%] max-w-xs h-40 sm:h-44 lg:h-52 lg:w-96 rounded-xl shadow-2xl"
          style={{
            backgroundImage: `url(${bgCardFront})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="p-4 sm:p-5 lg:p-6 h-full flex flex-col justify-between">
            <img src={cardLogo} alt="Card Logo" className="w-12 sm:w-14 lg:w-16" />
            <div>
              <div className="text-base sm:text-lg lg:text-xl tracking-widest mb-3 sm:mb-4 lg:mb-6 text-white">
                {cardData.cardNumber || '0000 0000 0000 0000'}
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-white uppercase tracking-wider">
                <span>{cardData.cardName || 'Jane Appleseed'}</span>
                <span>
                  {cardData.expiryMonth || '00'}/{cardData.expiryYear || '00'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* هذا المكان يمكن استخدامه لإضافة الفورم أو أي محتوى آخر */}
      <div className="w-full max-w-md">
        <div className="text-center lg:text-left">
          {/* محتوى إضافي هنا إن وجد */}
        </div>
      </div>
    </div>
  );
}
