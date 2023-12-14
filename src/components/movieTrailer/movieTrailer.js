import React from "react";

const MovieTrailer = ({ video, width, height }) => {
  if (!video || !video.key) {
    // If video is undefined, null, or does not have a 'key' property
    return <p>No video available</p>;
  }

  return (
    <div>
      <iframe
        width={width || 560}
        height={height || 315}
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
