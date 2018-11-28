import React from 'react';
import Link from 'next/link';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

export class MainNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md" className="fixed-top">
					<Link prefetch href="/" passHref>
						<NavbarBrand>DeepCast.ai</NavbarBrand>
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link prefetch href="/" passHref>
									<NavLink>Home</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/about" passHref>
									<NavLink>About</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/articles" passHref>
									<NavLink>Articles</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default MainNav;
