import { Container } from "semantic-ui-react";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="header_bg">
      <Container>
        <div className="header_style">
          <h1>IP Address Tracker</h1>
          <SearchBox />
        </div>
      </Container>
    </div>
  );
};

export default Header;
