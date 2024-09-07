'use client';

import React, { useCallback } from 'react';
import DomItem from './DomItem';
import { items } from '../lib/data';
import { iItem, iItemsBlockProps } from '../lib/Types';
import { filterByCategory, filterByRecommended, filterByStatus } from '../lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

const ItemsBlock = ({
	itemClassName,
	filterByChoice,
	filterByValue,
	leftButton,
	rightButton,
}: iItemsBlockProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		containScroll: 'trimSnaps',
		dragFree: true,
		watchFocus: true,
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	leftButton?.addEventListener('click', scrollPrev);
	rightButton?.addEventListener('click', scrollNext);

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
		<div className='embla' ref={emblaRef}>
			<div className='items-block embla_container'>
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
							className={`${itemClassName} item-card ${btnClass} embla__slide`}
							btnClass={btnClass}
							statusClass={statusClass}
							disabled={disabled}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ItemsBlock;
