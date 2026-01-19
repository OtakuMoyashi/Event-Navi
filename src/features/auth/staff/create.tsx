import { createStaff } from "./action";
import prisma from "@/lib/prisma";

export default async function CreateStaffForm() {
  const stores = await prisma.store.findMany({
    orderBy: { createdAt: "desc" },
  });

  //TODO zodでバリデーション
  return (
    <form action={createStaff}>
      <div>
        <label>仮想ドメイン</label>
        <input name="domain" required />
      </div>
      <div>
        <label>ログインID</label>
        <input name="loginID" required />
      </div>
      <div>
        <label>パスワード</label>
        <input name="password" type="password" required />
      </div>
      <div>
        <select name="storeId">
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">スタッフを登録</button>
      </div>
    </form>
  );
}
