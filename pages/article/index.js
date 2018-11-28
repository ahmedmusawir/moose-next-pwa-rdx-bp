import React from 'react';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import fetch from 'isomorphic-unfetch';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Button
} from 'reactstrap';

const Article = props => (
  <Layout>
    <Container>
      <Card>
        <Row>
          <Col sm="4">
            <CardImg
              top
              width="100%"
              src={props.show.image.medium}
              alt="Card image cap"
            />
          </Col>
          <Col sm="8">
            <CardBody>
              <CardTitle>{props.show.name}</CardTitle>
              <CardText>{props.show.summary.replace(/<[/]?p>/g, '')}</CardText>
              <Link href="/articles">
                <Button>Back</Button>
              </Link>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  </Layout>
);

Article.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Article;
