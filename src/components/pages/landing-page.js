import React from "react"
import MovieLangindInfo from "../movie-landnig-info/movie-landing-info"
import MovieService from "../../service/movie-service"
import MoviesRowList from "../movies-row-list"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
const LandingPage = () => {

  const { id } = useParams();
  const movieService = new MovieService()

  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const movieService = new MovieService(); // Initialize your MovieService
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
      <MovieLangindInfo id={id} movieService={movieService} video={video} />
      <MoviesRowList title={'Recommendations'} movieService={movieService} func={movieService.getRecommendationsById(id)} />
    </div>
  )
}

export default LandingPage