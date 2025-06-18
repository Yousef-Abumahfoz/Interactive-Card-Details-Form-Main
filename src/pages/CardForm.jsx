import { useState } from 'react';

export default function CardForm({ cardData, setCardData, onSubmitSuccess }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
      setCardData({ ...cardData, [name]: formattedValue });
      return;
    }
    
    setCardData({ ...cardData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!cardData.cardName.trim()) newErrors.cardName = "Can't be blank";
    if (!cardData.cardNumber || cardData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = "Wrong format";
    }
    if (!cardData.expiryMonth || !/^(0[1-9]|1[0-2])$/.test(cardData.expiryMonth)) {
      newErrors.expiryMonth = "Invalid month";
    }
    if (!cardData.expiryYear || !/^\d{2}$/.test(cardData.expiryYear)) {
      newErrors.expiryYear = "Invalid year";
    }
    if (!cardData.cvc || !/^\d{3}$/.test(cardData.cvc)) newErrors.cvc = "Can't be blank";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmitSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <div className="mb-6">
        <label className="block text-xs font-bold tracking-widest text-gray-800 mb-2">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          name="cardName"
          value={cardData.cardName}
          onChange={handleChange}
          placeholder="e.g. Jane Appleseed"
          className={`w-full p-3 border rounded-lg text-gray-800 placeholder-gray-400 ${
            errors.cardName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.cardName && (
          <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold tracking-widest text-gray-800 mb-2">
          CARD NUMBER
        </label>
        <input
          type="text"
          name="cardNumber"
          value={cardData.cardNumber}
          onChange={handleChange}
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="19"
          className={`w-full p-3 border rounded-lg text-gray-800 placeholder-gray-400 ${
            errors.cardNumber ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
        )}
      </div>

      <div className="flex gap-4 mb-8">
        <div className="w-1/2">
          <label className="block text-xs font-bold tracking-widest text-gray-800 mb-2">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex gap-2">
            <div className="w-1/2">
              <input
                type="text"
                name="expiryMonth"
                value={cardData.expiryMonth}
                onChange={handleChange}
                placeholder="MM"
                maxLength="2"
                className={`w-full p-3 border rounded-lg text-gray-800 placeholder-gray-400 ${
                  errors.expiryMonth ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.expiryMonth && (
                <p className="text-red-500 text-xs mt-1">{errors.expiryMonth}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="expiryYear"
                value={cardData.expiryYear}
                onChange={handleChange}
                placeholder="YY"
                maxLength="2"
                className={`w-full p-3 border rounded-lg text-gray-800 placeholder-gray-400 ${
                  errors.expiryYear ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.expiryYear && (
                <p className="text-red-500 text-xs mt-1">{errors.expiryYear}</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <label className="block text-xs font-bold tracking-widest text-gray-800 mb-2">
            CVC
          </label>
          <input
            type="text"
            name="cvc"
            value={cardData.cvc}
            onChange={handleChange}
            placeholder="e.g. 123"
            maxLength="3"
            className={`w-full p-3 border rounded-lg text-gray-800 placeholder-gray-400 ${
              errors.cvc ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.cvc && (
            <p className="text-red-500 text-xs mt-1">{errors.cvc}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Confirm
      </button>
    </form>
  );
}