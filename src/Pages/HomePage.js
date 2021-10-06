import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
// import Particle from '../Components/Particle';

function HomePage() {
  return (
    <HomePageStyled>
      {/* <div className="particle-con">
                <Particle />
            </div> */}
      <div className="typography">
        <h1>
          Hi, I'm <span>Jorge Thomas</span>
        </h1>
        <p>
          Hey, i'm a student from Venezuela who looks to learn a lot, i try to
          use every free second of my third world life to learn new things that
          i can apply on my jobs, that way i can earn more money and hopefully
          have a simple life.
        </p>
        <div className="icons">
          <a href="#" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="#" className="icon i-youtube">
            <YoutubeIcon />
          </a>
          <a href="#" className="icon i-facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
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
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
