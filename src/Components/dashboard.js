import styled from "styled-components";
import Header from "./header.js";

function DashBoard() {
  return (
    <div>
      <Banner>
        <div>
          envato market
          <span>
            <button>Buy Now</button>
          </span>
        </div>
      </Banner>
      <Header />
    </div>
  );
}

export default DashBoard;

const Banner = styled.div`
  margin-top: 0;
  height: 50px;
  color: #5fb282;
  font-weight: bold;
  background-color: #282828;

  > div {
    padding-left: 15px;
    padding-top: 7px;
    font-size: 20px;

    > span {
      margin-left: 80%;

      > button {
        color: white;
        height: 35px;
        background-color: #5fb282;
        border-radius: 5px;
      }
    }
  }
`;
