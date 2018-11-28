import React from 'react';
import Link from 'next/link';
import Layout from 'components/layout/Layout';
import fetch from 'isomorphic-unfetch';
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardColumns,
	CardSubtitle,
	CardBody
} from 'reactstrap';

const Articles = props => (
	// console.log(props.shows);
	<Layout title="Batman TV Shows">
		<CardColumns>
			{props.shows.map(({ show }) => (
				<Card key={show.id}>
					<Link as={`/article/${show.id}`} href={`/article?id=${show.id}`}>
						<CardImg
							top
							width="100%"
							src={show.image.medium}
							alt="Card image cap"
						/>
					</Link>
					<CardBody>
						<CardTitle>
							<Link as={`/article/${show.id}`} href={`/article?id=${show.id}`}>
								<a>{show.name}</a>
							</Link>
						</CardTitle>
						<CardSubtitle className="pt-2 pb-2">
							Genre: {show.genres[0]}
						</CardSubtitle>
						<CardText>
							Rating: {show.rating.average} <br />
							Run Time: {show.runtime} min
						</CardText>
						<Link as={`/article/${show.id}`} href={`/article?id=${show.id}`}>
							<Button>Button</Button>
						</Link>
					</CardBody>
				</Card>
			))}
		</CardColumns>
	</Layout>
);
Articles.getInitialProps = async () => {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();

	// console.log(`Show data fetched. Count: ${data}`);

	return {
		shows: data
	};
};

export default Articles;
