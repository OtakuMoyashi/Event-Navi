"use client";

import { useActionState } from "react";
import { createStaff } from "./action";
import { Store } from "@/generated/prisma/client";

export function CreateStaffClient({ stores }: { stores: Store[] }) {
  const [state, formAction, isPending] = useActionState(createStaff, null);

  return (
    <form action={formAction}>
      <div>
        <label>仮想ドメイン</label>
        <input name="domain" required disabled={isPending} />
      </div>
      <div>
        <label>ログインID</label>
        <input name="loginID" required disabled={isPending} />
      </div>
      <div>
        <label>パスワード</label>
        <input name="password" type="password" required disabled={isPending} />
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
        <button type="submit" disabled={isPending}>
          {isPending ? "作成中..." : "スタッフを作成"}
        </button>
      </div>
    </form>
  );
}
