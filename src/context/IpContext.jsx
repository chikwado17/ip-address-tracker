import { useState, useContext } from "react";
import { createContext } from "react";

const GEO_API =
  "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_r2ZLRWuorO8ZWvabqeEXRWT4ZtNHU";

const IpContext = createContext();

const IpContextProvider = ({ children }) => {
  const [ipAddress, setIpAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchIpAddress = async (ip) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${GEO_API}&ipAddress=${ip}`);
      const data = await res.json();
      setIpAddress(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IpContext.Provider value={{ ipAddress, isLoading, fetchIpAddress }}>
      {children}
    </IpContext.Provider>
  );
};

const useIp = () => {
  const context = useContext(IpContext);
  return context;
};

export { useIp };

export default IpContextProvider;
