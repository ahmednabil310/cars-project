const SingleCompare = ({ mainTitle, width, secondTitle, textColor }) => {
	return (
		<>
			<div className="compare-main-content d-flex justify-content-between">
				<div className="title__border w-100">
					<h1 className="compare-title">
						<span style={{ color: '#D53535' }}>{mainTitle}</span>{' '}
						<span style={{ color: textColor }}>{secondTitle}</span>
					</h1>
				</div>
				{/* <svg
					id="Component_6_3"
					data-name="Component 6 – 3"
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height="36.969"
					viewBox={`0 0 ${width} 36.969`}
				>
					<defs>
						<linearGradient
							id="linear-gradient"
							x1="0.5"
							x2="0.5"
							y2="1"
							gradientUnits="objectBoundingBox"
						>
							<stop offset="0" stopColor="#d53535" />
							<stop offset="1" stopColor="#6b1b1b" />
						</linearGradient>
						<linearGradient
							id="linear-gradient-2"
							x1="0.777"
							x2="0.777"
							y2="1.686"
							gradientUnits="objectBoundingBox"
						>
							<stop offset="0" stopColor="#efefef" />
							<stop offset="1" stopColor="#c4c4c4" />
						</linearGradient>
					</defs>
					<path
						id="Path_52"
						data-name="Path 52"
						d="M-940,0H42L62,33.969H-940Z"
						transform="translate(940)"
						fill="url(#linear-gradient)"
					/>
					<path
						id="Path_53"
						data-name="Path 53"
						d="M-940,0,59.808.207l3.921,6.566L-940,6.958Z"
						transform="translate(940 30.01)"
						fill="url(#linear-gradient-2)"
					/>
				</svg> */}
			</div>
		</>
	);
};

export default SingleCompare;
