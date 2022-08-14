import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [responses, setResponses] = useState([]);
  const addResponseData = async (restOfUrl = "") => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setResponses((data) => [...data, { ...response.data, id: uuid() }]);
  };

  return [responses, addResponseData];
};

export default useAxios;
