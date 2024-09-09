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
    {
      data: addPostData,
      isLoading: addPostLoading,
      isSuccess: addPostSuccess,
      error: addPostError,
    },
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
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl">Home</h1>
      foo:{data?.foo} test:{data?.test},
      <button
        className="bg-black text-white p-3 mt-3 rounded-md"
        onClick={() => router.push("/login")}
      >
        login
      </button>
      <button
        className="bg-black text-white p-3 mt-3 rounded-md"
        onClick={() => router.push("/dashboard")}
      >
        dashboard
      </button>
      <button
        className="bg-black text-white p-3 mt-3 rounded-md"
        onClick={handleAddPost}
      >
        Add Post
      </button>
    </div>
  );
}
