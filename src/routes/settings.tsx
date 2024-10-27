import { Title } from "@solidjs/meta";

export default function Settings() {
  return (
    <>
      <Title>Settings</Title>
      <h1>Settings</h1>

      <div class="flex items-center gap-4">
        <label class="text-sm font-medium">Dark Mode</label>
        <button
          onClick={() => {
            const html = document.documentElement;
            const isDark = html.classList.contains("dark");
            html.classList.toggle("dark", !isDark);
          }}
          class="rounded-lg bg-secondary p-2 hover:bg-secondary/80"
        >
          <div class="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
