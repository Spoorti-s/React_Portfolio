import React from 'react'
import styled, { useTheme } from "styled-components";
import { Link } from 'react-router-dom';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";



const Nav = styled.div`
background-color: ${({ theme }) => theme.bg};
height:80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 4;
@media screen and(max-width: 960px){
  transition: 0.8s all ease;
}
`;

const NavContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
`;

const NavLogo = styled(Link)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const Navlink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  background: transparent;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Buttoncontainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Mobileicon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Span =styled.div`
padding: 0 4px;
font-weight: bold;
font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? '100%' : '0')};
    z-index: ${({ open }) => (open ? '1000' : '-1000')};
`;

const MobileMenuLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme;
  return (
    <Nav>
      <NavContainer>
      <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <Mobileicon>
          <FaBars
          onClick={() => {
            setOpen(!open);
          }}/>
        </Mobileicon>
        <NavItems>
        <Navlink href="#about">About</Navlink>
          <Navlink href='#skills'>Skills</Navlink>
          <Navlink href='#experience'>Experience</Navlink>
          <Navlink href='#projects'>Projects</Navlink>
          <Navlink href='#certification'>Certifications</Navlink>
          <Navlink href='#education'>Education</Navlink>
        </NavItems>
        <Buttoncontainer>
          <GithubButton href="https://github.com/Spoorti-s">Github Profile</GithubButton>
        </Buttoncontainer>
      </NavContainer>
      {
        open && (
<MobileMenu open={open}>
<MobileMenuLink href="#about" onClick={() => {
              setOpen(!open)
            }}>About</MobileMenuLink>
            <MobileMenuLink href='#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileMenuLink>
            <MobileMenuLink href='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileMenuLink>
                <MobileMenuLink href='#certifications' onClick={() => {
              setOpen(!open)
            }}>Certifications</MobileMenuLink>
            <MobileMenuLink href='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileMenuLink>
            <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href="/" target="_blank">Github Profile</GithubButton>
</MobileMenu>
        )
          
      }
    </Nav>
  );
};

export default Navbar;
