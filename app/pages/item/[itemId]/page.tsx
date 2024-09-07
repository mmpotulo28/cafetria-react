'use client';

import { filterById } from '@/app/lib/utils';
import { items } from '@/app/lib/data';
import { iItem } from '@/app/lib/Types';
import React from 'react';
import ViewItemBlock from '../components/ViewItemBlock';
import '@/app/css/pages.css';
import ItemsBlock from '@/app/components/ItemsBlock';

interface Props {
	params: {
		itemId: string;
	};
}

const Page: React.FC<Props> = ({ params }) => {
	const item: iItem[] = filterById(Number(params.itemId), items);

	return (
		<>
			<section className='view-item-block'>
				<ViewItemBlock btnClass='' item={item[0]} statusClass='' />
			</section>
			<section className='similar-items-sec'>
				<div className='top-block'>
					<h1 className='sec-heading' id='similar-item-heading'>
						<i className='fa fa-tags'></i> Similar Items
					</h1>
					<div className='btns-block'>
						<button className='similar-btn' id='prev'>
							<i className='fa fa-chevron-left'></i>
						</button>
						<button className='similar-btn' id='next'>
							<i className='fa fa-chevron-right'></i>
						</button>
					</div>
				</div>

				<ItemsBlock
					itemClassName='similar-items'
					filterByChoice='category'
					filterByValue={item[0]?.category}
					leftButton={document.getElementById('prev')}
					rightButton={document.getElementById('next')}
				/>
			</section>
		</>
	);
};

export default Page;
