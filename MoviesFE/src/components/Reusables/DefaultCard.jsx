import React, { useState } from "react";
import { Card } from "antd";
import ImageZoom from "./ImageZoom";
const { Meta } = Card;
import { useEffect } from "react";

const TMDB_KEY = "c247d100358dd974a7c98cc26e2bf61a";
const TMDB_KEY1 =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjQ3ZDEwMDM1OGRkOTc0YTdjOThjYzI2ZTJiZjYxYSIsInN1YiI6IjY0MmFkMTVmYTNlNGJhMzY0YTI1ZGMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I690AD0KywEIW-MNdBYK2ILiAuIrDnDTLbztXsqLb74";

export default function DefaultCard(props) {
	const { movieId } = props;
	const [trailerKey, setTrailerKey] = useState("");
	useEffect(() => {
		const getVideoId = async () => {
			const result = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${TMDB_KEY1}`,
						"Content-Type": "application/json;charset=utf-8",
					},
				}
			);
			const videoId = await result.json();
			const videoKey = videoId.results;
			const filteredData = videoKey.filter(
				(item) => item.name === "Official Trailer"
			);
			const youtubeKey = filteredData[0].key;

			setTrailerKey(youtubeKey);
		};
		getVideoId();
	}, []);

	console.log(trailerKey);

	return (
		<Card
			hoverable
			style={{
				width: 420,
			}}
			cover={
				<ImageZoom
					image={`https://image.tmdb.org/t/p/original${props.imgUrl}`}
					trailerKey={trailerKey}
				/>
			}
		>
			<Meta title={props.title} style={{ textAlign: "center" }} />
			<div style={{ maxHeight: "50px", overflow: "auto", margin: "20px 0" }}>
				{props.description}
			</div>
			<p>Release date: {props.releaseDate}</p>
		</Card>
	);
}
