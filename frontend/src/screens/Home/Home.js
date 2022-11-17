import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, FormGroup, Input, InputGroup, InputGroupText } from 'reactstrap';
import Helmet from '../../components/Helmet';
import './Home.css';
import '../../App.css';
import { Icon } from '@iconify/react';

import Team1Img from '../../assets/team1.png';
import Team2Img from '../../assets/team2.png';
import Team3Img from '../../assets/team3.png';
import data from '../../data.js';

function Home() {
  return (
    <Helmet title="Home">
      <div className="Home">
        {/* Header section */}
        <div className="header__section w-100">
          <Container className="header__section__content d-flex flex-column align-items-center justify-content-center">
            <h3>This landscape is beautiful right?</h3>
            <h1>That's the beauty of nature.</h1>

            <div className="d-flex align-items-center gap-5">
              <a href="#cata">
                <button type="button" className="button__tertiary">
                  Explore Nature
                </button>
              </a>

              <a href="#join">
                <button type="button" className="button__secondary">
                  Get Started
                </button>
              </a>
            </div>
          </Container>
        </div>

        {/* Community section */}
        <Container id="community" className="community__section mt-5">
          <Row className="d-flex align-items-center">
            <Col md={8} className="d-flex flex-column justify-content-center">
              <div className="community__content d-flex flex-column gap-3">
                <h6>01. The Community</h6>
                <h3>
                  Join the fastest growing community filled with nature lovers.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <a href="#community">
                  <button type="button" className="button__primary gap-2">
                    View Community
                    <Icon icon="akar-icons:arrow-right" />
                  </button>
                </a>
              </div>
            </Col>
            <Col md={4} className="community__images">
              <div className="teamImg__box1">
                <img src={Team1Img} alt="team" />
              </div>
              <div className="teamImg__box2">
                <img src={Team2Img} alt="team" />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Customers section */}
        <div className="recommendation__section">
          <Container>
            <Row className="d-flex align-items-center">
              {data.recommendations.map((item) => (
                <Col
                  md={4}
                  key={item.id}
                  className="d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="img__box">
                    <img src={item.imgUrl} alt={item.name} />
                  </div>
                  <div className="content__box">
                    <p>{'"' + item.message + '" - ' + item.name}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="d-flex align-items-center justify-content-center mt-5">
              <button className="button__secondary gap-2">
                <a href="#t">
                  View More <Icon icon="akar-icons:arrow-right" />
                </a>
              </button>
            </div>
          </Container>
        </div>

        {/* Projects section */}
        <div id="projects" className="projects__section">
          <Container className="projects__box">
            <h6>02. Projects</h6>
            <Row className=" mt-5">
              {data.projects.map((item) => (
                <Col
                  md={6}
                  key={item.id}
                  className=" d-flex align-items-center justify-content-center"
                >
                  <div
                    className="project__card d-flex flex-column h-100"
                    style={{ background: item.color }}
                  >
                    <div className="project-img__box">
                      <img src={item.imgUrl} alt={item.title} />
                    </div>

                    <div className="project-content__box d-flex flex-column gap-1 px-4 pt-1 pb-4">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                      <button
                        className="project__button gap-2"
                        style={{ background: item.button_color }}
                      >
                        View Project <Icon icon="akar-icons:arrow-right" />
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <button className="button__forth gap-2 d-flex align-items-center mt-5">
              View more projects
              <Icon icon="akar-icons:arrow-right" />
            </button>
          </Container>
          <div className="projects__color-back"></div>
        </div>

        {/* Team section */}
        <Container id="team" className="mb-5 ">
          <Row className="d-flex align-items-center">
            <Col md={8}>
              <div className="community__content d-flex flex-column gap-3">
                <h6>03. The team behind the journey</h6>
                <h3>
                  The team is filled with people who will guide you through
                  everything.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </Col>
            <Col
              md={4}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="team__section_img">
                <img src={Team3Img} alt="Team" />
              </div>
            </Col>
          </Row>
        </Container>

        {/* management__section */}
        <div className="management__section">
          <Container>
            <Row>
              {data.management.map((item) => (
                <Col md={3} key={item.id} className="management__card">
                  <div className="manager__img_box">
                    <img src={item.imgUrl} alt={item.name} />
                  </div>
                  <h2>{item.name}</h2>
                  <h5>{item.title}</h5>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* Newsletter section */}
        <Container id="contact" className="newsletter__section">
          <Row className="">
            <Col
              md={5}
              className="community__content d-flex flex-column align-content-center gap-3"
            >
              <h6>04. Get updates when we upload new opportunities</h6>
              <h3>Sign up for our newsletter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
            </Col>
            <Col md={2} className="line__col">
              <div className="line__separater"></div>
            </Col>

            <Col md={5} className="form__col">
              <Form className="form">
                <FormGroup>
                  <InputGroup>
                    <InputGroupText>
                      <Icon icon="mdi:account" />
                    </InputGroupText>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      name="fullname"
                      required
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <InputGroupText>
                      <Icon icon="entypo:mail" />
                    </InputGroupText>
                    <Input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      required
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <InputGroupText>
                      <Icon icon="carbon:phone-filled" />
                    </InputGroupText>
                    <Input
                      type="text"
                      placeholder="Enter your number"
                      name="phonenumber"
                      required
                    />
                  </InputGroup>
                </FormGroup>

                <button className="button__forth">
                  <Icon icon="carbon:send-alt-filled" />
                  <span>Send</span>
                </button>
              </Form>
            </Col>
          </Row>
        </Container>

        {/* Footer section */}
        <Container className="footer__section">
          <Row className="footer__section_content">
            <Col md={4}>
              <div>
                2022 <span>&copy;</span> All rights reserved
              </div>
            </Col>
            <Col md={4}>Designed by Siyanda</Col>
            <Col md={4}>
              <div>
                <Icon icon="ri:facebook-box-fill" />
                <Icon icon="ant-design:twitter-square-filled" />
                <Icon icon="ri:instagram-fill" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Helmet>
  );
}

export default Home;
