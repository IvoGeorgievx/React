import React from "react";
import { Flex, Spin } from "antd";

export default function LoadingSpinner() {
	return (
		<Flex align="center" gap="middle">
			<Spin size="large" fullscreen={true} />
		</Flex>
	);
}
