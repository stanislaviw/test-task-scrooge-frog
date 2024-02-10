import { useState, useEffect } from "react";
import { ListItem } from "./list-item";
import { Button } from "./common/button";
import { ProgressBar } from "./common/progress-bar";
import { Pagination } from "@mui/material";
import { useGetPostsQuery } from "../redux/postsApi";
import {
  PAGINATION_LIMIT_ITEMS,
  PAGINATION_LIMIT_PAGES,
} from "../constants/constants";

export const List = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isFetching, isLoading, isSuccess, isError, error } =
    useGetPostsQuery({
      page: currentPage,
      limit: PAGINATION_LIMIT_ITEMS,
    });

  useEffect(() => {
    if (isSuccess) {
      setPosts(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const handleUpdatePosts = () => {
    window.location.reload();
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  let content;

  if (isFetching && isLoading) {
    content = <ProgressBar />;
  } else if (!!posts && posts.length > 0) {
    content = (
      <ul className="list_items">
        <div className="list_items_container">
          {posts?.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
        <div className="list_footer">
          <Pagination
            onChange={handlePageChange}
            page={currentPage}
            count={PAGINATION_LIMIT_PAGES}
            color="primary"
            shape="rounded"
          />
        </div>
      </ul>
    );
  } else if (isError) {
    content = <div className="error placeholder">Error: {error.message}</div>;
  } else {
    content = <div className="placeholder">No any post</div>;
  }

  return (
    <div className="list">
      <div className="list_header">
        <h3>All posts:</h3>
        <Button onClick={handleUpdatePosts}>Update</Button>
      </div>
      {content}
    </div>
  );
};
