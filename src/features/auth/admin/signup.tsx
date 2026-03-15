import SignUpAdminForm from "./signup-form";

type Props = {
  inviteToken?: string;
};

export default async function SignUpAdmin({ inviteToken }: Props) {
  if (!inviteToken) {
    return <p>招待リンクが必要です。</p>;
  }
  return <SignUpAdminForm inviteToken={inviteToken} />;
}
