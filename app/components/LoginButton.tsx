import { login } from "../actions/authActions";

export const LoginButton = () => {
  return (
    <form action={login}>
      <button>Logga in med Google</button>
    </form>
  );
};
