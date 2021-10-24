import React from "react";
import "../App.css";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";


const Sidebar = () => {
  return (
      

      

<div className="sidebar__container">
      <div className="sidebar">
 
      
        <span>
        <HomeIcon />

        </span>
        <span>
          <PetsIcon />
        </span>
        <span>
          <AddLocationAltIcon />
        </span>
        <span>
          <ContactPhoneIcon />
        </span>
      </div>
    </div>

  



     
    
  );
};

export default Sidebar;
