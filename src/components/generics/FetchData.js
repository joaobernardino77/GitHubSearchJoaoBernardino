import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (path) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${path}`);
        setData(response);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [path]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
