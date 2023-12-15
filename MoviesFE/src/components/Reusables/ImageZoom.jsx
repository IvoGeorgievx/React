import React from "react";
import { Image } from "antd";

export default function ImageZoom({ image, trailerKey }) {
	return (
		<Image
			preview={{
				imageRender: () => (
					<iframe
						width="50%"
						height="515"
						src={`https://www.youtube.com/embed/${trailerKey}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				),
				toolbarRender: () => null,
			}}
			src={image}
		/>
	);
}
