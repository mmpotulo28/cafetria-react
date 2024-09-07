import React from 'react';
import DomItem from './DomItem';
import { items } from '../lib/items';
import { iItem, iItemsBlockProps } from '../lib/Types';
import { filterByCategory, filterByRecommended, filterByStatus } from '../lib/utils';

const ItemsBlock = ({ itemClassName, filterByChoice, filterByValue }: iItemsBlockProps) => {
	let btnClass = '';
	let statusClass = '';
	let disabled = false;

	const filterItemsBy = ({ filterByChoice, filterByValue }: iItemsBlockProps) => {
		switch (filterByChoice) {
			case 'category':
				return filterByCategory(filterByValue, items);
			case 'status':
				return filterByStatus(filterByValue, items);
			case 'recommended':
				return filterByRecommended(filterByValue, items);
			default:
				return items;
		}
	};

	return (
		<div className='items-block'>
			{filterItemsBy({ filterByChoice, filterByValue }).map((item: iItem) => {
				if (item.status === 'in-stock') {
					btnClass = 'clickable';
					statusClass = 'in-stock';
					disabled = false;
				} else {
					btnClass = 'not-clickable';
					disabled = true;
					statusClass = 'out-of-stock';
				}

				return (
					<DomItem
						key={item.id}
						item={item}
						className={`${itemClassName} item-card ${btnClass}`}
						btnClass={btnClass}
						statusClass={statusClass}
						disabled={disabled}
					/>
				);
			})}
		</div>
	);
};

export default ItemsBlock;
