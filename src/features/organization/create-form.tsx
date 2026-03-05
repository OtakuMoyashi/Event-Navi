"use client";

import { useActionState } from "react";
import { createOrganization } from "./action";
import { Store } from "@/generated/prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Field,
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
import { MessagePrompt } from "@/components/prompt/message-prompt";
import { Input } from "@/components/ui/input";

export function CreateOrganizationForm() {
  const [state, formAction, isPending] = useActionState(
    createOrganization,
    null,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>組織を作成</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>識別名</FieldLabel>
                  <Input name="slug" required disabled={isPending} />
                </Field>
                <Field>
                  <FieldLabel>組織名</FieldLabel>
                  <Input name="name" required disabled={isPending} />
                </Field>
                <Field>
                  <FieldLabel>招待コード</FieldLabel>
                  <Input name="inviteCode" required disabled={isPending} />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "作成中..." : "組織を作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
