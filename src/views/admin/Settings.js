import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/4 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}
