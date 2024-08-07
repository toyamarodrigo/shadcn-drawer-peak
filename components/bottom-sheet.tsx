"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function BottomSheet() {
  const [snap, setSnap] = useState<number | string | null>(0.08);

  return (
    <Drawer
      dismissible={false}
      snapPoints={[0.08, 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      open
      onOpenChange={(open) => setSnap(open ? 0.08 : 1)}
    >
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent toggle={() => setSnap(snap === 0.08 ? 1 : 0.08)}>
        <div
          className={cn("flex flex-col max-w-md mx-auto w-full p-4 pt-5", {
            "overflow-y-auto": snap === 1,
          })}
        >
          <DrawerHeader>
            <DrawerTitle>Bottom Sheet Drawer</DrawerTitle>
            <DrawerDescription>This is a bottom sheet drawer</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={() => setSnap(0.08)}>Submit</Button>
            <Button variant="outline" onClick={() => setSnap(0.08)}>
              Cancel
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
