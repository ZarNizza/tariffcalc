// import { useState } from "react";
import { ListItem } from "./ListItem";

export function OutputForm(props) {
  //   const [priceList, setPriceList] = useState([]);
  const a = props.a;

  return (
    <div className="outForm">
      <center>
        <h4>- Тарифы -</h4>
      </center>
      <ul>
        {a.map((ai) => {
          const ddo = ai[9] && props.age <= ai[7] ? (100-ai[8]) / 100 : 1; //discount Distanse Only
          let price =
            (props.lugg > ai[6])
              ? "недоступно"
              : (props.dist * ai[2] * ddo + ((props.lugg > ai[3]) ? ((ai[5] ? props.lugg-ai[3] : 1) * ai[4]) : 0));
          if (!ai[9] && isFinite(price) && (props.age <= ai[7])) price = ((100-ai[8]) * price) / 100;
          const listItem = [Math.random(), props.providerName[ai[0]], ai[1], price];
          return <ListItem key={listItem[0]} listItem={listItem} />;
        })}
      </ul>
    </div>
  );
}
