import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        {APP_NAME}
      </h1>
      <p className="mt-3 max-w-md text-sm text-foreground/70">
        {APP_DESCRIPTION}
      </p>
    </div>
  );
}
