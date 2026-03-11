"use client";

import { useActionState } from "react";
import { updateAttractionConfig } from "./action";
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
import { ErrorPrompt } from "@/components/prompt/error-prompt";
import { MessagePrompt } from "@/components/prompt/message-prompt";
import { Attraction } from "@/lib/db/schema";

interface UpdateAttractionConfigProps {
  attraction: Attraction;
}

export default function UpdateAttractionConfigForm({
  attraction,
}: UpdateAttractionConfigProps) {
  const [state, formAction, isPending] = useActionState(
    updateAttractionConfig,
    null,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>企画情報の編集</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>一組当たりのプレイ時間</FieldLabel>
                  <Input
                    name="playTime"
                    type="number"
                    required
                    disabled={isPending}
                    defaultValue={attraction.playTime ?? 5}
                  />
                </Field>
                <Field>
                  <FieldLabel>一組当たりの最大人数</FieldLabel>
                  <Input
                    name="peopleCapacity"
                    type="number"
                    required
                    disabled={isPending}
                    defaultValue={attraction.peopleCapacity ?? 5}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field>
              <Button type="submit" disabled={isPending}>
                {isPending ? "反映中..." : "変更を反映"}
              </Button>
            </Field>
            <input type="hidden" name="attractionId" value={attraction.id} />
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
