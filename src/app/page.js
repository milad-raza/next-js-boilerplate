"use client";

import { useState } from "react";
import {
  useAddPostMutation,
  useGetPostsQuery,
} from "@/redux/services/apiSlice";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import CustomModal from "@/components/ui/customModal";

export default function Home() {
  const { data, error, isLoading } = useGetPostsQuery();
  const { theme, setTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Button
        color="secondary"
        className="p-3 mt-3 rounded-md"
        onClick={() => router.push("/login")}
      >
        login
      </Button>
      <Button
        color="primary"
        variant="ghost"
        className="p-3 mt-3 rounded-md dark:hover:!text-black"
        onClick={() => router.push("/dashboard")}
      >
        dashboard
      </Button>
      <Button className="p-3 mt-3 rounded-md" onClick={handleAddPost}>
        Add Post
      </Button>
      <>
        The current theme is: {theme}
        <Button
          className="mt-5"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle theme
        </Button>
      </>
      <Button className="mt-5" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <CustomModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        
        header="Header"
        body="Body"
        footer={<Button onClick={() => setIsModalOpen(false)}>Close</Button>}
      />
    </div>
  );
}
