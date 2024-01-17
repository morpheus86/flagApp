import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllFlags } from "./store/reducers_slice";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AllFlags from "./components/Flags/AllFlags";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFlags());
  }, [dispatch]);

  return (
    <div className="app">
      <Layout />
      <AllFlags />
    </div>
  );
}

export default App;
