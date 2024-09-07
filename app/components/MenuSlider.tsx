import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { iCategory, iItem } from '../lib/Types';
import { categories, items } from '../lib/data';

interface iSlide {
	category: iCategory;
	items: iItem[];
}

const MenuSlider = () => {
	const [slides, setSlides] = useState<iSlide[]>([]);
	// const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		const slide: iSlide = {
			category: { name: '', image: '' },
			items: [],
		};
		const slides: iSlide[] = [];

		const fetchData = async () => {
			const categories = await fetchCategories();
			const items = await fetchItems();

			console.log(categories);

			categories.forEach(async (category: iCategory) => {
				const categoryItems = items
					.filter((item) => item.category === category.name)
					.slice(0, 5);
				slide.category = category;
				slide.items = categoryItems;
				slides.push(slide);
			});

			setSlides(slides);
		};

		fetchData();
	}, []);

	if (slides.length == 0) {
		return <div>Loading...</div>;
	}

	return (
		<section id='slide-menu'>
			<div id='menu-slider'>
				{slides.map((slide: iSlide, index: number) => (
					<div key={index} className='slider-content'>
						<div className='left'>
							<div className='img-cont'>
								<div className='img-block'>
									<Image
										className='grow'
										src={`/images/${slide.category.image}`}
										alt=''
										width={400}
										height={400}
									/>
								</div>
							</div>
						</div>
						<div className='right slide-in'>
							<h1>{slide.category.name}</h1>
							<ul className='snack-list'>
								{slide.items.map((item: iItem, index: number) => (
									<li key={index}>
										<span>{item.name}</span>
										<span>R{item.price}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>

			<div className='slider-btns-block'>
				<button className='slider-btn' id='slider-btn-left'>
					&lt;
				</button>
				<button className='slider-btn' id='slider-btn-right'>
					&gt;
				</button>
			</div>
		</section>
	);
};

const fetchCategories = async (): Promise<iCategory[]> => {
	return categories.filter((category) => category.name !== 'all');
};

const fetchItems = async (): Promise<iItem[]> => {
	return items;
};

export default MenuSlider;
