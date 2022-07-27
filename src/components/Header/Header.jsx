import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerContext } from "../../DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerContext();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, Podcasts and more..."
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.displayName} />
        <h4>Anishwar Sharma</h4>
      </div>
    </div>
  );
};

export default Header;
