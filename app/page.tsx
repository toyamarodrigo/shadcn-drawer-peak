import { BottomSheet } from "@/components/bottom-sheet";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center p-24 bg-slate-900">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-bold text-white text-center">SHADCN DRAWER PEAK UP</h1>
        <BottomSheet />
      </div>
    </main>
  );
}
