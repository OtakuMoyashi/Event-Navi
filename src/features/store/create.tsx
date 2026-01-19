import { StoreType } from "@/generated/prisma/enums";
import { createStore } from "./action";

export default async function CreateStoreForm() {
  const storeTypes = Object.values(StoreType);

  return (
    <form action={createStore}>
      <div>
        <label>識別名</label>
        <input name="slug" required />
      </div>
      <div>
        <label>店舗名</label>
        <input name="name" required />
      </div>
      <div>
        <label>区分</label>
        <select name="storeType" required>
          {storeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">店舗を作成</button>
      </div>
    </form>
  );
}
