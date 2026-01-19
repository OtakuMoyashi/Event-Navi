import { createAdmin } from "./action";

export default function CreateAdminForm() {
  return (
    <form action={createAdmin}>
      <div>
        <label>メールアドレス</label>
        <input name="email" type="email" required />
      </div>
      <div>
        <label>パスワード</label>
        <input name="password" type="password" required></input>
        <div>
          <button type="submit">登録</button>
        </div>
      </div>
    </form>
  );
}
