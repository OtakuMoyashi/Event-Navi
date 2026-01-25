"use client";

import { useActionState } from "react";
import { createStaff } from "./action";
import { Store } from "@/generated/prisma/client";

export function CreateStaffForm({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createStaff, null);

  return (
    <div className="space-y-2">
      <h1>スタッフ作成</h1>
      <form action={formAction}>
        <div>
          <label>仮想ドメイン</label>
          <input
            name="domain"
            required
            disabled={isPending}
            className="border border-gray-300"
          />
        </div>
        <div>
          <label>ログインID</label>
          <input
            name="loginID"
            required
            disabled={isPending}
            className="border border-gray-300"
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            required
            disabled={isPending}
            className="border border-gray-300"
          />
        </div>
        <div>
          <select name="storeId" disabled={isPending}>
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-indigo-200 rounded"
            disabled={isPending}
          >
            {isPending ? "作成中..." : "スタッフを作成"}
          </button>
        </div>
        <div>{state?.message && <p>{state.message}</p>}</div>
      </form>
    </div>
  );
}
