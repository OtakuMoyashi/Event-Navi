"use client";

import { useActionState } from "react";
import { StoreType } from "@/generated/prisma/enums";
import { createStore } from "./action";

export default function CreateStore() {
  const [state, formAction, isPending] = useActionState(createStore, null);
  const storeTypes = Object.values(StoreType);

  return (
    <div className="space-y-2">
      <h1>店舗を作成</h1>
      <form action={formAction}>
        <div>
          <label>識別名</label>
          <input
            name="slug"
            required
            disabled={isPending}
            className="border border-text-01-light"
          />
        </div>
        <div>
          <label>店舗名</label>
          <input
            name="name"
            required
            disabled={isPending}
            className="border border-text-01-light"
          />
        </div>
        <div>
          <label>区分</label>
          <select name="storeType" required disabled={isPending}>
            {storeTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="bg-sub rounded" type="submit" disabled={isPending}>
            {isPending ? "作成中..." : "店舗を作成"}
          </button>
        </div>
        <div>{state?.message && <p>{state.message}</p>}</div>
      </form>
    </div>
  );
}
