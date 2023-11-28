import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/purchaseService";

export default function MyTickets() {
	const [userTickets, setUserTickets] = useState([]);
	useEffect(() => {
		const fetchTickets = () => {
			getAllTickets().then((result) => {
				setUserTickets(result);
			});
		};

		fetchTickets();
	}, []);

	console.log(userTickets);
	return (
		<ul>
			{userTickets.tickets &&
				userTickets.tickets.map((ticket) => (
					<li key={ticket.id}>{ticket.ticket_price}</li>
				))}
		</ul>
	);
}

// TODO: CONTINUE FROM HERE
