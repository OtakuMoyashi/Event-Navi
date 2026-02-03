import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type SuccessProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  redirectLink: string;
};

export const SuccessPrompt = ({ redirectLink }: SuccessProps) => {
  return (
    <div>
      <Button>
        <Link href={redirectLink}>戻る</Link>
      </Button>
    </div>
  );
};
