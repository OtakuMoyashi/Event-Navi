"use client";

import { useActionState, useEffect } from "react";
import { createStaff } from "./action";
import { Store } from "@/generated/prisma/client";
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
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { MessagePrompt } from "@/components/prompt/message-prompt";
import { useRouter } from "next/navigation";

export function SignUpStaffForm({ stores }: { stores: Store[] }) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(createStaff, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/staff/signin");
    }
  }, [state, router]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>スタッフを作成</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
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
                <Field>
                  <FieldLabel>作成先の店舗</FieldLabel>
                  <Select name="storeId" required disabled={isPending}>
                    <SelectTrigger>
                      <SelectValue placeholder="店舗を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {stores.map((store) => (
                          <SelectItem key={store.id} value={store.id}>
                            {store.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "作成中..." : "スタッフを作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
