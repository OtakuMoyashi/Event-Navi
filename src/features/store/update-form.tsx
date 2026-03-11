"use client";

import { useActionState, useState, useEffect } from "react";
import { updateStoreConfig } from "./action";
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
import { Store } from "@/lib/db/schema";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ja } from "date-fns/locale";

interface updateStoreConfigFormProps {
  store: Store; //isActiveを取得するためStore型
}

export default function UpdateStoreConfigForm({
  store,
}: updateStoreConfigFormProps) {
  const [state, formAction, isPending] = useActionState(
    updateStoreConfig,
    null,
  );
  const [checked, setChecked] = useState(false);
  const [startedAt, setStartedAt] = useState<Date | null>(
    store.startedAt ? new Date(store.startedAt) : null,
  );
  const [finishedAt, setFinishedAt] = useState<Date | null>(
    store.finishedAt ? new Date(store.finishedAt) : null,
  );

  useEffect(() => {
    setChecked(store.isActive);
  }, [store.isActive]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>店舗情報の編集</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>店舗名</FieldLabel>
                  <Input
                    name="name"
                    type="string"
                    required
                    disabled={isPending}
                    defaultValue={store.name}
                  />
                </Field>
                <Field>
                  <div className="flex flex-row items-center gap-2 w-fit">
                    <FieldLabel htmlFor="isActive" className="mb-0">
                      営業中か
                    </FieldLabel>
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(value) => setChecked(value === true)}
                      id="isActive"
                    />
                  </div>
                  <input
                    type="hidden"
                    name="isActive"
                    value={checked ? "true" : "false"}
                  />
                </Field>
                <Field>
                  <FieldLabel>開始日時</FieldLabel>
                  <DatePicker
                    selected={startedAt}
                    onChange={(date: Date | null) => setStartedAt(date)}
                    showTimeSelect
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    disabled={isPending}
                    name="startedAt"
                    locale={ja}
                  />
                  <input
                    type="hidden"
                    name="startedAt"
                    value={startedAt ? startedAt.toISOString() : ""}
                  />
                </Field>
                <Field>
                  <FieldLabel>終了日時</FieldLabel>
                  <DatePicker
                    selected={finishedAt}
                    onChange={(date: Date | null) => setFinishedAt(date)}
                    showTimeSelect
                    dateFormat="yyyy/MM/dd HH:mm"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    disabled={isPending}
                    name="finishedAt"
                    locale={ja}
                  />
                  <input
                    type="hidden"
                    name="finishedAt"
                    value={finishedAt ? finishedAt.toISOString() : ""}
                  />
                </Field>
                <Field>
                  <FieldLabel>詳細</FieldLabel>
                  <Textarea
                    name="description"
                    required
                    disabled={isPending}
                    defaultValue={store.description ?? ""}
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
            <input type="hidden" name="storeId" value={store.id} />
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
