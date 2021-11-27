import styled from "styled-components";
import Header from "./header.js";

function DashBoard() {
  return (
    <MyDashBoard>
      <Banner>
        <div>
          envato market
          <span>
            <button>Buy Now</button>
          </span>
        </div>
      </Banner>
      <Header />
      <Card>
        <h1 className="heading">Sample</h1>
        <p>Data : Sample data 1</p>
        <p>Data : Sample data 2</p>
      </Card>
    </MyDashBoard>
  );
}

export default DashBoard;

const MyDashBoard = styled.div`
  height: 100vh;
`;

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

const Card = styled.div`
  color: white;
  margin-top: 6%;
  margin-left: 2%;
  width: 300px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.3);
  border: solid white;
  border-width: 2px 2px;

  > h1 {
    font-size: 30px;
    padding-left: 4px;
  }

  > p {
    padding-left: 4px;
    color: grey;
  }
`;
