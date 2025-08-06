const data = {
  'help.txt':
    'Projects are grouped by topic, Web, System Programming, or Computer Graphics. cd into the topic that you like to find the actual projects, cat them to get information about each one.',
  'about.txt': {
    education: ['1337 coding school', 'ENCG Settat'],
  },
  transcendence: {
    description:
      'Transcendence is an online web-based Ping-Pong game, with chat functionality, friendships, live notification and more.',
    image: '/images/transcendence.png',
    code: 'https://github.com/Qirall79/transcendence',
    live: 'https://ftranscendence.ddns.net:8080/',
    tech: [
      'Django',
      'React.js',
      'TypeScript',
      'Tailwind',
      'PostgreSQL',
      'Cloudinary',
    ],
  },
  pawtograph: {
    description:
      "Pawtograph is the social media app for pets. Pet owners can create accounts for their pets, sharing their photos and thoughts with other pet owners, or should I say, with other pets. You can post, follow, message, and interact with posts by liking and commenting. Real time notification also exists on following, liking, commenting or replying to a comment. Owners can mark their pets as 'For adoption' if, for some reason, they can't keep their pet with them anymore.",
    image: '/images/pawtograph.png',
    code: 'https://github.com/Qirall79/pawtograph',
    live: 'https://pawtograph.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Redux', 'Prisma', 'AWS S3'],
  },
  walidbook: {
    description:
      "This is a simple Facebook clone with most of Facebook's functionality. Users can create an account and login. They can create and delete their own posts, with a photo if they want to, like, and add or delete comments. You can search for your friends, send them a friend request, accept or reject your friend requests, and, if there's that one guy with a bad attitude, u can delete him from your friends list. Users can also change their email, password, fullname, and profile picture.",
    image: '/images/walidbook.png',
    code: 'https://github.com/Qirall79/walidbook-client',
    live: 'https://qirall79.github.io/walidbook-client/',
    tech: [
      'React.js',
      'Tailwind',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Cloudinary',
    ],
  },
  webserv: {
    description:
      'Webserv is a custom HTTP server built from scratch in C++98, designed to function similarly to Nginx. Developed by Qirall79 and ApplexX7, it supports essential web server features such as static file serving, directory listing, and CGI execution. The server handles multiple concurrent clients using I/O multiplexing and supports HTTP methods like GET, POST, and DELETE.',
    image: '/images/webserv.png',
    code: 'https://github.com/Qirall79/webserv',
    live: '',
    tech: ['c++'],
  },
  reDIYs: {
    description:
      'ReDIYs a full Redis clone built from scratch in C++. The project closely mirrors the behavior of a real Redis server, covering core features like command parsing, key-value storage, expiration, data structures (lists, streams), replication, and RDB snapshot loading. The entire server is built without external dependencies (aside from standard libraries), and it communicates with real Redis clients via the RESP protocol.',
    image: '/images/redis.png',
    code: 'https://github.com/Qirall79/reDIYs',
    live: '',
    tech: ['c++'],
  },
  sqlVeryLite: {
    description:
      'A minimal SQLite database implementation built from scratch. This project demonstrates database internals, file format parsing, and query processing by creating a working SQLite clone that can read and query real SQLite database files.',
    image: '/images/sqlite.png',
    code: 'https://github.com/Qirall79/sqlVeryLite',
    live: '',
    tech: ['c++'],
  },
  'note-it': {
    description:
      "This is a note taking web app that is similar to Google Keep. You want to remember something important by fear to forgetting it ? I got your back, u simply create an account and start creating. Whenever u comeback, your notes are still there ! You can create, delete and edit your notes. Notes must be associated to a project. You can create a project on the sidebar, and u can delete it when you're done with it.",
    image: '/images/noteit.png',
    code: 'https://github.com/Qirall79/noteit',
    live: 'https://symphonious-cascaron-d31a5b.netlify.app/',
    tech: [
      'React.js',
      'TypeScript',
      'Tailwind',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },

  minishell: {
    description:
      'Minishell is an implementaiton of bash using C. It involves handling basic shell operations like displaying a prompt, executing commands, managing history, and supporting built-in commands (echo, cd, pwd, etc.). Key features include input/output redirection, piping, handling quotes and special characters, and implementing signal handling (ctrl-C, ctrl-D, ctrl-). The bonus adds support for logical operators (&&, ||) and wildcard expansion (*). The project requires following C norms, managing memory properly, and using a Makefile for compilation.',
    image: '/images/minishell.png',
    code: 'https://github.com/Qirall79/not-very-mini-shell',
    live: '',
    tech: ['C'],
  },

  cub3d: {
    description:
      'Cub3d is a raycasting engine using C and MinilibX, similar to the Wolfenstein 3D game.',
    image: '/images/cub3d.png',
    code: 'https://github.com/Qirall79/cub3d',
    live: '',
    tech: ['C', 'MinilibX'],
  },

  'fract-ol': {
    description:
      'Fract-ol is a generator for fractals such as the Mandelbrot and Julia sets using C and MinilibX.',
    image: '/images/fractol.png',
    code: 'https://github.com/Qirall79/fract-ol',
    live: '',
    tech: ['C', 'MinilibX'],
  },
  
  'java-modules': {
    description:
      'A set of small projects in java covering basic to advanced concepts such as IO manipulation, ORMs, reflection, testing, sockets, and the Spring framework.',
    image: '/images/java.png',
    code: 'https://github.com/Qirall79/java-modules',
    live: '',
    tech: ['java'],
  },
};

export default data;
