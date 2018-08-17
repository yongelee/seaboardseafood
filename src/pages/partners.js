import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-top: 20px;
	width: 100%;
	height: 50%;
`
const InnerDiv = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(0,0,0,.1);
	z-index: 2;
	background: #fff;
	padding: 20px 35px;
	margin-bottom: 10px;
	p {
		font-size: 1.2em;
	}
	@media (min-width: 1000px) {
		flex-direction: row;
	}
`
const InfoText = styled.div`
	color: #42b4e4;
	p {
		line-height: 0.9;
	}
`

export default () => (
	<Container>
		<InnerDiv>
			<InfoText>
				<h2>Partner Fish Plant</h2>
				<br />
				<p><strong>Beothic Fish Processors Ltd</strong></p>
				<p>Valleyfield, New Foundland, Canada</p>
				<br />
				<p><strong>Ka'le Bay Seafood Ltd</strong></p>
				<p>Grace Bay, Nova Scotia, Canada</p>
				<br />
				<p>Multi Species Plant and Primary Processing License</p>
				<p>Quality and Inspection:</p>
				<p>HACCP and CFIA (Canadian Food Inspection Agency) Approved.</p>
			</InfoText>
		</InnerDiv>
	</Container>
)