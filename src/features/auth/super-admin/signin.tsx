"use client";

import { signInSuperAdmin } from "./action";
import { useActionState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MessagePrompt } from "@/components/prompt/message-prompt";
import { GoogleSignInButton } from "@/features/auth/components/google-signin-button";

export default function SignInSuperAdmin() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signInSuperAdmin, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/super-admin");
    }
  }, [state, router]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>管理者アカウントでログイン</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel>メールアドレス</FieldLabel>
                <Input
                  name="email"
                  type="email"
                  required
                  disabled={isPending}
                />
              </Field>
              <Field>
                <FieldLabel>パスワード</FieldLabel>
                <FieldDescription>
                  英数字のみで、8文字以上で設定して下さい。
                </FieldDescription>
                <Input
                  name="password"
                  type="password"
                  required
                  disabled={isPending}
                />
              </Field>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "ログイン中..." : "ログイン"}
              </Button>
            </Field>
            <FieldSeparator />
            <Field>
              <GoogleSignInButton
                callbackURL="/post-signin?intent=admin"
                disabled={isPending}
              />
            </Field>
          </FieldGroup>
        </form>
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
