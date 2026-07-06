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
      className="flex flex-1 flex-row gap-2 items-center justify-center text-[var(--color-darkgreen)] p-2 transition delay-100 ease-in-out hover:bg-[var(--color-yellow)] bg-[var(--color-lightyellow)] text-large font-medium text-large rounded-lg font-medium">
      STATUS
    </button>
  );
};
