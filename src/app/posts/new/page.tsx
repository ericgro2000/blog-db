import { createPostAction } from "@/actions/createPost";
import { PostForm } from "@/components/PostForm";
import { UserSelectOptions } from "@/shared/components/userSelectOptions";

export default function NewPostPage() {
  const createPost = createPostAction;
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm action={createPost} userSelectOptions={<UserSelectOptions />} />
    </>
  );
}
