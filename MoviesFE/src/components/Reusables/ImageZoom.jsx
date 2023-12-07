import React from "react";
import { Image } from "antd";

export default function ImageZoom(props) {
	return (
		<Image
			// width={200}
			preview={{
				imageRender: () => (
					<video
						muted
						width="50%"
						controls
						src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
					/>
				),
				toolbarRender: () => null,
			}}
			src={props.image}
		/>
	);
}
