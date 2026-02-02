"use client";

import { signInAdmin } from "./action";
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
import { Message } from "@/components/ui/message";

export default function SignInAdmin() {
  const [state, formAction, isPending] = useActionState(signInAdmin, null);
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
          </FieldGroup>
        </form>
        {state?.message && <Message message={state.message} />}
      </CardContent>
    </Card>
  );
}
