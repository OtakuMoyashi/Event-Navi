"use client";

import { useActionState } from "react";
import { createAttraction } from "./action";
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

export function CreateAttractionForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createAttraction, null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>企画を作成</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel>登録先の店舗</FieldLabel>
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
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "作成中..." : "企画を作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
