import React, { useState } from "react";
import Panel from "./components/Panel";
import Result from "./components/Result";
import Translater from "./puppeteer";

const App = () => {
  const [textTranslated, setTextTranslated] = useState({});

  
  const getData = async (e) => {
    e.preventDefault();
    const { input, output, text } = e.target;
    const data = await Translater(input.value, output.value, text.value);
    console.log(data);
  };

  return (
    <div className="w-full h-full flex items-center justify-around">
      <div className="w-1/2 h-full">
        <Panel getData={getData} />
      </div>
      <div className="w-1/2 h-full">
        <Result />
      </div>
    </div>
  );
};

export default App;
