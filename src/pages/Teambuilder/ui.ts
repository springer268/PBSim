import styled from 'styled-components'

export const Navbar = styled.nav`
	display: flex;
	width: 100%;
	height: 50px;
	background: var(--bg-main);
	justify-content: space-between;

	h1 {
		margin: auto 15px;
		color: #fff;
	}

	button {
		width: 100px;
		font-size: 18px;
		cursor: pointer;
	}
`

export const Wrapper = styled.div`
	margin: 0 5%;
`

export const Button = styled.button`
	background: var(--bg-main);
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

	.top {
		display: flex;
		justify-content: space-between;

		h2 {
			margin: 10px 15px;

			&:hover {
				cursor: pointer;
			}
		}

		i {
			margin: auto 15px auto 0;
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

	p.fallback {
		margin: 0px 0px 15px 15px;
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

export const CurrentTeamNav = styled.nav`
	display: flex;
	border-bottom: solid 1px #ddd;

	button {
		margin: auto 15px;
	}

	ul {
		display: flex;
		list-style: none;

		li {
			display: flex;
			flex-direction: column;
			padding: 5px 10px;
			border-left: solid #ccc 1px;
			cursor: pointer;

			&:nth-last-of-type(1) {
				border-right: solid #ccc 1px;
				width: 85px;

				i {
					margin: auto;
					transform: scale(1.1);
				}
			}

			img {
				margin: auto;
				width: 50px;
			}

			p {
				text-transform: capitalize;
				text-align: center;
			}
		}
	}
`

export const PokemonStage = styled.div`
	display: flex;
	height: 155px;
	padding-top: 15px;
	border: solid 1px #ddd;

	div {
		margin-right: 8px;
	}

	.form-control {
		display: flex;
		flex-direction: column;

		label {
			font-weight: 500;
		}

		input {
			margin-top: 3px;
			padding: 1px 3px;
		}
	}

	.pokemon-img {
		margin: -13px 0;
		margin-left: 20px;
		margin-right: 15px;
		display: flex;
		flex-direction: column;
		width: 100px;
		height: 100px;
	}
`
