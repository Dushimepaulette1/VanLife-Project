import { redirect } from "react-router-dom";

export default async function Authentication() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return redirect("/login");
  }
}
