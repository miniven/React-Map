import React, { Component } from 'react';

import './Modal.scss';

// Components //

import LazyImage from '../LazyImage/LazyImage';

export default class Modal extends Component {

	render() {
		if (!this.props.data) return null;

		const data = this.props.data;
		const modalClassName = `modal ${this.props.open ? 'modal--open' : 'modal--closed'}`;
		const photoSrc = data.profile ? data.profile.image_512 : null;

		return (
			<div 
				className={modalClassName}
				onClick={this.props.toggleModal}
			>
				<dialog 
					className='modal__box' 
					open={this.props.open}
					onClick={event => event.stopPropagation()}
				>
					<button 
						className='modal__close' 
						onClick={event => {
							this.props.toggleModal();
						}}
					></button>
					<div className='modal__row modal__row--half'>
						<LazyImage className='modal__userpic' src={photoSrc} name={data.name} isVisible={this.props.open}/>
					</div>
					<div className='modal__row modal__row--half'>
						<h2 className='modal__title'>{data.name}</h2>
						{
							this.props.chief && (
								<div>
									<label className='modal__label'>Прямой руководитель</label>
									<p className='modal__value'>{this.props.chief.name}</p>
								</div>
							)
						}
					</div>
					<div className='modal__row'>
						<label className='modal__label'>Должность</label>
						<p className='modal__value'>{data.post}</p>
					</div>
					<div className='modal__row'>
						<label className='modal__label'>Отдел</label>
						<p className='modal__value'>{data.division}</p>
					</div>
					<div className='modal__row modal__row--half'>
						<label className='modal__label'>Телефон</label>
						<p className='modal__value'>{data.profile ? data.profile.phone : 'Нет данных'}</p>
					</div>
					<div className='modal__row modal__row--half'>
						<label className='modal__label'>Email</label>
						<p className='modal__value'>{data.profile ? data.profile.email : 'Нет данных'}</p>
					</div>
				</dialog>
			</div>
		);
	}
}
