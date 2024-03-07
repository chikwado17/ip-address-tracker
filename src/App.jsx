import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Map from "./components/Map";
import MapDetails from "./components/MapDetails";
import { useIp } from "./context/IpContext";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [ip, setIP] = useState("");

  const { isLoading, fetchIpAddress } = useIp();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.ipify.org/?format=json");
      const data = await res.json();
      setIP(data.ip);
    };

    getData();
  }, []);

  useEffect(() => {
    fetchIpAddress(ip);
  }, [ip]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Homepage>
        <Header />
        <MapDetails />
        <Map />
      </Homepage>
    </>
  );
}

export default App;
