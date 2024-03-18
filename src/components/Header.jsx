import React from "react";
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import "./Header.css";

const Header = ({ links }) => {
  return (
    <header>
      <div className="flex justify-between mr-10 ml-10 p-4 text-gray-500">
        <div id="menu-bar">
          <img src="/src/images/Logo.png" alt="logo" />
        </div>
        <nav className="navbar">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "2.5em" }}>
            {links.map((link, index) => (
              <a key={index} href={link.url} className={link.className}>
                {link.label === "Contact Us" ? (
                  <div style={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                    <span>{link.label}</span>
                    
                    <PhoneInTalkRoundedIcon  style={{color:'white',alignItems:'center',justifyContent:'center'}}/>
                  </div>
                ) : (
                  <span>{link.label}</span>
                )}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
