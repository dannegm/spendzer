import { useState, useEffect } from 'react';

const useCurrency = (currency = 'MXN') => {
  const [hasError, setErrors] = useState(false);
  const [rates, setRates] = useState({});

  const endpoint = `https://api.exchangeratesapi.io/latest?base=${currency}`;

  const fetchData = async () => {
    try {
      const response = await fetch(endpoint);
      const body = await response.json();
      setRates(body.rates);
    } catch (error) {
      setErrors(error);
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  });

  return {
    rates,
    hasError,
    fetchData,
  };
};

export default useCurrency;
