import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputForm } from "./InputForm";
import { OutputForm } from "./OutputForm";
import { Tariffs } from "./Tariffs";


function App() {
  const [dist,setDist] = useState(1000);
  const [lugg,setLugg] = useState(5);
  const [age,setAge] = useState(30);
  const providerName = ["Аэрофлот", "РЖД"];
  const a = [];
  a[0] = [0, "Эко", 4, 5, 4000, false, 20, 0, 0, true];
  a[1] = [0, "Про", 8, 20, 5000, false, 50, 7, 30, true];
  a[2] = [0, "Lux", 15, 50, 0, false, 50, 16, 30, true];
  a[3] = [1, "Эко", 0.5, 15, 50, true, 50, 5, 50, true];
  a[4] = [1, "Про", 2, 20, 50, true, 60, 8, 30, true];
  a[5] = [1, "Lux", 4, 60, 0, false, 60, 16, 20, false];

  // data structure
  // 0 providerName: number
  // 1 caseName: string
  // 2 1kmCost: number
  // 3 freeLuggWeight: Number
  // 4 luggCost: Number
  // 5 luggCostPerKg: boolean
  // 6 maxLuggWeight: Number
  // 7 childAge: Number
  // 8 childDiscount: Number (%)
  // 9 discountDistanseOnly: boolean

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <InputForm setDist={setDist} setLugg={setLugg} setAge={setAge} />
        <OutputForm dist={dist} lugg={lugg} age={age} providerName={providerName} a={a} />
        <Tariffs providerName={providerName} a={a} />
      </header>
    </div>
  );
}

export default App;
