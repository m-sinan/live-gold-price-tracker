import React, { useEffect, useState } from "react";

function useGoldPrice(url) {
    const [loading, setLoading] = useState(true)
    const[data, setData] = useState(null)

    useEffect(() => {
const fetchPrice = () => {
      fetch(url)
      .then(res => res.json())
      .then(datas => {
        setData(datas)
        setLoading(false)
      })
        };
          fetchPrice();
          const intervel = setInterval(fetchPrice, 60000)
          return() => clearInterval(intervel)
    }, []);

  return { data, loading };
}

export default useGoldPrice;
