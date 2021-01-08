import React, { Fragment } from 'react';

const LoadingPage = props => {
	const style = {
		zIndex: 2,
		width: '150px',
		height: '150px',
		border: '16px solid #f3f3f3',
		borderRadius: '50%',
		borderTop: '16px solid #3498db',
		width: '120px',
		height: '120px',
		//-webkit-animation: 'spin 2s linear infinite',
		animation: 'spin 2s linear infinite',
	};

	return (
		<Fragment>
			<div
				className="vw-100 vh-100 position-absolute d-flex justify-content-center align-items-center bg-white"
				style={{
					left: '0',
					top: '0',
					bottom: '0',
					right: '0',
				}}
			>
				<div style={style}></div>
			</div>
		</Fragment>
	);
};

export default LoadingPage;
