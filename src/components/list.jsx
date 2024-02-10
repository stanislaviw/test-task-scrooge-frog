import { useState, useEffect } from "react";
import { ListItem } from "./list-item";
import { Button } from "./common/button";

export const List = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="list">
      <div className="list_header">
        <h3>All posts:</h3>
        <Button>Update</Button>
      </div>
      <ul className="list_items">
        {posts?.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
        <div className="list_footer">Pagination</div>
      </ul>
    </div>
  );
};
