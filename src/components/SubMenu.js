import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #1769aa;
    color: black;
    border-left: 4px solid bisque;
    cursor: pointer;
    text-decoration: none;
  }
`;

const NavbarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #1769aa;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #414757;
    color: #f5f5f5;
    text-decoration: none;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavbarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <NavbarLabel>{item.title}</NavbarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavbarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink /*onClick={()=>subnav(false)} by using this navbar closes on click */ to={item.path} key={index}>
              {item.icon}
              <NavbarLabel>{item.title}</NavbarLabel>
            </DropdownLink>
          ); 
        })}
    </>
  );
};

export default SubMenu;
