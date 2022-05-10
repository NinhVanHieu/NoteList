export const newAdd = (state) =>
  state.list.content.filter((item) => {
    return (
      item.user.name.includes(state.list.search) &&
      item.user.status.includes(state.list.status)
    );
  });
export const removeId = (state) => state.list.id;
