"use client";

import {
  useAddPostMutation,
  useGetPostsQuery,
} from "@/redux/services/apiSlice";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();

  const [
    addPost,
    { data: addPostData, isLoading: addPostLoading, isSuccess: addPostSuccess, error: addPostError },
  ] = useAddPostMutation();

  const router = useRouter();

  const handleAddPost = () => {
    addPost({
      test: "123",
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      foo:{data?.foo},
      <br />
      test:{data?.test},
      <br />
      <button
        className="bg-black text-white"
        onClick={() => router.push("/login")}
      >
        login
      </button>
      <br />
      <button className="bg-black text-white" onClick={handleAddPost}>
        Add Post
      </button>
    </div>
  );
}
