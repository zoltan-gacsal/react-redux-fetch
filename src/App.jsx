import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {dataLekeres} from "./Lekeres";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countries);


  useEffect(() => {
    dispatch(dataLekeres());
  }, []);

  return (
    <>
      <select>
        {state.status === 'ready' &&
          state.list.map( (item, index) => (
            <option key={index} value={item.iso3}>
              {item.name}
            </option>
          ) )}
      </select>
    </>
  );
}

export default App;
