import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import { H1, H2, H3, H4, H5, H6, P, A, Img } from 'components/general';

const BtnStyled = styled(Button)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 50px;
  padding: 1rem 1rem;
`;
const CardStyled = styled(Card)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const SubPage = () => (
  <Container>
    <h1>SubPage without Layout - Next.js</h1>
    <Link href="/">
      <a>Go Back Home</a>
    </Link>
    <hr />
    <Row>
      <Img src="https://video-react.js.org/assets/logo.png" alt="DeepCast" />
      <Col sm="12" md="12" lg="12">
        <H1 font="Courier New">This is a test of h1</H1>
        <H2>This is a test of h2 Tag</H2>
        <H3>This is a test of h3 Tag</H3>
        <H4>This is a test of h4 Tag</H4>
        <H5>This is a test of h5 Tag</H5>
        <H6>This is a test of h6 Tag</H6>
      </Col>
    </Row>
    <Row>
      <Col sm="12" md="12" lg="12">
        <P>This is a test of p Tag</P>
      </Col>
    </Row>
    <Row>
      <Col sm="12" md="12" lg="12">
        <A href="#!">This is a test of a Tag</A>
      </Col>
    </Row>
    <Row>
      <Col sm="6" md="4" lg="3">
        <BtnStyled color="primary">Primary BtnStyled</BtnStyled>
      </Col>
      <Col sm="6" md="4" lg="3">
        <BtnStyled color="secondary">Secondary BtnStyled</BtnStyled>
      </Col>
      <Col sm="6" md="4" lg="3">
        <BtnStyled color="success">Success BtnStyled</BtnStyled>
      </Col>
      <Col sm="6" md="4" lg="3">
        <BtnStyled color="warning">Warning BtnStyled</BtnStyled>
      </Col>
      <Col sm="6" md="4" lg="3">
        <BtnStyled color="info">Info BtnStyled</BtnStyled>
      </Col>
      <Col sm="6" md="4" lg="3">
        <BtnStyled color="danger">Danger BtnStyled</BtnStyled>
      </Col>
    </Row>
    <Row>
      <Col>
        <CardStyled
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333' }}
        >
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </CardStyled>
      </Col>
      <Col>
        <CardStyled body inverse color="primary">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="secondary">Button</Button>
        </CardStyled>
      </Col>
      <Col>
        <CardStyled body inverse color="secondary">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="secondary">Button</Button>
        </CardStyled>
      </Col>
      <Col>
        <CardStyled body inverse color="warning">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="secondary">Button</Button>
        </CardStyled>
      </Col>
      <Col>
        <CardStyled body inverse color="info">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="secondary">Button</Button>
        </CardStyled>
      </Col>
    </Row>
  </Container>
);

export default SubPage;
