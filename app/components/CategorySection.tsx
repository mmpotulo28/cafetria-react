import React from 'react';
import ItemsBlock from './ItemsBlock';

const CategorySection: React.FC = () => {
	const [category, setCategory] = React.useState('All');
	const activeButton: { [key: string]: number } = React.useMemo(
		() => ({ 0: 1, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }),
		[],
	);
	const [activeButtons, setActiveButton] = React.useState(activeButton);

	const handleClick = React.useCallback(
		(category: string, index: number) => {
			const active = { ...activeButton };
			for (const key in active) {
				active[key] = 0;
			}
			active[index] = 1;

			setActiveButton(active);
			setCategory(category);
		},
		[activeButton],
	);

	const categoryButtons = [
		{ name: 'all', data: 'All' },
		{ name: 'fast-food', data: 'Fast Food' },
		{ name: 'snacks', data: 'Snacks' },
		{ name: 'cold-drinks', data: 'Cold Drinks' },
		{ name: 'meals', data: 'Meals' },
		{ name: 'healthy', data: 'Healthy' },
	];

	return (
		<section id='categories'>
			<h1 className='section-heading'>
				<i className='fa fa-bars'></i> Menu
			</h1>

			<div className='content'>
				<div className='category-block'>
					{categoryButtons.map((category, index) => (
						<button
							key={index}
							className='category'
							data-category={category.name}
							onClick={() => handleClick(category.data, index)}>
							{category.data}
							{activeButtons[index] === 1 && (
								<i className='fas fa-circle-check'></i>
							)}{' '}
						</button>
					))}
				</div>
				<ItemsBlock
					itemClassName='category-item'
					filterByChoice='category'
					filterByValue={category}
				/>
			</div>
		</section>
	);
};

export default CategorySection;
