import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import logo from '../images/logo.jpg'

const Wrapper = styled.div`
	background: #42b4e4;
	display: grid;
	grid-template-areas:
		"logo"
		"contact"
		"menu";
	@media (min-width: 1000px) {
		grid-template-areas:
			"contact logo"
			"contact logo"
			"menu menu";
		padding-left: 200px;
	}
	@media (min-width: 1300px) {
		padding-left: 400px;
	}
`
const Contact = styled.div`
	padding: 10px 10px 15px 15px;
	grid-area: contact;
	color: #fdfdfd;
	line-height: 0.4;
	@media (min-width: 1000px) {
		padding-top: 50px;
	}
`
const Menu = styled.div`
	grid-area: menu;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 1.2em;
	display: flex;
	flex-direction: column;
	padding: 10px 0 15px 10px;
	a {
		color: #fff;
		text-decoration: none;
		padding: 5px;
	}
	a:hover {
		color: lightgoldenrodyellow;
	}
	@media (min-width: 600px) {
		flex-direction: row;
		a {
			padding-right: 8px;
		}
	}
`
const Image = styled.div`
	padding: 17px;
	grid-area: logo;
	img {
		width: 100%;
		max-width: 400px;
		height: auto;
	}
	@media (min-width: 1000px) {
		img {
			margin-top: 15px;
		}
	}
`

export default () => (
	<Wrapper>
		<Contact>
			<p><strong>Seaboard Seafood Inc.</strong></p>
			<p>Sales Office: Ajax, ON. Canada</p>
			<p><strong>T</strong> 1.416.846.4990</p>
			<p><strong>F</strong> 1.905.427.8433</p>
			<p><strong>E</strong> johnkimseafood@gmail.com</p>
		</Contact>
		<Menu>
			<Link exact to="/" 
				activeStyle={{color: 'lightgoldenrodyellow'}}
			>Home</Link>
			<Link to="/aboutus" 
				activeStyle={{color: 'lightgoldenrodyellow'}}
			>About Us</Link>
			<Link to="/info"
				activeStyle={{color: 'lightgoldenrodyellow'}}
			>Info</Link>
			<Link to="/partners"
				activeStyle={{color: 'lightgoldenrodyellow'}}
			>Partners</Link>
			<Link to="/products"
				activeStyle={{color: 'lightgoldenrodyellow'}}
			>Products</Link>
			<Link to="/contact"
				activeStyle={{color: 'lightgoldenrodyellow'}}
			>Contact</Link>
		</Menu>
		<Image>
			<img src={logo} />
		</Image>
	</Wrapper>
)