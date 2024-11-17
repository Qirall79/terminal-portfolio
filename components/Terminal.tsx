/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { Prompt } from "./Prompt";
import { TypeAnimation } from "react-type-animation";

const helpContent = [
  "available commands:",
  "help: this",
  "ls: list information folders",
  "cd: go to information folder",
  "cat: display information",
  "pwd: print current folder",
];

const commands = ["ls", "cd", "cat", "pwd", "clear", "help"];

const folders = ["projects", "about"];

export const fileSystem = {
  "/": {
    dirs: ["projects"],
    files: ["about.txt"],
  },
  projects: {
    dirs: [],
    files: ["pawtograph", "webserv"],
  },
};

export const Terminal = () => {
  const [content, setContent] = useState([]);
  const [dir, setDir] = useState("/");
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
        if (args[1] == ".." || folders.includes(args[1])) {
          setDir(args[1]);
        } else {
          if (!args[1]) {
            setDir("/");
          } else newContent.push("Directory not found!");
        }
      }

      if (singleCommand === "ls") {
        const dirs = fileSystem[dir].dirs.map((d) => d + "/");
        const files = fileSystem[dir].files;
        const fullList = [...dirs, ...files].join(" | ");

        newContent.push(fullList);
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

        return (
          <div
            className={`${
              c.startsWith("$>") ? "font-bold text-[#9B87F5]" : ""
            } break-words break-all`}
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
