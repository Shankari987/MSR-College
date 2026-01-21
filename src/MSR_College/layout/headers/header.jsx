import Link from "next/link";
import React, { useState } from "react";
import OffCanvas from "../../../components/common/sidebar/SCET_off-canvas";
import useSticky from "../../../hooks/use-sticky";

import MainMenu from "./component/main-menu";

const Header = ({ style_3, no_topBar = false }) => {
  const { sticky } = useSticky();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`edu-header header-style-${style_3 ? "3" : "2"} ${no_topBar ? "no-topbar" : ""
          }`}
      >
        <div id="edu-sticky-placeholder"></div>

        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container" style={{maxWidth:'100%'}}>
            <div className="header-navbar">
              <div className="ahs-header-brand">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img className="ahs-logo-light" src={'/assets/images/logo/Shanmugha-Medical-Science-Logo-Print-01.svg'} alt="Corporate Logo" style={{width:'380px' , padding:'20px 30px 15px'}}/>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <MainMenu />
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </>
  );
};

export default Header;
