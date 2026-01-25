"use client";

import { useActionState } from "react";
import { createAdmin } from "./action";
import { AdminRole } from "@/generated/prisma/enums";

export default function CreateAdmin() {
  const [state, formAction, isPending] = useActionState(createAdmin, null);
  const adminRoles = Object.values(AdminRole);

  return (
    <form action={formAction}>
      <div>
        <label>メールアドレス</label>
        <input name="email" type="email" required disabled={isPending} />
      </div>
      <div>
        <label>パスワード</label>
        <input name="password" type="password" required disabled={isPending} />
      </div>
      <div>
        <label>区分</label>
        <select name="role" required disabled={isPending}>
          {adminRoles.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          {isPending ? "作成中..." : "管理者を作成"}
        </button>
      </div>
      <div>{state?.message && <p>{state.message}</p>}</div>
    </form>
  );
}
