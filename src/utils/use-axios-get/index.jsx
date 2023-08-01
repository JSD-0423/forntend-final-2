import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import axiosProductionInstance from "../axios-instances";

const useAxiosGet = (url, method = "get", needsAuth = false) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  // use "forceUpdate" as a method to refetch API data after some action
  const [update, forceUpdate] = useState(true);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        let response;

        response = await axiosProductionInstance.request({
          url: url,
          method: method,
          headers: needsAuth
            ? {
                Authorization: `Bearer ${auth}`,
              }
            : {},
        });
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url, update]);
  return { data, loading, error, setData, setError, setLoading, forceUpdate };
};

export default useAxiosGet;
