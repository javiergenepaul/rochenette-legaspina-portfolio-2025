import { Button } from "@/components/ui/button";
import { translate } from "@/lib";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center SM:items-start">
        <Button>{translate(t, "about.work.title")}</Button>
      </main>
    </div>
  );
}
