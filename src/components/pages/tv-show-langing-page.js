import React from "react"
import TVShowLanginInfo from "../tvshow-langin-info/tvshow-langin-info"
import MovieService from "../../service/movie-service"

import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"


const TVShowLanginPage = () => {

    const { id } = useParams();
    const movieService = new MovieService()

    const [video, setVideo] = useState({});

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const videoData = await movieService.getVideoById(id);
                setVideo(videoData);
            } catch (error) {
                console.error("Error fetching video:", error);
            }
        };

        fetchVideo();
    }, [id]);

    return (
        <div>
            <TVShowLanginInfo id={id} movieService={movieService} video={video} />
        </div>
    )
}

export default TVShowLanginPage