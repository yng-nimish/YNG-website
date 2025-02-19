import React from "react";

import { FiArrowRight } from "react-icons/fi";

import BookImage from "file:///Users/nimishs/Documents/todo-front-end/src/images/Hard%20Cover%20Book.svg";
import AurhorImage from "file:///Users/nimishs/Documents/todo-front-end/src/images/image%204.svg";
import Flag1 from "file:///Users/nimishs/Documents/todo-front-end/src/images/Great%20Britain.svg";
import Flag2 from "file:///Users/nimishs/Documents/todo-front-end/src/images/USA.svg";
import Flag3 from "file:///Users/nimishs/Documents/todo-front-end/src/images/Canada.svg";
import "file:///Users/nimishs/Documents/Nav/nav/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CCard } from "@coreui/react";

import { CCardBody } from "@coreui/react";
import { CCardTitle } from "@coreui/react";
import { CCardText } from "@coreui/react";
import { CRow } from "@coreui/react";
import { CCol } from "@coreui/react";
import { CCardImage } from "@coreui/react";
import { Link } from "react-router-dom";

const BookData = [
  {
    image: Flag1,
    text: (
      <div>
        <a href="https://www.amazon.co.uk/Your-Number-Guaranteed-Conceived-Year/dp/1738172813/ref=sr_1_1?crid=LKM9G5NDTG4G&keywords=Your+Number+Guaranteed&qid=1701475241&sprefix=your+number+guaranteed%2Caps%2C77&sr=8-1">
          <button className="primary-button">
            {"  "}Buy Now{"  "}
            {"  "}
            {"  "}
            <FiArrowRight />
          </button>
        </a>
      </div>
    ),
  },
  {
    image: Flag2,
    text: (
      <div>
        <a href="https://www.amazon.com/Your-Number-Guaranteed-Conceived-Year/dp/1738172813/ref=sr_1_1?crid=LKM9G5NDTG4G&keywords=Your+Number+Guaranteed&qid=1701475241&sprefix=your+number+guaranteed%2Caps%2C77&sr=8-1">
          <button className="primary-button">
            {"  "}Buy Now{"  "}
            {"  "}
            {"  "}
            <FiArrowRight />
          </button>
        </a>
      </div>
    ),
  },
  {
    image: Flag3,
    text: (
      <div>
        <a href="https://www.amazon.ca/Your-Number-Guaranteed-Conceived-Year/dp/1738172813/ref=sr_1_1?crid=LKM9G5NDTG4G&keywords=Your+Number+Guaranteed&qid=1701475241&sprefix=your+number+guaranteed%2Caps%2C77&sr=8-1">
          <button className="primary-button">
            {"  "}Buy Now{"  "}
            {"  "}
            {"  "}
            <FiArrowRight />
          </button>
        </a>
      </div>
    ),
  },
];
const Book = () => {
  return (
    <div className="about-wrapper">
      <div className="about-us-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h7 className="primary-heading-welcome"> BUY AND READ OUR BOOK </h7>
            <h1 className="primary-heading">You Are Cordially Invited.</h1>
            <p className="primary-text">
              Join the inclusive membership in the community of Your Number
              Guaranteed. Membership is extended to every person who owns a Your
              Number Guaranteed SUN. Members will enjoy a lifetime of free
              benefits. Read our book and you can purchase your <br />
              SUN <FiArrowRight />
              (Set of Unique Numbers) here!
              <br /> <br /> <br />
            </p>
            <div className="button">
              <Link to="/purchase">
                <button className="about-button-2">
                  Get your SUN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FiArrowRight />
                </button>
              </Link>
            </div>
            <br /> <br /> <br />
          </div>
          <div className="bookImage-container">
            <img src={BookImage} alt="" />
          </div>
        </div>
      </div>
      <div className="partner-section-2">
        <div className="partner-card">
          <CCard color="white" className="mb-3 justify-content-md-centre">
            <CRow className="g-0">
              <CCol md={8}>
                <CCardBody className="pre-rectangle">
                  <CCardText>ABOUT THE AUTHOR</CCardText>
                  <CCardTitle>
                    <h1>Kevin Maloney</h1>
                  </CCardTitle>
                  <CCardText>
                    Kevin Maloney is a veteran of the construction industry
                    who’s love of mathematics led him to develop an absolutely
                    unique numerical product which is being used by individual
                    applications of education, entertainment, research,
                    cognitive health, and as a user interface security product.
                    Mathematical fluency allows the author to analyze complex
                    real-world issues and clearly focus on objective
                    understanding of these global issues. The product Your
                    Number Guaranteed is creating a global community, through
                    social media, of thoughtful members who are improving their
                    lives and those around them. <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </CCardText>
                </CCardBody>
              </CCol>
              <CCol md={4}>
                <CCardImage src={AurhorImage} />
              </CCol>
            </CRow>
          </CCard>
          <CCard color="white" className="mb-3">
            <CRow className="g-0">
              <CCol md={8}>
                <CCardBody className="pre-rectangle">
                  <CCardText>ABOUT THE BOOK</CCardText>
                  <CCardTitle>
                    <h1>Your Number Guaranteed, Conceived in the Year 2023</h1>
                  </CCardTitle>
                  <CCardText>
                    The book describes how a unique mathematical product, which
                    is a true random generated Set of Unique Numbers, which
                    comes with an unheard of One Million Dollar Guarantee, will
                    transform Learning, Education, Cognitive Health, Research,
                    Gaming, Recreational Games, Security and a fundamental
                    understanding of our place in time and community. The book
                    introduces members to a new community in focused social
                    media groups able to reach like minded individuals worldwide
                    in common respectful understanding of our successes and
                    challenges.
                  </CCardText>
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="Book-section">
        <div className="Book-Container">
          <h1 className="primary-heading-2"> Book links </h1>
          <p className="book-links-text">
            Each year we publish a book on Black Friday. This is a collection of
            our work in the past year, and a look forward to where we want to go
            in the next year. We will always encourage and include feedback from
            our members and partners.
          </p>
        </div>
        <div className="work-section-bottom">
          {BookData.map((data) => (
            <div className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
        <div className="partner-card-2">
          <CCard color="white" className="pre-rectangle-2">
            <CRow className="g-0">
              <CCol md={8}>
                <CCardBody className="pre-rectangle-2">
                  <CCardText></CCardText>
                  <CCardTitle></CCardTitle>
                  <CCardText className="book-links-text-2">
                    All rights reserved. No part of this publication may be
                    reproduced, distributed, or transmitted in any form or by
                    any means, including photocopying, recording, or other
                    electronic or mechanical methods without prior written
                    permission of the author, except in cases of brief
                    quotations embodied in critical reviews and certain other
                    non-commercial uses permitted by copyright law. <br />
                    Permission may be sought at: editor@yournumberguaranteed.com
                  </CCardText>
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
        </div>
      </div>
    </div>
  );
};

export default Book;
