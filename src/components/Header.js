import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../photoalbum.svg';

const Styles = styled.div`
	.navbar {
		background-color: black;
		font-family: 'Source Sans Pro', sans-serif;
		-webkit-box-shadow: 0 8px 6px -6px #999;
		-moz-box-shadow: 0 8px 6px -6px #999;
		box-shadow: 0 8px 6px -6px #999;
	}
	.navbar-brand {
		font-weight: bold;
		color: white;

		&:hover {
			color: #e6e6fa;
		}
	}
`;

export const Header = () => {
	return (
		<Styles>

			<Navbar bg="dark" expand="lg">
				<Navbar.Brand href="#home">
					<img
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>{' '}
					PHOTO ALBUM
				</Navbar.Brand>
			</Navbar>

		</Styles>
	);
};
