import React from "react";
import { New } from "./components/New";
import DayClass from "./components/DayClass";
import Greet from "./components/Greet";
import Message from "./components/Message";
import EventBind from "./components/EventBind";
import Parent from "./components/Parent";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import LifeCycleC from "./components/LifecycleC";

const App = () => {
  return (
    <div>
      {/* <New />
      <DayClass />
      <Greet name="prasi" age="20" salary="30" />
      <Message />
      <EventBind />
      <Parent />
      <NameList />
      <Stylesheet primary={true} /> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      <LifeCycleC />
    </div>
  );
};

export default App;
