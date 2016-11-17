import React, { Component, PropTypes } from 'react';

const AlbumArt = ({spotifyData}) => {

	function albumArtPreview(track) {
		if (track.album) {
			return <img src={track.album.images[2].url} className="album-image" />
		}
	}
	if (spotifyData.length >= 4) {
		return (
			<div className="album-images">
				{albumArtPreview(spotifyData[0])}
				{albumArtPreview(spotifyData[1])}
				{albumArtPreview(spotifyData[2])}
				{albumArtPreview(spotifyData[3])}
			</div>
		)
	}
	else {
		return (
			null
		)
	}

}

export default AlbumArt
