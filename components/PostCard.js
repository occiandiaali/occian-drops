import Link from "next/link";

function PostCard({ title, date, description, slug }) {
  return (
    <div className="my-4 py-4 border-b">
      <Link href="/[slug]" as={`/${slug}`} passHref>
        <h2 className="font-bold text-2xl my-4 cursor-pointer">{title}</h2>
      </Link>
      <time className="text-gray-400">{date}</time>
      <p className="mt-4 italic">{description}</p>

      <Link href="/[slug]" as={`/${slug}`}>
        <a className="text-blue-500 mt-4 mb-2 block">Read &raquo;</a>
      </Link>
    </div>
  );
}

export default PostCard;
