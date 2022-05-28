//@ts-nocheck
import { useEffect, useState } from "react";
import { Nav, Navbar as BoostrapNavbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import "./Navbar.scss";
import { Fade } from "react-awesome-reveal";

import { AiFillCaretDown } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleBlur = () => {
    setTimeout(() => {
      setDropdown(false);
    }, 100);
  };

  let windowSize = useWindowSize();

  useEffect(() => {
    windowSize.width < 750 && setMinimized(true);
    windowSize.width > 750 && setMinimized(false);
  }, [windowSize]);

  return (
    <>
      {!minimized ? (
        // web nav
        <BoostrapNavbar className="Navbar">
          <Container>
            <Link to="/" className="Navbar-Logo">
              nuccis designs
            </Link>
            <Nav>
              <Link to="/services">SERVICES</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="/aboutme">ABOUT ME</Link>
              <Link to="/clients">CUSTOMERS</Link>
              {/* web dropdown container*/}
              <ul className="Navbar-dropdown" onBlur={handleBlur}>
                <button
                  onClick={() =>
                    setDropdown((prev) => {
                      return !prev;
                    })
                  }
                >
                  PRODUCTS <AiFillCaretDown size={19} />
                </button>

                {/* web dropdown list*/}
                {dropdown && (
                  <Container>
                    <Fade>
                      <Link to="/services/bridal">Bridal</Link>
                    </Fade>
                    <Fade delay={200}>
                      <Link to="/services/homedecor">Home Decor</Link>
                    </Fade>
                    <Fade delay={250}>
                      <Link to="/services/pets">Pets</Link>
                    </Fade>
                    <Fade delay={300}>
                      <Link to="/services/clothing">Clothing</Link>
                    </Fade>
                    <Fade delay={350}>
                      <Link to="/services/children">Children</Link>
                    </Fade>
                    <Fade delay={400}>
                      <Link to="/services/festive">Festive</Link>
                    </Fade>
                    <Fade delay={450}>
                      <Link to="/services/teacher">Teacher</Link>
                    </Fade>
                    <Fade delay={500}>
                      <Link to="/services/decals">Decals</Link>
                    </Fade>
                    <Fade delay={550}>
                      <Link to="/services/invitations">Invitations</Link>
                    </Fade>
                    <Fade delay={600}>
                      <Link to="/services/signs">Signs</Link>
                    </Fade>
                  </Container>
                )}
              </ul>
            </Nav>
          </Container>
        </BoostrapNavbar>
      ) : (
        // hamburger nav
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
            aria-label="menu button"
            className={mobileNav ? "menu-btn close-btn" : "menu-btn"}
            onClick={() =>
              setMobileNav((prev) => {
                return !prev;
              })
            }
          ></button>
          {/* hamburger nav opened */}
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
                  CUSTOMERS
                </Link>
              </Fade>

              {/* mobile nav products dropdown */}
              <ul className="Navbar-mobile-dropdown" onBlur={handleBlur}>
                <Fade direction="left" delay={1300}>
                  <button
                    onClick={() =>
                      setDropdown((prev) => {
                        return !prev;
                      })
                    }
                  >
                    PRODUCTS <AiFillCaretDown size={19} />
                  </button>
                </Fade>
                {dropdown && (
                  <Container>
                    <Fade>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/bridal"
                      >
                        Bridal
                      </Link>
                    </Fade>
                    <Fade delay={200}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/homedecor"
                      >
                        Home Decor
                      </Link>
                    </Fade>
                    <Fade delay={250}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/pets"
                      >
                        Pets
                      </Link>
                    </Fade>
                    <Fade delay={300}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/clothing"
                      >
                        Clothing
                      </Link>
                    </Fade>
                    <Fade delay={350}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/children"
                      >
                        Children
                      </Link>
                    </Fade>
                    <Fade delay={400}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/festive"
                      >
                        Festive
                      </Link>
                    </Fade>
                    <Fade delay={450}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/teacher"
                      >
                        Teacher
                      </Link>
                    </Fade>
                    <Fade delay={500}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/decals"
                      >
                        Decals
                      </Link>
                    </Fade>
                    <Fade delay={550}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/invitations"
                      >
                        Invitations
                      </Link>
                    </Fade>
                    <Fade delay={600}>
                      <Link
                        onClick={() => setMobileNav(false)}
                        to="/services/signs"
                      >
                        Signs
                      </Link>
                    </Fade>
                  </Container>
                )}
              </ul>
            </Nav>
          )}
        </BoostrapNavbar>
      )}
    </>
  );
};

export default Navbar;
