import React from "react";
import { Image } from "antd";

export default function ImageZoom({ image, trailerKey }) {
	return (
		<Image
			// width={200}
			preview={{
				imageRender: () => (
					<video width="40%" muted controls src={trailerKey} />
				),
				toolbarRender: () => null,
			}}
			src={image}
		/>
	);
}
