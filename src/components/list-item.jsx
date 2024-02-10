export const ListItem = ({ item }) => {
  const { title, body } = item;

  return (
    <li className="list_item">
      <h4 className="list_item_title">{title}</h4>
      <p className="list_item_text">{body}</p>
    </li>
  );
};
