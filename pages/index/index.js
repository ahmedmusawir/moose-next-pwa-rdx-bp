import React from 'react';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import {
	Container,
	Row,
	Col,
	Button,
	Jumbotron,
	Alert,
	ListGroup,
	ListGroupItem
} from 'reactstrap';

const Index = () => (
	<Layout title="Home Page">
		<Jumbotron>
			<h1 className="display-4">Next.js - PWA Boilerplate</h1>
			<p className="lead">React on Steroids ...</p>
			<hr className="my-2" />

			<p className="lead">
				<Link href="/about">
					<Button color="primary">Check out the Styles</Button>
				</Link>
			</p>
		</Jumbotron>
		<Container>
			<Row>
				<Col sm="6">
					<Alert color="success">Here is what are included:</Alert>
					<ListGroup>
						<ListGroupItem>Redux</ListGroupItem>
						<ListGroupItem>Redux Saga</ListGroupItem>
						<ListGroupItem>Styled Components</ListGroupItem>
						<ListGroupItem>Express</ListGroupItem>
						<ListGroupItem>Next Routes</ListGroupItem>
						<ListGroupItem>ReactStrap</ListGroupItem>
					</ListGroup>
				</Col>
				<Col sm="6">
					<Alert color="danger">Here is what are NOT included:</Alert>
					<ListGroup>
						<ListGroupItem>Immutable JS</ListGroupItem>
						<ListGroupItem>SASS</ListGroupItem>
						<ListGroupItem>Jest/Enzyme</ListGroupItem>
						<ListGroupItem>Helmet JS</ListGroupItem>
						<ListGroupItem>Language Translation</ListGroupItem>
						<ListGroupItem>Reselect</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default Index;
