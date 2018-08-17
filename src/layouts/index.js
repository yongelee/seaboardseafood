import React from "react";
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import bglarge from '../images/bglarge.jpg'

import 'normalize.css'
import './styles.css'

const Container = styled.div`
	font-family: arial;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`
const ImageBg = styled.div`
	background-image: url(${bglarge});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 462px;
`

const Wrapper = ({ children }) => (
	<Container>
		<Helmet title="Seaboard Seafood Inc."
			meta={[
				{ name: 'description', content: 'Seaboard Seafood Inc. serving the finest fish Atlantic Canada has to offer.'}
			]}
		/>
		<Header />
		<ImageBg>
			{children()}
		</ImageBg>
		<Footer />
	</Container>
)

export default Wrapper