import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { toggle } from '../../redux/menuSlice';
import { useSelector, useDispatch } from 'react-redux';

function Header(props) {
	const dispatch = useDispatch();
	const menu = useSelector((store) => store.menu.open);
	console.log(menu);

	const active = { color: '#4e6298' };
	return (
		<>
			<header className={`${props.type} myScroll`}>
				<div className='inner'>
					<h1>
						<NavLink exact to='/'>
							Portfolio
						</NavLink>
					</h1>
					<div className='menuWeb'>
						<ul id='gnb'>
							<li>
								<NavLink to='/department' activeStyle={active}>
									Department
								</NavLink>
							</li>
							<li>
								<NavLink to='/gallery' activeStyle={active}>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to='/youtube' activeStyle={active}>
									Youtube
								</NavLink>
							</li>
							<li>
								<NavLink to='/community' activeStyle={active}>
									Community
								</NavLink>
							</li>
							<li>
								<NavLink to='/location' activeStyle={active}>
									Location
								</NavLink>
							</li>
							<li>
								<NavLink to='/members' activeStyle={active}>
									Membership
								</NavLink>
							</li>
						</ul>

						<ul className='utill'>
							<li>
								<NavLink to='/'>Email wnekdns3054@naver.com</NavLink>
							</li>
							<li>
								<NavLink to='/'>Phone 010-2638-3054</NavLink>
							</li>
						</ul>
					</div>
					<FontAwesomeIcon
						icon={faBars}
						className={menu ? 'on' : ''}
						onClick={() => {
							dispatch(toggle());
						}}
					/>
				</div>
			</header>
		</>
	);
}

export default Header;
