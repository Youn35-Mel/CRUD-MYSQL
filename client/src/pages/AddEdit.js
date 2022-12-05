import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddEdit.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("please provide value into each input field ");
    } else {
      axios.post("http://localhost:5000/api/post");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name ..."
          value={name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your Email ..."
          value={email}
          onChange={handleInputChange}
        />
        <label>Contact</label>
        <input
          type="number"
          id="contact"
          placeholder="Your Contact No..."
          value={contact}
          onChange={handleInputChange}
        />
        <input type="submit" value="save" />
        <Link to="/">
          <input type="button" value="go back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;