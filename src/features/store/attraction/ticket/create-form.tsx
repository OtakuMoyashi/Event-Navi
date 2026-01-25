"use client";

import { useActionState } from "react";
import { createTicket } from "./action";
import { Store } from "@/generated/prisma/client";

export function CreateTicketForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createTicket, null);

  return (
    <div className="space-y-2">
      <h1>整理券を発行</h1>
      <form action={formAction}>
        <div>
          <label>人数</label>
          <input
            name="numberOfPeople"
            type="number"
            required
            disabled={isPending}
            className="border border-gray-300"
          />
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
          <button
            className="bg-indigo-200 rounded "
            type="submit"
            disabled={isPending}
          >
            {isPending ? "発行中..." : "整理券を発行"}
          </button>
        </div>
        <div>{state?.message && <p>{state.message}</p>}</div>
      </form>
    </div>
  );
}
