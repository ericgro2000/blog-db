"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  children?: React.ReactNode;
  message?: string;
};

export const MyButton: FC<Props> = ({ children, message }) => {
  const { pending } = useFormStatus();
  console.log(pending);
  return <button className="btn">{pending ? "saving" : message}</button>;
};
