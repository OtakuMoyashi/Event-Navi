"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signOut } from "@/features/auth/action";
import { useActionState } from "react";
import { Field } from "@/components/ui/field";

export default function SignOut() {
  const [state, formAction, isPending] = useActionState(signOut, null);
  return (
    <Card>
      <CardHeader>
        <CardTitle>サインアウトページ</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "サインアウト中..." : "サインアウト"}
            </Button>
          </Field>
        </form>
      </CardContent>
    </Card>
  );
}
