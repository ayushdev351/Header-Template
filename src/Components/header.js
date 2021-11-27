import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Navbar>
        <NavbarLeft>
          <i class="fas fa-bars"> Hud Admin</i>
        </NavbarLeft>
        <NavbarCenter></NavbarCenter>
        <NavbarRight className="NavbarRight">
          <i className="fas fa-search search"></i>
          <i class="fas fa-bell"></i>
          <i class="fas fa-th"></i>
          <p>
            <i className="fas fa-user"></i>
            username@account.com
          </p>
        </NavbarRight>
      </Navbar>
    </>
  );
}

export default Header;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #020618;

  color: white;

  font-size: 1.1rem;
  padding: 3px;
  position: fixed;
  width: 100vw;
  z-index: 1000;
  opacity: 0.7;
`;

const NavbarLeft = styled.div`
  flex: 0.115;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bolder;
  flex-shrink: 100;
  color: #5fb282;
  padding-left: 8px;
`;

const NavbarCenter = styled.div`
  flex: 0.5;
  display: flex !important;
  justify-content: space-around;
  align-items: center;
`;

const NavbarRight = styled.div`
  flex: 0.4;
  display: flex;
  font-weight: normal;
  justify-content: space-around;
  align-items: center;
  padding-right: 30px;
`;

// const Button = styled.div`
//   color: black;
//   background-color: white;
//   border-radius: 8px;
//   padding: 5px;
//   width: 40%;
//   :hover {
//     cursor: pointer;
//     color: grey;
//   }
// `;
