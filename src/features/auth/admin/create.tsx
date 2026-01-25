"use client";

import { useActionState } from "react";
import { createAdmin } from "./action";
import { AdminRole } from "@/generated/prisma/enums";

export default function CreateAdmin() {
  const [state, formAction, isPending] = useActionState(createAdmin, null);
  const adminRoles = Object.values(AdminRole);

  return (
    <div className="space-y-2">
      <h1>管理者を作成</h1>
      <form action={formAction}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
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
          <button
            type="submit"
            className="bg-indigo-200 rounded"
            disabled={isPending}
          >
            {isPending ? "作成中..." : "管理者を作成"}
          </button>
        </div>
        <div>{state?.message && <p>{state.message}</p>}</div>
      </form>
    </div>
  );
}
