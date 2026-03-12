"use client";

import { useActionState } from "react";
import { createItem } from "./action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MessagePrompt } from "@/components/prompt/message-prompt";

interface CreateItemFormProps {
  storeId: string;
}

export function CreateItemForm({ storeId }: CreateItemFormProps) {
  const [state, formAction, isPending] = useActionState(createItem, null);
  return (
    <Card>
      <CardHeader>
        <CardTitle>商品を登録</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel>模擬店</FieldLabel>
                <Field>
                  <FieldLabel>商品名</FieldLabel>
                  <Input name="name" required disabled={isPending} />
                </Field>
                <Field>
                  <FieldLabel>在庫数</FieldLabel>
                  <Input
                    name="stock"
                    type="number"
                    required
                    disabled={isPending}
                  />
                </Field>
                <Field>
                  <FieldLabel>価格</FieldLabel>
                  <Input
                    name="price"
                    type="number"
                    required
                    disabled={isPending}
                  />
                </Field>
              </Field>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "登録中..." : "商品を登録"}
              </Button>
            </Field>
            <input type="hidden" name="storeId" value={storeId} />
          </FieldGroup>
        </form>
        {state?.message && <MessagePrompt message={state.message} />}
      </CardContent>
    </Card>
  );
}
