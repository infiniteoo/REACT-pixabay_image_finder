import React, { useState } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";

const Search = () => {
  const [state, setState] = useState({
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: process.env.REACT_APP_PIX_API_KEY,
    images: [],
  });

  console.log(state.apiKey);

  return <div></div>;
};

export default Search;
