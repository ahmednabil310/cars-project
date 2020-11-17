import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModelFields = props => {
	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			contentClassName='p-4 model__add__vehicle'
		>
			<Modal.Header closeButton className='border-bottom-0 pt-4'>
				<Modal.Title
					className='model__add__vehicle__title text-capitalize font-weight-bold'
					id='contained-modal-title-vcenter'
				>
					Add Vehicle
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div class='form-group'>
					<select
						class='form-control p-3 model__add__vehicle__select'
						id='exampleFormControlSelect1'
						style={{ height: 'auto' }}
						property='voucherCategoryClass'
					>
						<option value='' disabled selected>
							Select make
						</option>
						<option>1</option>
						<option>2</option>
					</select>
				</div>
				<div class='form-group'>
					<select
						class='form-control p-3 model__add__vehicle__select'
						id='exampleFormControlSelect1'
						style={{ height: 'auto' }}
						property='voucherCategoryClass'
						disabled
					>
						<option value='' disabled selected>
							Select year
						</option>
						<option>1</option>
						<option>2</option>
					</select>
				</div>
				<div class='form-group'>
					<select
						class='form-control p-3 model__add__vehicle__select'
						id='exampleFormControlSelect1'
						style={{ height: 'auto' }}
						property='voucherCategoryClass'
						disabled
					>
						<option value='' disabled selected>
							Select model
						</option>
						<option>1</option>
						<option>2</option>
					</select>
				</div>
				<div class='form-group'>
					<select
						class='form-control p-3 model__add__vehicle__select'
						id='exampleFormControlSelect1'
						style={{ height: 'auto' }}
						property='voucherCategoryClass'
						disabled
					>
						<option value='' disabled selected>
							Select engine
						</option>
						<option>1</option>
						<option>2</option>
					</select>
				</div>
			</Modal.Body>
			<Modal.Footer className='border-top-0'>
				<Button
					className='model__add__vehicle__btn btn-block'
					variant=''
					onClick={() => alert('Vehicle Add Successfully')}
				>
					Add Vehicle
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModelFields;
