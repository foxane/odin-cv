export default List;

// itemList = Array of object that follow defaultData props
// text = Property of item to render ('schoolName' will use item.schoolName as text)
function List({ itemList, text, showEditForm, showAddForm, deleteItem }) {
  const list = itemList.map((item) => {
    return (
      <div
        key={item.id}
        className="card cursor"
        onClick={() => showEditForm(item)}
        tabIndex={0}
      >
        <p>{item[text]}</p>
        <button
          className="delete-btn cursor"
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
      <button onClick={showAddForm} className="cursor add-btn">
        Add new
      </button>
    </>
  );
}
