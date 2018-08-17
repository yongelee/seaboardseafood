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
	border: 1px solid rgba(0,0,0,.1);
	z-index: 2;
	background: #fff;
	width: 60%;
	padding: 50px;
	margin-bottom: 10px;
	p {
		font-size: 1.2em;
	}
	h1 {
		color: #42b4e4;
	}
	@media (min-width: 1000px) {
		padding-left: 75px;
		padding-bottom: 100px;
	}
`

export default () => (
	<Container>
		<InnerDiv>
			<br />
			<h1>
				비교할수 없는 신뢰와 명성
			</h1>
			<h1>
				Seaboard <strong>Seafood</strong> Inc.
			</h1>
			<br />
			<p>
			30년 역사, SEABOARD SEAFOOD 는…신선하고 청정한 캐나다 대서양산 수산물을 식품안전 규정과 검역절차에 따라 한국시장에 공급합니다.
			</p>

			<p>
			세계 최고의 프로세싱 시스템을 갖춘 정상급 파트너, 
			</p>

			<p>
			캐나다 뉴 펀들랜드의 BEOTHIC FISH PROCESSORS LTD 와  
			</p>

			<p>
			노바 스코시아의  KA’LE BAY SEAFOOD 가 함께 합니다. 
			</p>

			<p>
			BEOTHIC FISH PROCESSORS LTD., KA’LE BAY SEAFOOD는 각 상품에 따른 한국 식품안전 규정과 검역절차를 철저히 따를 것입니다.
			</p>
			
			<p>
			캐나다와 미국시장을 기반으로 SEABOARD SEAFOOD INC 는 한국시장을 위해 최상의 수산물을 안정적으로 공급할 것입니다.
			</p>
			<br />
			<p>
			대표 김 정국 / JUNG (JOHN) KIM 
			</p>
		</InnerDiv>
	</Container>
)