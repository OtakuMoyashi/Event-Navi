import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";

type MessageProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any;
};

export const Message = ({ message }: MessageProps) => {
  return (
    <Alert>
      <CircleCheck />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
