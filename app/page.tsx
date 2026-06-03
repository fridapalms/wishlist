import { AllWishes } from "./components/AllWishes";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <h3 className="text-[#BF5048] font-semibold text-2xl">All wishes</h3>
      <AllWishes />
    </div>
  );
}
