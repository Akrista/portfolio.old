import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <a href="https://github.com/Akrista" target="_blank" rel="noreferrer">
          <img src={avatar} alt="avatar" />
        </a>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <a
          href="https://github.com/Akrista"
          target="_blank"
          className="icon i-github"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/akrista/"
          target="_blank"
          className="icon i-linkedin"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.youtube.com/user/VladAkrista"
          target="_blank"
          rel="noreferrer"
          className="icon i-youtube"
        >
          <YouTubeIcon />
        </a>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
.avatar {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    img {
    width: 70%;
    border-radius: 50%;
    border: 8px solid var(--border-color);
    }
}

.nav-items {
    width: 100%;
    text-align: center;
    .active-class {
    background-color: var(--primary-color-light);
    color: white;
    border-radius: 4%;
    }
    li {
    display: block;
    a {
        font-size: 1.3rem;
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
        cursor: pointer;
        color: var(--white-color);
        }
        &::before {
        border-radius: 4%;
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 50%;
        background-color: var(--primary-color);
        transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
        opacity: 0.21;
        z-index: -1;
        }
    }

    a:hover::before {
        width: 100%;
        height: 100%;
    }
    }
}

.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
        color: var(--primary-color);
    }
    &:not(:last-child) {
        margin-right: 1rem;
    }
    svg {
        margin: 0.5rem;
    }
    }
.i-youtube {
    &:hover {
    color: red;
    }
}
.i-github {
    &:hover {
    color: #5f4687;
    }
}
`;
export default Navigation;
