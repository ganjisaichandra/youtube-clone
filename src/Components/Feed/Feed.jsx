import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { API_KEY, value_convertor } from "../../data";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const [thumbnails, setThumbnails] = useState([
    "../../assets/thumbnails1.png",
    "../../assets/thumbnail2.png",
    "../../assets/thumbnail3.png",
    "../../assets/thumbnail4.png",
    "../../assets/thumbnail5.png",
    "../../assets/thumbnail6.png",
    "../../assets/thumbnail7.png",
    "../../assets/thumbnail8.png",
  ]);

  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id.videoId}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {" "}
              {value_convertor(item.statistics.viewCount)} views •
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
