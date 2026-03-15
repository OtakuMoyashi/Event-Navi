"use client";

import { useActionState, useEffect } from "react";
import { signUpSuperAdmin } from "./action";
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
import { useRouter } from "next/navigation";

export default function SignUpSuperAdminForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signUpSuperAdmin, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/signin/super-admin");
    }
  }, [state, router]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>管理者を作成</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
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
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "作成中..." : "管理者を作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
