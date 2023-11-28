import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/purchaseService";
import Spinner from "react-bootstrap/Spinner";

export default function MyTickets() {
	const [userTickets, setUserTickets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchTickets = async () => {
			getAllTickets().then((result) => {
				setUserTickets(result.tickets);
			});
		};

		fetchTickets();
		setIsLoading(false);
	}, []);

	console.log(userTickets);
	return (
		<ul>
			{userTickets.map((ticket) => (
				<li key={ticket.id}> {ticket.ticket_price} </li>
			))}
		</ul>
	);
}
