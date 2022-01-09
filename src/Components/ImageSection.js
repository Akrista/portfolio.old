import React from "react";
import styled from "styled-components";
import resume from "../img/logo.svg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Jorge Thomas</span>
        </h4>
        <p className="paragraph">
          A young Venezuelan raised in Guatire, who every day seeks to learn
          more about new technologies with which he can create tools to automate
          and improve the performance of daily activities, while still offering
          a comfortable experience for the user.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Jorge Thomas</p>
            <p>: 28</p>
            <p>: Venezuelan </p>
            <p>: Spanish, English </p>
            <p>: Caracas, Venezuela</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton
          title={
            <a
              href="https://drive.google.com/file/d/1koTYoj7yXDqKZHq71XEivQjpM8v8Ny8X/view?usp=sharing0"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          }
        ></PrimaryButton>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  @keyframes color-rotate {
    from {
      filter: hue-rotate(0deg);
    }

    to {
      filter: hue-rotate(360deg);
    }
  }
  .left-content {
    width: 100%;
    img {
      animation: color-rotate 5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      border-radius: 50%;
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
