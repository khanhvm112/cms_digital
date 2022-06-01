// import axios from "../../../../axios";
import React, { useEffect, useState } from "react";
import ListProvider from "./ListProvider";

export default function () {
  const [listProvider, setListProvider] = useState([]);
  const [request, setRequest] = useState({
    keyword: "",
    page: "0",
    pagesize: "10",
  });
  // const fetchListProvider = () => {
  //   axios()
  //     .post("http://192.168.100.90:8080/digital-cms/api/listProvider", request)
  //     .then((response) => setListProvider(response.data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const fetchListProvider = async (index) => {
    await fetch(
      `http://192.168.100.105:8080/digital-cms/api/listProvider?page=${index}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(request),
      }
    )
      .then((res) => res.json())
      .then((response) => setListProvider(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchListProvider();
  }, []);

  return <div>{/* <ListProvider providers={listProvider} /> */}</div>;
}
