import { PostForm } from "@/components/PostForm";
import { getPost } from "@/db/posts";
import { notFound } from "next/navigation";
import { getUsers } from "@/db/users";
import { UserSelectOptions } from "@/shared/components/userSelectOptions";
import { editPostAction } from "@/actions/editPost";

export default async function EditPostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const [post, users] = await Promise.all([getPost(postId), getUsers()]);

  if (post == null) return notFound();
  const editPost = editPostAction.bind(null, post.id);
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm
        userSelectOptions={<UserSelectOptions withAnyOption={false} />}
        action={editPost}
        post={post}
      />
    </>
  );
}
