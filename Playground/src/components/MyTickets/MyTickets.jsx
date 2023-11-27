import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/purchaseService";

export default function MyTickets() {
	const [userTickets, setUserTickets] = useState({});
	useEffect(() => {
		const fetchTickets = () => {
			const result = getAllTickets();
			setUserTickets(result);
			// console.log(result);
		};

		fetchTickets();
	}, []);
	return (
		<></>
		// <ul>
		// 	{userTickets.map((ticket) => (
		// 		<li key={ticket.id}>ticket.price</li>
		// 	))}
		// </ul>
	);
}

// TODO: CONTINUE FROM HERE
