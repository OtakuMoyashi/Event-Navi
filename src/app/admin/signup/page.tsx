import { createAdmin } from "../../../features/auth/admin/action";

export default function AdminSignUpForm() {
  return (
    <form action={createAdmin}>
      <div>
        <label>メールアドレス</label>
        <input name="email" type="email" required />
      </div>
      <div>
        <label>パスワード</label>
        <input name="password" type="password" required></input>
        <button type="submit">登録</button>
      </div>
    </form>
  );
}
