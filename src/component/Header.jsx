import "../style/header.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  return (
    <>
      <nav className="navbar bg-body-primary col">
        <div className="container">
          <a className="navbar-brand navi" target="_blank" href="">
            Employee Management System
          </a>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}

export default Header;
