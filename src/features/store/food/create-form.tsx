"use client";

import { useActionState } from "react";
import { createFoodWithForm } from "./action";
import { Store } from "@/generated/prisma/client";

export function CreateFoodForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(
    createFoodWithForm,
    null,
  );

  return (
    <div className="space-y-2">
      <h1>企画を作成</h1>
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
          <button className="bg-sub rounded" type="submit" disabled={isPending}>
            {isPending ? "作成中..." : "企画を作成"}
          </button>
        </div>
        <div>{state?.message && <p>{state.message}</p>}</div>
      </form>
    </div>
  );
}
