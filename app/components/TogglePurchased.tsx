"use client";

import { togglePurchase } from "../actions/wishActions";

type TogglePurchasedProps = {
  id: string;
};

export const TogglePurchased = ({ id }: TogglePurchasedProps) => {
  return (
    <button
      onClick={() => {
        togglePurchase(id);
      }}
      className="flex flex-1 flex-row gap-2 items-center justify-center text-[#BF5048] border p-1.5 transition delay-150 ease-in-out hover:bg-[#F9F4E7]">
      Status
    </button>
  );
};
