import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-primary/10 -skew-x-[10deg] p-4 px-6 border border-primary/80 border-dotted lg:w-2/3 w-full">
      <Link href={"/"}>
        <h1 className="text-2xl text-primary-foreground font-bold">
          Code Sculptor
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-4">
          <Link href={"/dashboard"}>Questions</Link>
          <Link href={"/leaderboard"}>Leaderboard</Link>
        </ul>
      </nav>
    </header>
  );
}
