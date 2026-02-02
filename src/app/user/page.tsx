import UserInfo from "@/features/auth/user/info";
import UserTicketList from "@/features/store/attraction/ticket/list";

export default function UserPage() {
  return (
    <div className="p-4 space-y-4">
      <UserInfo />
      <UserTicketList />
    </div>
  );
}
