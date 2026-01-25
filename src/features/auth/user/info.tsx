import { getCurrentUser } from "./action";

//ユーザー情報を表示するコンポーネント
export default async function UserInfo() {
  const user = await getCurrentUser();

  return (
    <div>
      {user ? (
        <div>
          <p>ユーザーID:{user.id}</p>
        </div>
      ) : (
        <div>
          <p>uuidに対応するユーザーが存在しません。</p>
        </div>
      )}
    </div>
  );
}
