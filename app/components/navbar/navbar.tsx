'use client'
import Container from '../container'
import Logo from './logo'
import Search from './search'
import UserMenu from './menu'

const Navbar = () => {
	return (
		<div className='fixed w-full bg-white z-10 shadow-sm'>
			<div className='border-b-[1px]'></div>
			<Container>
				<div
					className='
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    py-4
                    '
				>
					<Logo />
					<Search />
					<UserMenu />
				</div>
			</Container>
		</div>
	)
}

export default Navbar
