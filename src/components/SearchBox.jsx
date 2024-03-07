import { useState } from "react";
import { FormField, Form, Input } from "semantic-ui-react";
import { useIp } from "../context/IpContext";

const SearchBox = () => {
  const [ip, setIp] = useState("");
  const { fetchIpAddress } = useIp();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchIpAddress(ip);
    setIp("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Input
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            style={{ maxWidth: "650px", borderRadius: "100px" }}
            icon="arrow right"
            size="huge"
            placeholder="Search for any ip address or domain..."
          />
        </FormField>
      </Form>
    </div>
  );
};

export default SearchBox;
