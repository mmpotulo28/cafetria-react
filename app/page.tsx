'use client';

import React from 'react';
import MenuSlider from './components/MenuSlider';
import ItemsBlock from './components/ItemsBlock';
import CategorySection from './components/CategorySection';

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
				<ItemsBlock
					itemClassName='recommended-item'
					filterByChoice='recommended'
					filterByValue='true'
				/>
			</section>

			<CategorySection />

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
