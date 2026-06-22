import { auth } from "@/auth";
import { LoginButton } from "./components/LoginButton";
import { WelcomeMessage } from "./components/WelcomeMessage";

export default async function Home() {
  const session = await auth();

  return <div className="flex p-6 w-5/6">{session ? <WelcomeMessage /> : <LoginButton />}</div>;
}
