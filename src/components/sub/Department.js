import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Anime from '../../asset/anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

function Department() {
	const path = process.env.PUBLIC_URL;
	const [Member, setMember] = useState([]);
	const slide = useRef(null);

	const init = () => {
		const panel = slide.current.children[0];
		const lis = panel.querySelectorAll('li');
		const len = lis.length;
		panel.style.width = 100 * len + '%';
		lis.forEach((el) => {
			el.style.width = 100 / len + '%';
		});
		panel.prepend(panel.lastElementChild);
	};
	const nextSlide = () => {
		const panel = slide.current.children[0];

		new Anime(panel, {
			prop: 'margin-left',
			value: '-200%',
			duration: 500,
			callback: () => {
				panel.append(panel.firstElementChild);
				panel.style.marginLeft = '-100%';
			},
		});
	};
	const prevSlide = () => {
		const panel = slide.current.children[0];

		new Anime(panel, {
			prop: 'margin-left',
			value: '0%',
			duration: 500,
			callback: () => {
				panel.prepend(panel.lastElementChild);
				panel.style.marginLeft = '-100%';
			},
		});
	};

	useEffect(() => {
		init();
		axios.get(`${path}/DB/members.json`).then((json) => {
			setMember(json.data.members);
		});
	}, [path]);

	useEffect(() => {}, [Member]);

	return (
		<Layout name={'Department'}>
			<div id='slider' ref={slide}>
				<ul className='panel'>
					<li className='s1'>
						<div className='pic'></div>
						<div className='txt'>
							<h2>Lorem, ipsum.</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci a voluptatem vero, tenetur, deleniti tempore velit quae
								aut rerum nostrum ea fugiat obcaecati excepturi, temporibus provident reprehenderit placeat repudiandae. Dolores laborum sequi
								ratione, magnam voluptas ad tempora officiis quam quia accusantium ipsam adipisci molestias, reiciendis, iure aut repudiandae
								distinctio?
							</p>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime labore tempora illum necessitatibus, numquam animi ex sed dolore
								alias obcaecati iusto est laudantium dolores harum voluptate eligendi officia! Ipsa.
							</span>
						</div>
					</li>
					<li className='s2'>
						<div className='pic'></div>
						<div className='txt'>
							<h2>Lorem, ipsum.</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci a voluptatem vero, tenetur, deleniti tempore velit quae
								aut rerum nostrum ea fugiat obcaecati excepturi, temporibus provident reprehenderit placeat repudiandae. Dolores laborum sequi
								ratione, magnam voluptas ad tempora officiis quam quia accusantium ipsam adipisci molestias, reiciendis, iure aut repudiandae
								distinctio?
							</p>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime labore tempora illum necessitatibus, numquam animi ex sed dolore
								alias obcaecati iusto est laudantium dolores harum voluptate eligendi officia! Ipsa.
							</span>
						</div>
					</li>
					<li className='s3'>
						<div className='pic'></div>
						<div className='txt'>
							<h2>Lorem, ipsum.</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci a voluptatem vero, tenetur, deleniti tempore velit quae
								aut rerum nostrum ea fugiat obcaecati excepturi, temporibus provident reprehenderit placeat repudiandae. Dolores laborum sequi
								ratione, magnam voluptas ad tempora officiis quam quia accusantium ipsam adipisci molestias, reiciendis, iure aut repudiandae
								distinctio?
							</p>
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit maxime labore tempora illum necessitatibus, numquam animi ex sed dolore
								alias obcaecati iusto est laudantium dolores harum voluptate eligendi officia! Ipsa.
							</span>
						</div>
					</li>
				</ul>

				<div className='btnSet'>
					<button className='prev' onClick={prevSlide}>
						<FontAwesomeIcon icon={faCircleLeft} />
					</button>
					<button className='next' onClick={nextSlide}>
						<FontAwesomeIcon icon={faCircleRight} />
					</button>
				</div>
			</div>
			{Member.map((data, idx) => {
				return (
					<article key={idx}>
						<div className='inner'>
							<div className='pic'>
								<img src={`${path}/img/${data.pic}`} alt={data.name} />
							</div>
							<div className='txt'>
								<h3>{data.name}</h3>
								<p>{data.position}</p>
							</div>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;
