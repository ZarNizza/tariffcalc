// unControlled Form input
import { useRef } from "react";

export function InputForm(props) {
  const refDist = useRef();
  const refLugg = useRef();
  const refAge = useRef();

  function onSubmitHandler(e) {
    e.preventDefault();
   if (refDist.current.value) props.setDist(+refDist.current.value);
   if (refLugg.current.value) props.setLugg(+refLugg.current.value);
   if (refAge.current.value) props.setAge(+refAge.current.value);
  }

  return (
    <form name="inForm" onSubmit={onSubmitHandler} className="inForm">
      <div><label htmlFor="distanse">Расстояние</label>
      <input
        ref={refDist}
        type="text"
        id="distanse"
        placeholder="1000 (км)"
      /></div>
      <div><label htmlFor="luggage">Багаж</label>
      <input
        ref={refLugg}
        type="text"
        id="luggage"
        placeholder="5 (кг)"
      /></div>
      <div><label htmlFor="age">Возраст</label>
      <input
        ref={refAge}
        type="text"
        id="age"
        placeholder="30 (лет)"
      /></div>
      <button type="submit"> Найти тарифы </button>
    </form>
  );
}
