"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavBar = () => {
  const { user, isLoading } = useUser();

  return (
    <nav className="container flex   ">
      <div className="flex flex-1 items-center justify-evenly sm:items-stretch sm:justify-evenly">
      {/*   <div className="flex flex-shrink-0 items-center">
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            <img
              className="h-8 w-auto rounded-full"
              src="./logo.png"
              alt="Peniel"
            />
          </a>
        </div> */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {user ? null : (
              <a
                href="/api/auth/login"
                className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Inicia Sesion
              </a>
            )}

            {user && (
              <div
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile"
              >
                <ul className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-full mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6
                      className="d-inline-block"
                      data-testid="navbar-user-mobile"
                    >
                      {user.name}
                    </h6>
                  </span>
                </ul>
                <ul className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link
                    href="/profile"
                    icon="user"
                    testId="navbar-profile-mobile"
                  >
                    Profile
                  </Link>
                </ul>
                <ul
                  id="qsLogoutBtn"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <Link
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile"
                  >
                    Log out
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>














      















      </div>
    </nav>
  );
};

export default NavBar;
