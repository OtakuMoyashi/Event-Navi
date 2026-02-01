"use client";

import { useActionState } from "react";
import { createTicket } from "./action";
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

export function IssueTicketForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createTicket, null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>整理券を発行</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>発行する企画</FieldLabel>
                  <Select name="storeId" required disabled={isPending}>
                    <SelectTrigger>
                      <SelectValue placeholder="企画を選択" />
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
                <Field>
                  <FieldLabel>人数</FieldLabel>
                  <Input
                    name="numberOfPeople"
                    type="number"
                    required
                    disabled={isPending}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "作成中..." : "イベントを作成"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        {state?.message && <Message message={state.message} />}
      </CardContent>
    </Card>
  );
}
