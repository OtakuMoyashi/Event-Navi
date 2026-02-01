"use client";

import { useActionState } from "react";
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
import { Message } from "@/components/ui/message";

export function SignUpStaffForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createStaff, null);

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
                  <FieldLabel>仮想ドメイン</FieldLabel>
                  <Input name="domain" required disabled={isPending} />
                </Field>
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
        {state?.message && <Message message={state.message} />}
      </CardContent>
    </Card>
  );
}
