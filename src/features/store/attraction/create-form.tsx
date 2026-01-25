"use client";

import { useActionState } from "react";
import { createAttraction } from "./action";
import { Store } from "@/generated/prisma/client";

export function CreateAttractionForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createAttraction, null);

  return (
    <form action={formAction}>
      <div>
        <label>区分</label>
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
          {isPending ? "作成中..." : "企画を作成"}
        </button>
      </div>
      <div>{state?.message && <p>{state.message}</p>}</div>
    </form>
  );
}
