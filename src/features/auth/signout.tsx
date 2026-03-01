"use client";

import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { signOut } from "./action";
import { Button } from "@/components/ui/button";

export default function Signout() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signOut, null);

  return (
    <>
      <form action={formAction}>
        <Button type="submit" disabled={isPending}>
          サインアウト
        </Button>
      </form>
    </>
  );
}
