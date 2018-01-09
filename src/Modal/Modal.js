import React, { Component } from 'react';

import './Modal.scss';

export default class Modal extends Component {
	render() {
		if (!this.props.point) return null;

		const data = this.props.point;
		const modalClassName = `modal ${this.props.isOpen ? 'modal--open' : 'modal--closed'}`;
		const photoSrc = data.photo ? data.photo : 'https://www.matchmyemail.com/wp-content/themes/nrg/images/userpic.png';

		return (
			<div 
				className={modalClassName}
				onClick={this.props.toggleModal}
			>
				<dialog 
					className='modal__box' 
					open={this.props.isOpen}
					onClick={event => event.stopPropagation()}
				>
					<button className='modal__close' onClick={event => {
						this.props.toggleModal();
						this.props.setTransform(1);
					}}>X</button>
					<div className='modal__row modal__row--half'>
						<img className='modal__userpic' src={photoSrc} alt={data.name} />
					</div>
					<div className='modal__row modal__row--half'>
						<h2 className='modal__title'>{data.name}</h2>
						<label className='modal__label'>Прямой руководитель</label>
						<p className='modal__value'>{data.name}</p>
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
						<p className='modal__value'>{data.phone || 'Нет данных'}</p>
					</div>
					<div className='modal__row modal__row--half'>
						<label className='modal__label'>Email</label>
						<p className='modal__value'>{data.email || 'Нет данных'}</p>
					</div>
				</dialog>
			</div>
		);
	}
}
