import React from "react"
import styled from 'styled-components'

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
	p {
		font-size: 1.4em;
		margin-top: 280px;
		margin-left: 150px;
	}
	h2 {
		margin-left: 350px;
		margin-top: -15px;
		font-size: 2.2em;
		font-weight: 100;
	}
	h1 {
		margin-left: 330px;
		margin-top: -35px;
		font-size: 3.5em;
	}
	@media (max-width: 600px) {
		p {
			margin-left: 40px;
		}
		h2 {
			margin-left: 120px;
		}
		h1 {
			margin-left: 100px;
		}
	}
`

export default () => (
	<Container>
		<p>Quality Seafood from</p>
		<h2>Atlantic</h2>
		<h1>Canada</h1>
	</Container>
)