import { Card, CardContent } from "../ui/card";

type notFoundProps = {
  contentName: string;
};

export const NotFoundPrompt = ({ contentName }: notFoundProps) => {
  return (
    <Card>
      <CardContent className="py-10 text-center">
        <p className="text-muted-foreground">{contentName}はまだありません。</p>
      </CardContent>
    </Card>
  );
};
