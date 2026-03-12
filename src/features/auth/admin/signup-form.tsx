"use client";

import { useActionState, useEffect } from "react";
import { signUpAdmin } from "./action";
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
import type { Organization } from "@/lib/db/schema";
import { adminRoleValues } from "@/lib/db/schema";

interface SignUpAdminFormProps {
  orgs: Organization[];
}

export default function SignUpAdminForm({ orgs }: SignUpAdminFormProps) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signUpAdmin, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/admin/signin");
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
                  <FieldLabel>作成先の組織</FieldLabel>
                  <Select name="orgId" required disabled={isPending}>
                    <SelectTrigger>
                      <SelectValue placeholder="作成先の組織を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {orgs.map((org) => (
                          <SelectItem key={org.id} value={org.id}>
                            {org.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
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
                  <FieldLabel>招待コード</FieldLabel>
                  <Input name="inviteCode" required disabled={isPending} />
                </Field>
                <Field>
                  <FieldLabel>管理者の種類</FieldLabel>
                  <Select name="role" required disabled={isPending}>
                    <SelectTrigger>
                      <SelectValue placeholder="管理者の種類を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {adminRoleValues.map((role) => (
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
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
