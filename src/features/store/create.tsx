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
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { Message } from "@/components/ui/message";

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
                      <SelectValue placeholder="店舗を選択" />
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
        {state?.message && <Message message={state.message} />}
      </CardContent>
    </Card>
  );
}
