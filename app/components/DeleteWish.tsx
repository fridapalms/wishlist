"use client";

import { deleteWish } from "../actions/wishActions";

type DeleteWishProps = {
  id: string;
};

export const DeleteWish = ({ id }: DeleteWishProps) => {
  return (
    <button
      onClick={() => {
        deleteWish(id);
      }}
      className="flex flex-1 flex-row gap-2 items-center justify-center text-[#BF5048] border p-1.5 transition delay-150 ease-in-out hover:bg-[#F9F4E7]">
      Ta bort
    </button>
  );
};
