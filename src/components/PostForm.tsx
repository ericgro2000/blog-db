"use client";
import { FormGroup } from "./FormGroup";
import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { SkeletonInput } from "./Skeleton";
import { MyButton } from "@/shared/components/MyButton";
import { useFormState } from "react-dom";

type Props = {
  userSelectOptions: ReactNode;
  createPost: (formData: FormData) => void;
};

export function PostForm({ userSelectOptions, createPost }: Props) {
  const [errors, formAction] = useFormState(createPost, { error: "error" });
  return (
    <form className="form" action={formAction}>
      <div className="form-row">
        <FormGroup errorMessage="Placeholder Error Message">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId">
            <Suspense fallback={<option value="">Loading...</option>}>
              {userSelectOptions}
            </Suspense>
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" />
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" href="/posts">
          Cancel
        </Link>
        <MyButton message="Save"></MyButton>
      </div>
    </form>
  );
}

export function SkeletonPostForm() {
  return (
    <form className="form">
      <div className="form-row">
        <FormGroup>
          <label htmlFor="title">Title</label>
          <SkeletonInput />
        </FormGroup>
        <FormGroup>
          <label htmlFor="userId">Author</label>
          <SkeletonInput />
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup>
          <label htmlFor="body">Body</label>
          <SkeletonInput />
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" href="/posts">
          Cancel
        </Link>
        <button disabled className="btn">
          Save
        </button>
      </div>
    </form>
  );
}
