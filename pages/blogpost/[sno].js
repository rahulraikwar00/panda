import { useReducer, useRouter } from "next/router";
const Post = () => {
  const router = useRouter();
  const { sno } = router.query;
  return <p> post: {sno}</p>;
};
export default Post;
