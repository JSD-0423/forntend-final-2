import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/auth-context";

const useAxios = (url, method = "get", needsAuth = false) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        let response;

        response = await axios.request({
          url: url,
          method: method,
          headers: needsAuth
            ? {
                Authorization: `Bearer ${auth}`,
              }
            : {},
          baseURL:
            "https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io",
        });
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return [data, loading, error];
};

export default useAxios;
