"use client";

import { useActionState } from "react";
import { createItem } from "./action";
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
import { Input } from "@/components/ui/input";
import { Message } from "@/components/ui/message";

export function CreateItemForm({ stores }: { stores: Store[] }) {
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
                <Select name="storeId" required disabled={isPending}>
                  <SelectTrigger>
                    <SelectValue placeholder="模擬店を選択" />
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
              </Field>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "登録中..." : "商品を登録"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        {state?.message && <Message message={state.message} />}
      </CardContent>
    </Card>
  );
}
