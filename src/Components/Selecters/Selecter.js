export const newAdd = (state) =>
  state.list.content.filter((item) => {
    if (state.list.search.status === "All") {
      return item.user.name.includes(state.list.search.nameSearch);
    } else {
      return (
        item.user.name.includes(state.list.search.nameSearch) &&
        (state.list.search.status === "Complete"
          ? item.user.status === "Complete"
          : item.user.status === "UnComplete")
      );
    }
  });
export const removeId = (state) => state.list.id;
