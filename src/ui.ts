import styled from 'styled-components'

export const Wrapper = styled.div`
	margin: 0 5%;
`

export const Button = styled.button`
	background: linear-gradient(-135deg, #02e6ee, #1f3cce);
	border: none;
	padding: 5px 10px;
	color: white;
	font-weight: 500;
	outline: none;
	cursor: pointer;
`

export const TeamCard = styled.div`
	border: solid 1px #ddd;
	display: flex;
	flex-direction: column;

	h2 {
		margin: 10px 15px;

		&:hover {
			cursor: pointer;
		}
	}

	ul {
		list-style: none;
		display: flex;

		li {
			padding: 10px;
			text-align: center;
			text-transform: capitalize;

			&:hover {
				cursor: pointer;
			}
		}
	}
`

export const Heading = styled.h1`
	font-size: 38px;
	margin: 10px 0;
`

export const MoveItem = styled.div`
	display: flex;
	padding: 10px;
	border: solid 1px #ddd;
	cursor: pointer;

	img {
		width: 70px;
		margin: auto 0;
	}

	p {
		text-transform: capitalize;
		margin: auto 0 auto 15px;
	}
`

export const Searchbar = styled.input`
	padding: 10px;
	width: 100%;
	border-radius: 0;
	border: none;
	outline: none;
`

export const PokemonItem = styled.div`
	display: flex;
	padding: 10px;
	border: solid 1px #ddd;
	cursor: pointer;

	img {
		width: 70px;
		margin: auto 0;
	}

	p {
		text-transform: capitalize;
		margin: auto 0 auto 15px;
	}
`
