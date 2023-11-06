import "./App.css";

import { useState } from "react";
import Switch from "react-switch";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [fast, setFast] = useState(false);
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);

  const zeroOrOne = () => Math.floor(Math.random() * 2);

  return (
    <>
      <Header text="Let's choose what would be the best combination for your project!" />
      <main className="container">
        <div className="sub-container">
          <div
            className="item"
            onClick={() => {
              if (cheap && good) {
                if (zeroOrOne() === 0) {
                  setCheap(false);
                } else {
                  setGood(false);
                }
              }
              setFast(!fast);
            }}
          >
            <span>FAST</span>
            <Switch
              checked={fast}
              onColor="#5D48D2"
              offColor="#151030"
              onHandleColor="#FFFFFF"
              offHandleColor="#5D48D2"
              handleDiameter={35}
              uncheckedIcon={true}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={28}
              width={62}
            />
          </div>

          <div
            className="item"
            onClick={() => {
              if (cheap && fast) {
                if (zeroOrOne() === 0) {
                  setCheap(false);
                } else {
                  setFast(false);
                }
              }
              setGood(!good);
            }}
          >
            <span>GOOD</span>
            <Switch
              checked={good}
              onColor="#5D48D2"
              offColor="#151030"
              onHandleColor="#FFFFFF"
              offHandleColor="#5D48D2"
              handleDiameter={35}
              uncheckedIcon={true}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={28}
              width={62}
            />
          </div>

          <div
            className="item"
            onClick={() => {
              if (fast && good) {
                if (zeroOrOne() === 0) {
                  setGood(false);
                } else {
                  setFast(false);
                }
              }
              setCheap(!cheap);
            }}
          >
            <span>CHEAP</span>
            <Switch
              checked={cheap}
              onColor="#5D48D2"
              offColor="#151030"
              onHandleColor="#FFFFFF"
              offHandleColor="#5D48D2"
              handleDiameter={35}
              uncheckedIcon={true}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={28}
              width={62}
            />
          </div>
        </div>
      </main>
      <Footer text="Fast Good Cheap toggles made with React at le Reacteur by Indra" />
    </>
  );
}

export default App;
