"use client";

import { useActionState } from "react";
import { callFirstTicket } from "./action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { ErrorPrompt } from "@/components/prompt/error-prompt";

interface FirstCallTicketFormProps {
  attractionId: string;
}

export default function FirstCallTicketForm({
  attractionId,
}: FirstCallTicketFormProps) {
  const callFirstTicketWithId = callFirstTicket.bind(null, attractionId);
  const [state, formAction, isPending] = useActionState(
    callFirstTicketWithId,
    null,
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle>整理券の呼び出し</CardTitle>
        <CardDescription>
          整理券を先頭から指定された数だけ呼び出します。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>呼び出す整理券の枚数</FieldLabel>
                  <Input
                    name="count"
                    type="number"
                    min="1"
                    required
                    disabled={isPending}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "呼び出し中..." : "整理券を呼び出す"}
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
