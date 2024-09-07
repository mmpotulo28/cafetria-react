'use client';

import React from 'react';
import '@/app/css/pages.css';
import ItemsBlock from '@/app/components/ItemsBlock';
import ViewItemBlock from './components/ViewItemBlock';
import { filterById } from '@/app/lib/utils';
import { items } from '@/app/lib/data';
import { iItem } from '@/app/lib/Types';

interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;
	console.log('id: ', id);
	const item: iItem[] = filterById(Number(2), items);

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
				<ItemsBlock filterByChoice='category' filterByValue={'Fast Food'} />
			</section>
		</>
	);
}
