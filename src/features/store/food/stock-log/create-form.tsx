"use client";

import { Item } from "@/lib/db/schema";
import { useActionState } from "react";
import createStockLog from "./action";
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
import { MessagePrompt } from "@/components/prompt/message-prompt";
import { ErrorPrompt } from "@/components/prompt/error-prompt";

interface CreateStockLogFormProps {
  items: Item[];
}

export default function CreateStockLogForm({ items }: CreateStockLogFormProps) {
  const [state, formAction, isPending] = useActionState(createStockLog, null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>商品在庫の変動を反映</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>商品</FieldLabel>
                  <Select name="itemId" required disabled={isPending}>
                    <SelectTrigger>
                      <SelectValue placeholder="商品を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {items.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel>変動数</FieldLabel>
                  <Input
                    name="difference"
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
                {isPending ? "反映中..." : "記録を反映"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <div className="space-y-4">
          {state?.message && <MessagePrompt message={state.message} />}
          {state?.error && <ErrorPrompt error={state.error} />}
        </div>
      </CardContent>
    </Card>
  );
}
