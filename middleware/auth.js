export default async ({ redirect, store }) => {
  const token_state = await store.state.user.token_user;
  // localStorage.getItem("tokem");
  if (!token_state) {
    return redirect("login");
  }
};
