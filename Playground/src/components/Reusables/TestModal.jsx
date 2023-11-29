import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function TestModal(ticket) {
	{
		const [isModalOpen, setIsModalOpen] = useState(true);
		const showModal = () => {
			setIsModalOpen(true);
		};
		const handleOk = () => {
			setIsModalOpen(false);
		};
		const handleCancel = () => {
			setIsModalOpen(false);
		};
		return (
			<>
				{/* <Button type="primary" onClick={showModal}>
					Open Modal
				</Button> */}
				<Modal
					title="Basic Modal"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<p>You successfully purchased a ticket!</p>
				</Modal>
			</>
		);
	}
}
