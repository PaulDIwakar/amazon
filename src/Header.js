import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png?__cf_chl_captcha_tk__=75e9c4b1f78f85b489505c92d27d2b5fd1f4c7fd-1616124684-0-AZZhzW7JNTS58e7qWSP0B29tHbaTxGx8jK57WK1AeCy9bNxSyFEgQA5_V_W3jInlcFZEd-g3kU9Hxs-2dGC_O2TU5UKpgVLGmIDqrzBX4z0V_4pvPqcNBN_gU-xfwHHsA0Xwct-ybhZCxlQHmcGF3oz-DeMsY3PQfZtzetBRCtPN8iaE165REbplOln8ysTVazBgBr64TdKk7GFQpDvfyMMUNZquVQ_2DMwL9VAFipofW5wimMB1o4qj0xEPygN0pnbXiU2wX2G-HuJCLygCCZ828N6TC0uBQPmMR5oC4Zfp27NEa_kqpXPclwzSUbSa9DkS1iEDrFyW3eYTuPDI94p6fv6DXDfLZOzxmVn6EXecaM0GwF6nei2jtLuaQcwzkTK-wrcbSjO7NbNR9cI-DK9ICJOFtEDd_ee-fHtC_SmYGHwZtC54fcNFITPhfuUi5CCwXOQdxRLludvnOe8xnto8MTa3m4m9JVLxu0wmscbljG2iPgKcFuk_Tp-JyG4Dnc3SB-sQ18wHJBcRkLpztEG_-p6q1uC05qeeTwZbT5OiDlEqPlMBgBkBo7gf0XUI0L6JdCqWlKnhAr2tZCNk8yE"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
