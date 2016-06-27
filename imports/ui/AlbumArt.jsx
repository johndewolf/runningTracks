import React, { Component, PropTypes } from 'react';

const AlbumArt = ({spotifyData}) => {

	function albumArtPreview(track) {
		return <img src={track.album.images[2].url} className="album-image" />
	}

	return (
		<div className="album-images">
			{albumArtPreview(spotifyData[0])}
			{albumArtPreview(spotifyData[1])}
			{albumArtPreview(spotifyData[2])}
			{albumArtPreview(spotifyData[3])}
		</div>
	)
}

export default AlbumArt