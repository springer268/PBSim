import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 110px auto;
`

export const Heading = styled.h1`
	font-size: 38px;
	margin: 15px 0;
`

export const Wrapper = styled.div`
	margin: 0 60px 0 36px;
`

export const Button = styled.button`
	background: var(--bg-main);
	border: none;
	padding: 5px 10px;
	color: white;
	font-weight: 500;
	outline: none;
	cursor: pointer;
	margin: 15px 0;
	display: block;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
`

export const Searchbar = styled.input`
	padding: 10px;
	width: 100%;
	border-radius: 0;
	border: solid 1px #ddd;
	outline: none;
`

export const Select = styled.select<{ marginless?: boolean }>`
	padding: 5px 10px;
	min-width: 200px;
	margin: ${props => (props.marginless ? '0' : '15px 0')};

	option {
		padding: 10px;
	}
`
