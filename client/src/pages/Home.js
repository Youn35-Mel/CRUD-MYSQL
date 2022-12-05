import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axious from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axious.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  return <div>Home</div>;
};

export default Home;
