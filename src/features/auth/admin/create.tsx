"use client";

import { useActionState } from "react";
import { createAdmin } from "./action";
import { AdminRole } from "@/generated/prisma/enums";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";

export default function CreateAdmin() {
  const [state, formAction, isPending] = useActionState(createAdmin, null);
  const adminRoles = Object.values(AdminRole);

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
                <Field>
                  <FieldLabel>管理者の種類</FieldLabel>
                  <Select name="role" required disabled={isPending}>
                    <SelectTrigger>
                      <SelectValue placeholder="管理者の種類を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {adminRoles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
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
                {isPending ? "作成中..." : "管理者を作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        {state?.message && (
          <Alert>
            <CircleCheck />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
