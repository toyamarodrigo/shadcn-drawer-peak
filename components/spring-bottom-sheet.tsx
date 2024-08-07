"use client";

import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import "react-spring-bottom-sheet/dist/style.css";
import { Button } from "./ui/button";

export function SpringBottomSheet() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <BottomSheet open={open}>My awesome content here</BottomSheet>
    </>
  );
}
