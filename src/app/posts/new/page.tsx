import { PostForm } from "@/components/PostForm";
import { UserSelectOptions } from "@/shared/components/userSelectOptions";

export default function NewPostPage() {
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm userSelectOptions={<UserSelectOptions />} />
    </>
  );
}
