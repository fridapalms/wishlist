import { auth } from "@/auth";

export const WelcomeMessage = async () => {
  const session = await auth();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#BF5048]">Welcome, {session?.user?.name}!</h1>
      <p>Use the sidebar to navigate between wishlists, categories and adding your new wishes.</p>
    </div>
  );
};
