import { useEffect, useState } from "react";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const useServices = (search) => {
  const [services, setServices] = useState([]);
  const axiosCommon = useAxiosCommon();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  useEffect(() => {
    axiosCommon(`/services?search=${search}`).then((res) => {
      setServices(res.data);
    });
  }, [search]);
  return services;
};

export default useServices;
