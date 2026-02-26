"use client";

import { signInStaff } from "./action";
import { useActionState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function SignInStaff() {
  const [state, formAction, isPending] = useActionState(signInStaff, null);
  return (
    <Card>
      <CardHeader>
        <CardTitle>スタッフアカウントでログイン</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel>ログインID</FieldLabel>
                <Input name="loginId" required disabled={isPending} />
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
          </FieldGroup>
        </form>
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
