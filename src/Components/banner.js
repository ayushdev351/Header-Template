import React from "react";
import styled from "styled-components";

function Banner() {
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

export default Banner;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #383838;

  color: white;

  font-size: 1.1rem;
  padding: 10px;
  position: fixed;
  width: 100vw;
  z-index: 1000;
`;

const NavbarLeft = styled.div`
  flex: 0.115;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bolder;
  flex-shrink: 100;
  color: #5fb282;
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
