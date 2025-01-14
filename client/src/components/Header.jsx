import chefLogo from '../assets/chef-icon.png'

export default function Header() {
	return (
		<header>
			<img className='logo' src={chefLogo} />
			<h1 className='brand'>Chef Wojtyla</h1>
		</header>
	)
}