'use client';

import React from 'react';
import MenuSlider from './components/MenuSlider';

export default function Home() {
	return (
		<main>
			<section id='slide-menu'>
				{<MenuSlider />}
				<div className='slider-btns-block'>
					<button className='slider-btn' id='slider-btn-left'>
						&lt;
					</button>
					<button className='slider-btn' id='slider-btn-right'>
						&gt;
					</button>
				</div>
			</section>

			<section id='recommended'>
				<h1 className='section-heading'>Recommended</h1>
				<div className='items-block'></div>
			</section>

			<section id='categories'>
				<h1 className='section-heading'>
					<i className='fa fa-bars'></i> Menu
				</h1>

				<div className='content'>
					<div className='category-block'>
						<button className='category' data-category='All'>
							All
						</button>
						<button className='category' data-category='Fast Food'>
							Fast Food
						</button>
						<button className='category' data-category='Snacks'>
							Snacks
						</button>
						<button className='category' data-category='Cold Drinks'>
							Cold Drinks
						</button>
						<button className='category' data-category='Meals'>
							Meals
						</button>
						<button className='category' data-category='Healthy'>
							Healthy
						</button>
					</div>
					<div className='items-block'></div>
				</div>
			</section>

			{/* sponsors */}
			<section id='sponsors'>
				<div className='sponsors-block'>
					<div className='sponsor'>
						<img src='/images/cput-logo.png' alt='sponsor1' />
					</div>
					<div className='sponsor'>
						<img src='/images/nedbank-log.png' alt='sponsor2' />
					</div>
					<div className='sponsor'>
						<img src='/images/varsityvibe-log.png' alt='sponsor3' />
					</div>
					<div className='sponsor'>
						<img src='/images/mastercard-logo.png' alt='sponsor4' />
					</div>
					<div className='sponsor'>
						<img src='/images/score-logo.png' alt='sponsor5' />
					</div>
				</div>
			</section>
		</main>
	);
}
