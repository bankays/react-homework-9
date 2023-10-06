import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // PAGINATION
  let limit = 5;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/news?_page=${page}&_limit=${limit}`
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/news");
        setAllPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllPosts();
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);
  return (
    <div>
      <div className="container ">
        <ul className="ddd">
          {posts.map((post, index) => (
            <div className="card1">
              <p key={index}>
                <img src="Image Placeholder.svg" alt="" />
                <p>{post.category}</p>
                <p>{post.description}</p>
                <p>{post.date}</p>
              </p>
            </div>
          ))}
        </ul>
        <div>
          {arrBtns?.map((item) => (
            <button className="ccc" key={item} onClick={() => setPage(item)}>
              {item}
            </button>
          ))}
        </div>
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Home;
