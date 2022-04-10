import React, { useState } from "react";
import { useMount } from "react-use";

// components

import CardSettings from "components/Cards/CardSettings.js";
import Loader from "components/Loader";

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useMount(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData({
        username: "Josue2297",
        email: "josue@email.com",
        name: "Josue",
        lastname: "Lopez",
      });
      setIsLoading(false);
    }, 5000);
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          {isLoading ? <Loader /> : <CardSettings values={data} />}
        </div>
      </div>
    </>
  );
}
