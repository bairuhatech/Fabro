import React ,{ useState } from "react";
import "./styles.scss";
import logos from "../../asset/image/Fabro_logo.png.png"
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FaShoppingCart } from 'react-icons/fa';
import {  Drawer } from 'antd';
import { SlMenu } from "react-icons/sl";

function WebsiteHeader(){
  const [open, setOpen] = useState(false);
  return(
 <> 
<div className="WebsiteHeader-Box1">
   <div className="WebsiteHeader-Box2">
   <img className="logo" src={ logos } alt="" /> 
   </div>
   <div className="WebsiteHeader-Box3">
      <div className=" WebsiteHeader-Box4">
        <button className="button">
      <Button className="search-button"   icon={<SearchOutlined />} />
        </button>
      
      </div>
      <div className="WebsiteHeader-Box5">
          <div className="WebsiteHeader-Box6">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>PRODUCTS</div>
            <div>CONTACT US</div>
            </div>
          <div className="WebsiteHeader-Box7" >
            <div> <FaShoppingCart /> </div>
            <div >Cart</div>
            
          </div>
          <div className="simenu" onClick={()=>setOpen(true) }>< SlMenu /></div>
      </div>
      
   </div>
</div>
<Drawer  title="Basic Drawer" placement="right" onClose={()=>setOpen(false)} open={open}>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>PRODUCTS</p>
        <p>CONTACT US</p>
        <p> <FaShoppingCart /></p>
        <p>Cart </p>
      </Drawer>
</>
  );
}
export default WebsiteHeader;


