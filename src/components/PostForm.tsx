"use client";
import { FormGroup } from "./FormGroup";
import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { SkeletonInput } from "./Skeleton";
import { MyButton } from "@/shared/components/MyButton";
import { useFormState } from "react-dom";

type Props = {
  userSelectOptions: ReactNode;
  post?: { id: number; title: string; body: string; userId: number };
  action: (
    prevState: unknown,
    formData: FormData
  ) => void | Promise<Record<string, string> | void>;
};

export function PostForm({ userSelectOptions, action, post }: Props) {
  const [errors, formAction] = useFormState(action, { error: "error" });

  return (
    <form className="form" action={formAction}>
      <div className="form-row">
        <FormGroup errorMessage={errors?.title}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            // required
            defaultValue={post?.title}
          />
        </FormGroup>
        <FormGroup errorMessage={errors?.userId}>
          <label htmlFor="userId">Author</label>
          <select
            // required
            name="userId"
            id="userId"
            defaultValue={post?.userId}
          >
            <Suspense fallback={<option value="">Loading...</option>}>
              {userSelectOptions}
            </Suspense>
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup errorMessage={errors?.body}>
          <label htmlFor="body">Body</label>
          <textarea
            //  required
            name="body"
            id="body"
            defaultValue={post?.body}
          />
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
