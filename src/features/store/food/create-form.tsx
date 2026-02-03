"use client";

import { useActionState } from "react";
import { createFoodWithForm } from "./action";
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
import { Alert } from "@/components/ui/alert";

export function CreateFoodForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(
    createFoodWithForm,
    null,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>模擬店を作成</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel>店舗の種類</FieldLabel>
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
                {isPending ? "作成中..." : "模擬店を作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <Alert>
          {state?.message && <MessagePrompt message={state.message} />}
        </Alert>
      </CardContent>
    </Card>
  );
}
