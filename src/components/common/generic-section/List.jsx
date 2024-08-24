export default List;

// itemList = Array of object that follow defaultData props
// text = Property of item to render ('schoolName' will use item.schoolName as text)
function List({ itemList, text, showEditForm, showAddForm, deleteItem }) {
  const list = itemList.map((item) => {
    return (
      <div
        key={item.id}
        className="edu-card cursor"
        onClick={() => showEditForm(item)}
      >
        <p>{item[text]}</p>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteItem(item);
          }}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <>
      {list}
      <button onClick={showAddForm}>Add new</button>
    </>
  );
}
