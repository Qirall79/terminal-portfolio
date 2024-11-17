import { Project } from '@/components/Project';

const details = {
  description:
    "Pawtograph is the social media app for pets. Pet owners can create accounts for their pets, sharing their photos and thoughts with other pet owners, or should I say, with other pets. You can post, follow, message, and interact with posts by liking and commenting. Real time notification also exists on following, liking, commenting or replying to a comment. Owners can mark their pets as 'For adoption' if, for some reason, they can't keep their pet with them anymore.",
  image: "/images/pawtograph.png",
  code: "github.com/qirall79",
  live: "github.com/qirall79",
  tech: ["Next.js", "TypeScript", "Tailwind", "Redux", "Prisma", "AWS S3"],
};

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start'>
      <Project details={details} />
    </div>
  );
}
