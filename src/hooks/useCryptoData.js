import { useEffect, useState } from "react";

const useCryptoData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Function to get local crypto svg
  //   const getImageSrc = (symbol) => {
  //     const mapping = {
  //       BTC: "7901",
  //       ETH: "7902",
  //       XRP: "7903",
  //       LTC: "7904",
  //       BCH: "7905",
  //     };

  //     return `../../Assets/Icons/Group${mapping[symbol]}.svg`;
  //   };

  useEffect(() => {
    fetch(process.env.REACT_APP_CRYPTO_DATA_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const targetCryptos = ["BTC", "ETH", "XRP", "LTC", "BCH"];
        const filteredData = data.data
          .filter((crypto) => targetCryptos.includes(crypto.symbol))
          .map((crypto) => {
            return {
              //adding imgSrc to render image in imageCards
              ...crypto,
              //   imgSrc: getImageSrc(crypto.symbol),
            };
          });
        setData(filteredData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useCryptoData;
