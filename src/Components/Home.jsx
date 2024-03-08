import React from 'react';
import { FaUsers } from "react-icons/fa";
import { TbCoinMoneroFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";



import { FaProductHunt } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";

import { GiCheckboxTree } from "react-icons/gi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";


import { FaBorderAll } from "react-icons/fa";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Users', 'sub1', <FaUsers />, [
    getItem('Marchent ', '1', <TbCoinMoneroFilled /> ),
    getItem(' User', '2', <FaUser/>),
    
  ]),
  {
    type: 'divider',
  },
  getItem('Product', 'sub2', <FaProductHunt />, [
    getItem('Add Product ', '3', <IoBagAdd /> ),
    getItem('All Product', '4', <LuBaggageClaim/>),
    
  ]),
  {
    type: 'divider',
  },
  getItem('Catagory', 'sub3', <GiCheckboxTree />, [
    getItem('Add Catagory ', '5', <AiOutlineAppstoreAdd />,),
    getItem('All Catagory', '6', <MdOutlineAddShoppingCart />,),
    
  ]),
  {
    type: 'divider',
  },
  getItem('Sub Catagory', 'sub4', <GiCheckboxTree />, [
    getItem('Add SubCatagory ', '7', <AppstoreOutlined />,),
    getItem('All SubCatagory', '8', <AppstoreOutlined />,),
    
  ]),
  {
    type: 'divider',
  },
];

const Home = () => {
    const onClick = (e) => {
        console.log('click ', e);
      };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      mode="inline"
      items={items}
    />
  )
}

export default Home