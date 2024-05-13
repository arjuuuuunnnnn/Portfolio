"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "devtools",
    id: "devtools",
    content: (
     <>
        <div className="flex flex-wrap">
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=azure" alt="Azure icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=debian" alt="Debian icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=docker" alt="Docker icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=git" alt="Git icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=kali" alt="Kali Linux icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=linux" alt="Linux icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=neovim" alt="Neovim icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=unity" alt="Unity icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=vim" alt="Vim icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=vscode" alt="Visual Studio Code icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=postman" alt="Postman icon" />
          </span>
        </div>
      </> 
    ),
  },
  {
    title: "webdev",
    id: "webdev",
    content: (
     <>
        <div className="flex flex-wrap">
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=html" alt="HTML icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=css" alt="CSS icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=react" alt="React icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=flask" alt="Flask icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB icon" />
          </span>
        </div>
      </> 
    ),
  },
{
    title: "langs",
    id: "langs",
    content: (
         <>
        <div className="flex flex-wrap">
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=c" alt="C icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=cpp" alt="C++ icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=py" alt="Python icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=tensorflow" alt="TensorFlow icon" />
          </span>
          <span className="mr-2 mb-2">
            <img src="https://skillicons.dev/icons?i=flutter" alt="Flutter icon" />
          </span>
        </div>
      </> 
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("devtools");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-zinc-400">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/About.png" width={500} height={900} alt="About Image"/>
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-emerald-800">
            <br />
            <br />
            <br />
            <br />
            About Me
          </h2>
			<br/>
          <p className="text-base md:text-lg text-zinc-400">
            Hello{" "}
            <strong className="font-extrabold">I&apos;m Hemanth S Banur</strong>
            <br />
            Just your average 19-year-old programmer, problem solver, and tech
            enthusiast.
            <br />
            <strong className="font-extrabold text-emerald-800">
              sudo apt-get install programmer
            </strong>
            <br />
            <br />
            Of course, that&apos;s not all. I also happen to be a game developer and
            a web developer. I mean, who needs a social life when you can spend
            your days{" "}
            <strong className="font-extrabold text-emerald-800">
              git push
            </strong>
            ing and{" "}
            <strong className="font-extrabold text-emerald-800">
              npm install
            </strong>
            ing, am I right?
            <br />
            <br />
            And let&apos;s not forget my undying love for machine learning. I
            practically live in the terminal, running{" "}
            <strong className="font-extrabold text-emerald-800">
              python3 ml_model.py
            </strong>{" "}
            until the sun comes up. It&apos;s a tough job, but someone&apos;s gotta do it.
            <br />
            <strong className="font-extrabold text-emerald-800">
              sudo apt-get install machine-learning
            </strong>
            <br />
            <br />
            Oh, and did I mention I&apos;m a total Linux enthusiast? I bet you
            couldn&apos;t tell from all the{" "}
            <strong className="font-extrabold text-emerald-800">
              sudo
            </strong>{" "}
            commands
            <br />
            <br />
            Anyway, that&apos;s me in a nutshell. I&apos;m a well-rounded individual with
            a diverse skillset and an insatiable thirst for knowledge. Now, if
            you&apos;ll excuse me, I need to go{" "}
            <strong className="font-extrabold text-emerald-800">
              sudo reboot
            </strong>{" "}
            my brain and come up with some more captivating hobbies
            <br />
          </p>
		<div className="mt-8">
		<h5 className="text-3xl font-bold text-emerald-800 mb-3">
		My Tech Stack
		</h5>
          <div className="flex flex-row justify-start mr-12">
            <TabButton
              selectTab={() => handleTabChange("devtools")}
              active={tab === "devtools"}
			  className="mr-4"
            >
              {" "}
				Dev Tools
              {" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("webdev")}
              active={tab === "webdev"}
			  className="mr-4"
            >
              {" "}
				Web Dev
			  {" "}
            </TabButton>
			<TabButton
			  selectTab={() => handleTabChange("langs")}
			  active={tab === "langs"}
			  className="mr-4"
			>
			  {" "}
				Languages
			  {" "}
			</TabButton>
          </div>
		</div>
          <div className="mt-8 mr-12">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
