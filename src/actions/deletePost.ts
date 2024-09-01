"use server";

import { deletePost } from "@/db/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(postId: string | number) {
  const post = await deletePost(postId);

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`);
  revalidatePath(`/posts/${post.id}`);
  redirect("/posts");
}
