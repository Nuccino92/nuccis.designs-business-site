//@ts-nocheck
import { useEffect, useState } from "react";
import { Nav, Navbar as BoostrapNavbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import "./Navbar.scss";
import { Fade } from "react-awesome-reveal";

const Navbar: React.FC = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  let windowSize = useWindowSize();

  useEffect(() => {
    windowSize.width < 750 && setMinimized(true);
    windowSize.width > 750 && setMinimized(false);
  }, [windowSize]);

  return (
    <>
      {!minimized ? (
        <BoostrapNavbar className="Navbar">
          <Container>
            <Link to="/" className="Navbar-Logo">
              nuccis designs
            </Link>
            <Nav>
              <Link to="/services">SERVICES</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="/aboutme">ABOUT ME</Link>
              <Link to="/clients">CLIENTS</Link>
            </Nav>
          </Container>
        </BoostrapNavbar>
      ) : (
        <BoostrapNavbar className="Navbar Navbar-minimized">
          <Container>
            <Link
              onClick={() => setMobileNav(false)}
              to="/"
              className="Navbar-Logo"
            >
              nuccis designs
            </Link>
          </Container>
          <button
            className={mobileNav ? "menu-btn close-btn" : "menu-btn"}
            onClick={() =>
              setMobileNav((prev) => {
                return !prev;
              })
            }
          ></button>
          {mobileNav && (
            <Nav className="mobile-nav">
              <Fade direction="right">
                <Link onClick={() => setMobileNav(false)} to="/">
                  HOME
                </Link>
              </Fade>
              <Fade direction="left" delay={100}>
                <Link onClick={() => setMobileNav(false)} to="/services">
                  SERVICES
                </Link>
              </Fade>
              <Fade direction="right" delay={400}>
                <Link onClick={() => setMobileNav(false)} to="/contact">
                  CONTACT
                </Link>
              </Fade>
              <Fade direction="left" delay={700}>
                <Link onClick={() => setMobileNav(false)} to="/aboutme">
                  ABOUT ME
                </Link>
              </Fade>
              <Fade direction="right" delay={1000}>
                <Link onClick={() => setMobileNav(false)} to="/clients">
                  CLIENTS
                </Link>
              </Fade>
            </Nav>
          )}
        </BoostrapNavbar>
      )}
    </>
  );
};

export default Navbar;
