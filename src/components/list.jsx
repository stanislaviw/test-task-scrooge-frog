import { useState, useEffect } from "react";
import { ListItem } from "./list-item";
import { Button } from "./common/button";
import { ProgressBar } from "./common/progress-bar";
import { Pagination } from "@mui/material";

export const List = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
    )
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const handleUpdatePosts = () => {
    setCurrentPage(1);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="list">
      <div className="list_header">
        <h3>All posts:</h3>
        <Button onClick={handleUpdatePosts}>Update</Button>
      </div>
      {posts.length === 0 ? (
        <ProgressBar />
      ) : (
        <ul className="list_items">
          <div className="list_items_container">
            {posts.map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </div>
          <div className="list_footer">
            <Pagination
              onChange={handlePageChange}
              page={currentPage}
              count={10}
              color="primary"
              shape="rounded"
            />
          </div>
        </ul>
      )}
    </div>
  );
};
