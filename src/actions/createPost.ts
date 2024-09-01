"use server";

import { createPost } from "@/db/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { validatePost } from "./errorHandler";

export const createPostAction = async (formData: FormData) => {
  const [data, errors] = validatePost(formData);
  console.log(formData);
  if (data == null) return errors;

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const userId = formData.get("userId") as string;

  const postData = {
    title,
    body,
    userId: parseInt(userId),
  };

  const post = await createPost(postData);

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`);
  redirect(`/posts/${post.id}`);
};
