import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { iItem } from '../lib/Types';

interface iDomItemProps {
	className: string;
	item: iItem;
	btnClass?: string;
	statusClass?: string;
	disabled?: boolean;
}

const DomItem: React.FC<iDomItemProps> = ({
	className,
	item,
	btnClass = 'clickable',
	statusClass,
	disabled,
}) => {
	return (
		<div className={className} key={item.id}>
			<div className='status-block'>
				<p className={`item-status ${statusClass}`}>
					{item.status === 'out-off-stock' ? (
						<i className='fas fa-times-circle'></i>
					) : (
						<i className='fas fa-check-circle'></i>
					)}
				</p>
			</div>

			<div className='img-block'>
				<Image src={`/images/${item.img}`} alt='' width={150} height={150} />
			</div>

			<div className='details'>
				<a href={`/pages/item.html?id=${item.id}`}>
					<h2 className='item-name'>{item.name}</h2>
				</a>

				<div className='buttons'>
					<span className='price-btn'>R{item.price}</span>
					<Link href={`/pages/item?id=${item.id}`}>
						<button disabled={disabled} className={`add-to-cart-btn ${btnClass}`}>
							Add to cart
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DomItem;
