import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { vidoeId, categoryId } = useParams();
  return (
    <div className="play-container">
      <PlayVideo vidoeId={vidoeId} />
      <Recommended />
    </div>
  );
};

export default Video;
