"use client";

import { useActionState } from "react";
import { createItem } from "./action";
import { Store } from "@/generated/prisma/client";

export function CreateItemForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createItem, null);
  return (
    <div className="space-y-2">
      <h1>商品を登録</h1>
      <form action={formAction}>
        <div>
          <label>模擬店を選択</label>
          <select name="storeId" required disabled={isPending}>
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>商品名</label>
          <input
            name="name"
            type="text"
            required
            disabled={isPending}
            className="border border-text-01-light"
          />
        </div>
        <div>
          <label>在庫数</label>
          <input
            name="stock"
            type="number"
            required
            disabled={isPending}
            className="border border-text-01-light"
          />
        </div>

        <div>
          <button
            className="bg-sub rounded "
            type="submit"
            disabled={isPending}
          >
            {isPending ? "登録中..." : "商品を登録"}
          </button>
        </div>
        <div>{state?.message && <p>{state.message}</p>}</div>
      </form>
    </div>
  );
}
