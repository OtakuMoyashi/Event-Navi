import { User } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { createUser } from "./action";
import { cookies } from "next/headers";

//ユーザー情報を表示するコンポーネント
export default async function UserInfo() {
  const cookieStore = await cookies();
  const uuid = cookieStore.get("uuid")?.value;

  if (!uuid) {
    return <p>UUIDが存在しません。</p>;
  }
  const user = await findUser(uuid);

  return (
    <>
      <p>ユーザーID:{user.id}</p>
      <p>UUID: {user.uuid}</p>
    </>
  );
}

//uuidをもとにユーザーを取得
async function findUser(uuid: string): Promise<User> {
  try {
    const user: User | null = await prisma.user.findUnique({
      where: { uuid: uuid },
    });
    if (!user) {
      const createdUser: User = await createUser(uuid);
      return createdUser;
    }
    return user;
  } catch (error) {
    throw error;
  }
}
