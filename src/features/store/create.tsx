"use client";

import { useActionState } from "react";
import { StoreType } from "@/generated/prisma/enums";
import { createStore } from "./action";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  FieldGroup,
  FieldSet,
  Field,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MessagePrompt } from "@/components/prompt/message-prompt";
import { SuccessPrompt } from "@/components/prompt/success-prompt";
import { ErrorPrompt } from "@/components/prompt/error-prompt";

export default function CreateStore() {
  const [state, formAction, isPending] = useActionState(createStore, null);
  const storeTypes = Object.values(StoreType);

  return (
    <Card>
      <CardHeader>
        <CardTitle>店舗を作成</CardTitle>
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
                  <FieldLabel>店舗名</FieldLabel>
                  <Input name="name" required disabled={isPending} />
                </Field>
                <Field>
                  <FieldLabel>店舗の種類</FieldLabel>
                  <Select name="storeType" required disabled={isPending}>
                    <SelectTrigger>
                      <SelectValue placeholder="店舗の種類を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {storeTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
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
                {isPending ? "作成中..." : "店舗を作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <div className="space-y-4">
          {state?.message && <MessagePrompt message={state.message} />}
          {state?.error && <ErrorPrompt error={state.error} />}
          {state?.success === true && (
            <SuccessPrompt redirectLink="/admin/system/create" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
