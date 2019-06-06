import React from "react";
import "../styles/SearchForm.css";

const SearchForm = ({ input }) => (
  <input type="text" onChange={input} placeholder=" > Enter a fruit" />
);

export default SearchForm;
