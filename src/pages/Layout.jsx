import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
  
    return (
      <div>
        <nav>
          <ul>
            {location.pathname !== "/" && (
              <li className="home-link" key="home-button">
                <Link style={{ color: "black" }} to="/">
                  Map
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  };

export default Layout;