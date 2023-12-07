import React from "react";
import { Card } from "antd";
import ImageZoom from "./ImageZoom";
const { Meta } = Card;

export default function DefaultCard(props) {
	return (
		<Card
			hoverable
			style={{
				width: 420,
			}}
			cover={
				// <img
				// 	alt="moviepic"
				// 	src={`https://image.tmdb.org/t/p/original${props.imgUrl}`}
				// />
				<ImageZoom
					image={`https://image.tmdb.org/t/p/original${props.imgUrl}`}
				/>
			}
		>
			<Meta title={props.title} description={props.description} />
			<p>Release date: {props.releaseDate}</p>
		</Card>
	);
}
