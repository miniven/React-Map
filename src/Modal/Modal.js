import React, { Component } from 'react';

import './Modal.scss';

export default class Modal extends Component {
	render() {
		if (!this.props.data) return null;

		const modalClassName = `modal ${this.props.isOpen ? 'modal--open' : 'modal--closed'}`;

		return (
			<div 
				className={modalClassName}
				onClick={this.props.toggleModal}
			>
				<dialog className='modal__box' open={this.props.isOpen}>
					<div className='modal__row modal__row--half'>
						<img src='' alt={this.props.data.name} />
					</div>
					<div className='modal__row modal__row--half'>
						<h2 className='modal__title'>{this.props.data.name}</h2>
						<label className='modal__label'>Прямой руководитель</label>
						<p className='modal__value'>{this.props.data.name}</p>
					</div>
					<div className='modal__row'>
						<label className='modal__label'>Должность</label>
						<p className='modal__value'>{this.props.data.post}</p>
					</div>
					<div className='modal__row'>
						<label className='modal__label'>Отдел</label>
						<p className='modal__value'>{this.props.data.division}</p>
					</div>
					<div className='modal__row modal__row--half'>
						<label className='modal__label'>Телефон</label>
						<p className='modal__value'>{this.props.data.division}</p>
					</div>
					<div className='modal__row modal__row--half'>
						<label className='modal__label'>Email</label>
						<p className='modal__value'>{this.props.data.division}</p>
					</div>
				</dialog>
			</div>
		);
	}
}
