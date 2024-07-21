import React, { useState, useEffect } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY } from "../../data";
import moment from "moment";

const value_converter = (viewCount) => {
  // implement your view count conversion logic here
  return viewCount.toLocaleString();
};

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${categ}&key=${API_KEY}`;
    const response = await fetch(videoDetails_url);
    const data = await response.json();
    setApiData(data.items[0]);
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData
            ? `${value_converter(
                apiData.statistics.viewCount
              )} Views &bull; ${moment(apiData.snippet.publishedAt).fromNow()}`
            : "16K"}{" "}
          Views &bull; 2 days ago
        </p>
        <div className="interaction-buttons">
          <span>
            <img src={like} alt="Like" />{" "}
            {apiData ? value_converter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt="Dislike" /> 125
          </span>
          <span>
            <img src={share} alt="Share" /> 125
          </span>
          <span>
            <img src={save} alt="Save" /> 125
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="DesignHive" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
          comments
        </h4>
        <div className="comment">
          <img src={user_profile} alt="User Profile" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facts of interconnected networks using standardized
              communication protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>244</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>
        {/* Add more comments here */}
      </div>
    </div>
  );
};

export default PlayVideo;
