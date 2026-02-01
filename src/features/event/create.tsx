"use client";

import { useActionState } from "react";
import { createEvent } from "./action";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";

export default function CreateEvent() {
  const [state, formAction, isPending] = useActionState(createEvent, null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>イベントを作成</CardTitle>
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
                  <FieldLabel>イベント名</FieldLabel>
                  <Input name="name" required disabled={isPending} />
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
        {state?.message && (
          <Alert>
            <CircleCheck />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
