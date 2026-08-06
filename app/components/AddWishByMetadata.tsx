"use client";

import { useState } from "react";
import { createWish } from "../actions/wishActions";
import { fetchProductMetadata } from "../actions/productActions";
import { Plus } from "lucide-react";

type AddWishByMetadataProps = {
  wishlists: {
    _id: string;
    name: string;
  }[];
  categories: {
    _id: string;
    name: string;
  }[];
};

export const AddWishByMetadata = ({ wishlists, categories }: AddWishByMetadataProps) => {
  const [url, setUrl] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!url) return;

    setLoading(true);
    const data = await fetchProductMetadata(url);

    if (data.success) {
      setTitle(data.title);
      setPrice(data.price);
      setImageUrl(data.imageUrl);
      setNotes(data.description);
    }

    setLoading(false);
  };

  //Formulär för att lägga till wish
  return (
    <form action={createWish} className="flex flex-col gap-4 border-2 border-dashed border-[var(--color-green)] rounded p-8">
      {/* Produktlänk */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <input type="url" placeholder="Paste product URL.." value={url} onChange={(e) => setUrl(e.target.value)} className="p-2" />
        <button type="button" onClick={handleFetch} className="p-2">
          {loading ? "Loading..." : "Fetch product"}
        </button>
      </div>

      {/* Förhandsvisning */}
      {imageUrl && <img src={imageUrl} alt={title} className="w-40 rounded" />}

      {/* Hidden input så länken sparas */}
      <input type="hidden" name="link" value={url} />

      {/* Wishlist */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="wishlistId" className="font-semibold">
          Wishlist:
        </label>
        <select name="wishlistId" className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]">
          {wishlists.map((list) => (
            <option key={list._id} value={list._id.toString()}>
              {list.name}
            </option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="categoryId" className="font-semibold">
          Category:
        </label>
        <select name="categoryId" className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]">
          {categories.map((category) => (
            <option key={category._id} value={category._id.toString()}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Titel */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="title" className="font-semibold">
          Title:
        </label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product name.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" required />
      </div>

      {/* Pris */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="price" className="font-semibold">
          Price:
        </label>
        <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" placeholder="0" required />
      </div>

      {/* Bild */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="imageUrl" className="font-semibold">
          Image URL:
        </label>
        <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image link.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" />
      </div>

      {/* Prioritet */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="priority" className="font-semibold">
          Priority:
        </label>
        <select name="priority" defaultValue="medium" className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Anteckningar */}
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <label htmlFor="notes" className="font-semibold">
          Notes:
        </label>
        <input type="text" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes.." className="border-[var(--color-beige-800)] border p-2 pl-4 rounded-full bg-[var(--color-beige-600)]" />
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <button type="submit" className="flex flex-row gap-2 items-center justify-center text-[var(--color-lightyellow)] p-2 px-4 transition delay-100 ease-in-out rounded-full hover:bg-[var(--color-darkgreen)] bg-[var(--color-green)] text-large font-semibold">
          <Plus /> ADD WISH
        </button>
      </div>
    </form>
  );
};
