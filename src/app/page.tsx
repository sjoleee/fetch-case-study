import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-16">
      <h1 className="text-4xl font-bold">fetch case study</h1>
      <section className="flex flex-col gap-4">
        <Link href="/fetch">fetch</Link>
      </section>
      <section className="flex flex-col gap-4"></section>
      <section className="flex flex-col gap-4"></section>
      <section className="flex flex-col gap-4"></section>
    </main>
  );
}
