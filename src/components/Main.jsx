import React, { useState, useEffect } from "react";
import data from "../data";
import Card from "./Card";

const Main = () => {
  return (
    <div id="main">
      <Card data={data} />
    </div>
  );
};

export default Main;
