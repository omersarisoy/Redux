import React from "react";
import ButtonGroup from "./ButtonGroup";
import HelloWorld from "./HelloWorld";
import { store } from './store/store'


const App = () => {
  return [
    <HelloWorld key={1} tech={store.getState().tech}/>,
    <ButtonGroup key={2} technologies={["React", "Elm", "React-Redux"]}/>
  ]
};
export default App;
