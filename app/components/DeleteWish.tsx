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
      className="flex flex-1 flex-row gap-2 items-center justify-center text-[var(--color-darkgreen)] p-2 transition delay-100 ease-in-out hover:bg-[var(--color-pink)] bg-[var(--color-lightpink)] text-large font-medium text-large rounded-lg font-medium">
      DELETE
    </button>
  );
};
