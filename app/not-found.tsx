import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-32 text-center">
      <h1 className="font-display text-3xl mb-4">Page not found</h1>
      <p className="text-textDim mb-8">
        The agent or page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
