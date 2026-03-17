"use client";

import { Button } from "-/components/ui/button";
import React, { MouseEvent } from "react";

export default function AddToCartButton() {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <Button onClick={handleClick}>+</Button>
    </div>
  );
}
