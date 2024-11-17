/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { Prompt } from "./Prompt";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const helpContent = [
  "available commands:",
  "help: this",
  "ls: list information folders",
  "cd: go to information folder",
  "cat: display information",
  "pwd: print current folder",
];

const commands = ["ls", "cd", "cat", "clear", "help"];

const projects = ["webserv", "pawtograph", "walidbook", "note-it"];

export const fileSystem = {
  "/": {
    dirs: ["projects"],
    files: ["about.txt"],
  },
  projects: {
    dirs: ["web"],
    files: ["help.txt"],
  },
  web: {
    dirs: [],
    files: ["pawtograph", "webserv", "walidbook", "note-it"],
  },
};

const fileContents = {
  "help.txt": "This is some help",
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
};

const skills = [
  "Next.js",
  "React.js",
  "Redux",
  "TypeScript",
  "AWS",
  "Express.js",
  "MongoDB",
  "Node.js",
  "Tailwind CSS",
  "C",
  "C++",
  "Java",
  "Python",
  "Git",
];

export const Terminal = () => {
  const [content, setContent] = useState([]);
  const [dir, setDir] = useState("/");
  const [directories, setDirectories] = useState(["/"]);
  const [cmd, setCmd] = useState("");
  const [cleared, setCleared] = useState(false);
  const [animated, setAnimated] = useState(false);

  const addContent = (c: string[]) => {
    setContent([...content, ...c]);
  };

  const handleCommand = (command: string) => {
    const args = command.split(" ");

    const singleCommand = args[0];

    setCmd(singleCommand);

    if (!commands.includes(singleCommand)) {
      addContent([
        (dir == "/" ? "" : dir) + "$> " + command,
        "Command not found!",
      ]);
      return;
    }

    if (command == "clear") {
      setContent([]);
      setCleared(true);
    } else {
      const newContent = [(dir == "/" ? "" : dir) + "$> " + command];

      if (singleCommand === "cd") {
        if (fileSystem[dir].dirs.includes(args[1]) || args[1] === "..") {
          {
            if (args[1] !== "..")
            {
              setDir(args[1]);
              setDirectories([...directories, args[1]]);
            }
            else {
              const dirs = [...directories];
              dirs.pop();
              setDir(dirs[dirs.length - 1]);
              setDirectories([...dirs]);
            }
          }
        } else {
          if (!args[1]) {
            setDir("/");
            setDirectories(["/"])
          } else newContent.push("Directory not found!");
        }
      }

      if (singleCommand === "ls") {
        const dirs = fileSystem[dir].dirs.map((d) => d + "/");
        const files = fileSystem[dir].files;
        const fullList = [...dirs, ...files].join(" | ");

        newContent.push(fullList);
      }

      if (singleCommand === "cat") {
        if (!args[1]) newContent.push("usage: cat <filename>");
        else {
          if (Object.keys(fileContents).includes(args[1])) {
            if (projects.includes(args[1])) newContent.push(args[1] + "<>");
            else {
              if (args[1] === "about.txt") newContent.push("|||");
              else newContent.push(fileContents[args[1]]);
            }
          } else newContent.push("file not found!");
        }
      }

      addContent(newContent);
    }
  };

  const handleKeys = (e) => {
    if (e.metaKey && e.key == "k") {
      setContent([]);
      setCleared(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent([...helpContent]);
      setAnimated(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onKeyDown={handleKeys}
      className="w-full max-w-screen flex-grow p-4 flex flex-col"
    >
      {!cleared && (
        <div>
          <span className="font-bold text-[#9B87F5] pr-3">{"$>"}</span>
          <TypeAnimation
            sequence={["help"]}
            wrapper="span"
            cursor={false}
            speed={1}
          />
          {!animated && (
            <span
              id="tmp-caret"
              className={`w-2 h-6 bg-neutral-50 inline-block absolute`}
            />
          )}
        </div>
      )}

      {content.map((c, i) => {
        if (c.includes("$>")) {
          let [start, end] = c.split("$>");

          return (
            <div className="break-words break-all" key={i}>
              <span className="font-bold text-[#9B87F5]">{start + " $>"}</span>
              <span>{end}</span>
            </div>
          );
        }

        if (c.includes(" | ")) {
          const list = c.split(" | ");

          return (
            <div className={`break-words break-all flex space-x-4`} key={i}>
              {list.map((l) => {
                return (
                  <span
                    className={`${
                      l.endsWith("/") ? "font-bold text-cyan-400" : ""
                    }`}
                    key={l}
                  >
                    {l}
                  </span>
                );
              })}
            </div>
          );
        }

        if (c.endsWith("<>")) {
          // this is a project
          const name = c.split("<>")[0];
          const details = fileContents[name];

          return (
            <div key={i}>
              <br />
              <p>{details.description}</p>
              <br />
              <div className="flex space-x-4 items-center">
                <span className="font-bold">technologies used: </span>
                <ul
                  className={`flex flex-wrap space-x-4 font-semibold text-lg`}
                >
                  {details.tech.map((t, i) => {
                    return (
                      <li
                        className={`${
                          i % 2 ? "text-emerald-200" : "text-blue-400"
                        }`}
                        key={t}
                      >
                        {t}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {details.image && (
                <>
                  <br />
                  <Image
                    className="rounded-md"
                    width={400}
                    height={400}
                    src={details.image}
                    alt={name}
                  />
                </>
              )}

              <br />
              <div className="flex space-x-4 font-bold">
                <Link
                  className="text-cyan-400 hover:text-cyan-600 transition-all"
                  href={details.code}
                >
                  Code
                </Link>
                {details.live && (
                  <Link
                    className="text-fuchsia-500 hover:text-fuchsia-700 transition-all"
                    href={details.live}
                  >
                    Live
                  </Link>
                )}
              </div>
              <br />
            </div>
          );
        }

        if (c === "|||") {
          // this is about.txt
          return (
            <div className="max-w-[800px] text-left" key={i}>
              <br />
              <p>
                I&apos;m Walid Belfatmi, a self-taught full stack developer. The
                combination of creativity, problem solving, and permanent
                learning is what drives my passion for programming in general,
                and specifically web development.
              </p>

              <br />

              <p className="font-semibold text-teal-200">Education: </p>
              <div className="flex justify-between translate-x-4 min-w-[400px] max-w-[600px]">
                <p>1337 Coding School (Software Development)</p>
                <p>2023 - 2025</p>
              </div>
              <div className="flex justify-between translate-x-4 min-w-[400px] max-w-[600px]">
                <p>ENCG Settat (Financial Management)</p>
                <p>2019 - 2023</p>
              </div>

              <br />

              <p className="font-semibold text-fuchsia-200">Experiences: </p>
              <div className="flex space-x-8 translate-x-4">
                <p>Astren Empower (Intern full stack developer)</p>
                <p>Apr 2023 - Jul 2023</p>
              </div>

              <br />

              <p className="font-semibold ">Skills: </p>
              <ul className="flex flex-wrap space-x-4 translate-x-4">
                {skills.map((s, j) => {
                  return (
                    <li
                      className={`${
                        j % 2 ? "text-emerald-300" : "text-cyan-300"
                      }`}
                      key={j}
                    >
                      {s}
                    </li>
                  );
                })}
              </ul>

              <br />

              <p className="font-semibold text-violet-300">Contact: </p>
              <ul className="flex flex-wrap space-x-4 translate-x-4 font-semibold">
                <li className="text-red-300 hover:text-red-200 transition-all">
                  <Link
                    href={"mailto:walidbelfatmi.dev@gmail.com"}
                    target="_blank"
                  >
                    Email
                  </Link>
                </li>
                <li className="text-blue-500 hover:text-blue-400 transition-all">
                  <Link
                    href={
                      "https://www.linkedin.com/in/walid-belfatmi-1587751a2/"
                    }
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="text-slate-400 hover:text-slate-300 transition-all">
                  <Link href={"https://github.com/Qirall79"} target="_blank">
                    Github
                  </Link>
                </li>
              </ul>

              <br />
            </div>
          );
        }

        return (
          <div
            className={`${
              c.startsWith("$>") ? "font-bold text-[#9B87F5]" : ""
            } break-words`}
            key={i}
            style={{
              display: cmd == "ls" ? "inline" : "block",
            }}
          >
            {c}
          </div>
        );
      })}
      <Prompt dir={dir == "/" ? "" : dir} handleCommand={handleCommand} />
    </div>
  );
};
