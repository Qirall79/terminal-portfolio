const data = {
  "help.txt":
    "Projects are grouped by folders topic, Web, System Programming, or Computer Graphics. cd into the topic that you like to find the actual projects, cat them to get information about each one.",
  "about.txt": {
    education: ["1337 coding school", "ENCG Settat"],
  },
  pawtograph: {
    description:
      "Pawtograph is the social media app for pets. Pet owners can create accounts for their pets, sharing their photos and thoughts with other pet owners, or should I say, with other pets. You can post, follow, message, and interact with posts by liking and commenting. Real time notification also exists on following, liking, commenting or replying to a comment. Owners can mark their pets as 'For adoption' if, for some reason, they can't keep their pet with them anymore.",
    image: "/images/pawtograph.png",
    code: "github.com/qirall79",
    live: "github.com/qirall79",
    tech: ["Next.js", "TypeScript", "Tailwind", "Redux", "Prisma", "AWS S3"],
  },
  walidbook: {
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
  },
  webserv: {
    description:
      "Webserv is a custom HTTP server built from scratch in C++98, designed to function similarly to Nginx. Developed by Qirall79 and ApplexX7, it supports essential web server features such as static file serving, directory listing, and CGI execution. The server handles multiple concurrent clients using I/O multiplexing and supports HTTP methods like GET, POST, and DELETE.",
    image: "/images/webserv.png",
    code: "github.com/qirall79",
    live: "github.com/qirall79",
    tech: ["c++"],
  },
  "note-it": {
    description:
      "This is a note taking web app that is similar to Google Keep. You want to remember something important by fear to forgetting it ? I got your back, u simply create an account and start creating. Whenever u comeback, your notes are still there ! You can create, delete and edit your notes. Notes must be associated to a project. You can create a project on the sidebar, and u can delete it when you're done with it.",
    image: "/images/noteit.png",
    code: "github.com/qirall79",
    live: "github.com/qirall79",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  minishell: {
    description: "This is an implementation of bash using C",
    image: "",
    code: "github.com/qirall79",
    live: "github.com/qirall79",
    tech: ["C"],
  },

  philosophers: {
    description:
      "This is a simulation of the Dining Philosophers problem using both posix threads and semaphores in C.",
    image: "",
    code: "github.com/qirall79",
    live: "github.com/qirall79",
    tech: ["C"],
  },

  cub3d: {
    description:
      "Cub3d is a raycasting engine using C and MinilibX, similar to the Wolfenstein 3D game.",
    image: "",
    code: "github.com/qirall79",
    live: "github.com/qirall79",
    tech: ["C", "MinilibX"],
  },

  "fract-ol": {
    description:
      "Fract-ol is a generator for fractals such as the Mandelbrot and Julia sets using C and MinilibX.",
    image: "",
    code: "github.com/qirall79",
    live: "github.com/qirall79",
    tech: ["C", "MinilibX"],
  },
};

export default data;
