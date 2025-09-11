import { Form as FormType } from "@/types/blocks/form";
import { Form } from "@/blocks/form";
import { Card } from "@/components/ui/card";

export function FormCard({ form }: { form: FormType }) {
  return (
    <Card className="p-4">
      <Form {...form} />
    </Card>
  );
}
