import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className="footer">
			<hr />
			<h2>GifApp </h2>
			<div className="parrafo">
				<p>MartiyoDev - 2023</p>
				<a href="https://github.com/martiyoDev/apigif">
					<FaGithub className="icon" />
				</a>
			</div>
		</div>
	);
};
