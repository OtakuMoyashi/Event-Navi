"use client";

import { useActionState } from "react";
import { createTicket } from "./action";
import { Store } from "@/generated/prisma/client";

export function CreateTicektForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createTicket, null);

  return (
    <form action={formAction}>
      <div>
        <label>番号</label>
        <input name="index" required disabled={isPending} />
      </div>
      <div>
        <label>人数</label>
        <input name="numberOfPeople" required disabled={isPending} />
      </div>
      <div>
        <label>企画を選択</label>
        <select name="storeId" required disabled={isPending}>
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button type="submit" disabled={isPending}>
          {isPending ? "発行中..." : "整理券を発行"}
        </button>
      </div>
      <div>{state?.message && <p>{state.message}</p>}</div>
    </form>
  );
}
