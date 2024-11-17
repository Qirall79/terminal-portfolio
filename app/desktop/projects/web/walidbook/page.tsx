import { Project } from '@/components/Project';

const details = {
  description:
    "This is a simple Facebook clone with most of Facebook's functionality. Users can create an account and login. They can create and delete their own posts, with a photo if they want to, like, and add or delete comments. You can search for your friends, send them a friend request, accept or reject your friend requests, and, if there's that one guy with a bad attitude, u can delete him from your friends list. Users can also change their email, password, fullname, and profile picture.",
  image: "/images/walidbook.png",
  code: "github.com/qirall79",
  live: "github.com/qirall79",
  tech: [
    "React.js",
    "Tailwind",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Cloudinary",
  ],
}

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start'>
      <Project details={details} />
    </div>
  );
}
