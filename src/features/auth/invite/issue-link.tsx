"use client";

import { InviteRole, InviteScope } from "@/lib/db/schema";
import { useActionState, useState } from "react";
import { createInvite } from "./action";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MessagePrompt } from "@/components/prompt/message-prompt";

interface IssueInviteLinkProps {
  targetScope: InviteScope;
  role: InviteRole;
  organizationId: string | null;
  eventId: string | null;
  storeId: string | null;
}

export default function IssueInviteLink({
  targetScope,
  role,
  organizationId,
  eventId,
  storeId,
}: IssueInviteLinkProps) {
  const [state, formAction, isPending] = useActionState(createInvite, null);
  const [copiedInviteUrl, setCopiedInviteUrl] = useState<string | null>(null);

  const handleCopyInviteUrl = async () => {
    if (!state?.inviteUrl) return;

    await navigator.clipboard.writeText(state.inviteUrl);
    setCopiedInviteUrl(state.inviteUrl);
  };

  return (
    <form action={formAction}>
      <FieldGroup>
        <FieldTitle>招待リンクを作成する</FieldTitle>
        <FieldContent>
          <input type="hidden" name="targetScope" value={targetScope} />
          <input type="hidden" name="role" value={role} />
          {organizationId && (
            <input type="hidden" name="organizationId" value={organizationId} />
          )}
          {eventId && <input type="hidden" name="eventId" value={eventId} />}
          {storeId && <input type="hidden" name="storeId" value={storeId} />}
          <Field>
            <FieldDescription>
              リンクの有効期限（単位：時間）を設定
            </FieldDescription>
            <Input
              type="number"
              name="expiresInHours"
              min={1}
              max={168}
              defaultValue={72}
              disabled={isPending}
            />
          </Field>
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "作成中..." : "リンクを作成"}
            </Button>
          </Field>
        </FieldContent>
      </FieldGroup>
      {state?.success && state?.inviteUrl && (
        <FieldGroup>
          <Field>
            <FieldDescription>発行済みの招待リンク</FieldDescription>
            <FieldContent className="flex gap-2">
              <Input value={state.inviteUrl} readOnly />
              <Button type="button" onClick={handleCopyInviteUrl}>
                {copiedInviteUrl === state.inviteUrl ? "コピー済み" : "コピー"}
              </Button>
            </FieldContent>
          </Field>
        </FieldGroup>
      )}
      {state?.message && <MessagePrompt message={state.message} />}
    </form>
  );
}
