import React from "react";
import { BeatLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader />
    </div>
  );
}
