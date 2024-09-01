import { revalidatePath } from "next/cache";
import { validatePost } from "./errorHandler";
import { redirect } from "next/navigation";
import { updatePost } from "@/db/posts";

export async function editPostAction(
  postId: number,
  prevState: unknown,
  formData: FormData
) {
  const [data, errors] = validatePost(formData);
  if (data == null) return errors;

  const post = await updatePost(postId, data);

  revalidatePath("/posts");
  revalidatePath(`/posts/${post.id}`);
  revalidatePath(`/users/${post.userId}`);
  redirect(`/posts/${post.id}`);
}
