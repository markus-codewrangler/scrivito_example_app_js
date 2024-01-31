import * as React from "react";
import * as Scrivito from "scrivito";

export function Login() {
  return Scrivito.isUserLoggedIn() ? (
    <a href="#" className="text-danger strong" onClick={Scrivito.logout}>
      Log out
    </a>
  ) : (
    <a
      href="#"
      className="text-white strong"
      onClick={Scrivito.ensureUserIsLoggedIn}
    >
      Sign in
    </a>
  );
}
