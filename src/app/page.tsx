import { HighlightedText } from "@/components/ui/highlighted-text";
import { Signature } from "@/components/ui/signature";
import { RandomizedText } from "@/components/ui/randomized-text";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 pt-32 px-6 md:px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-2xl md:text-4xl font-medium tracking-[-.03em] flex flex-wrap items-center gap-y-2 mb-4 sm:mb-0">
          Henry&nbsp;
          <HighlightedText from="top" delay={0.2} inView={true}>
            Lee
          </HighlightedText>
          &nbsp;, CS @&nbsp;
          <HighlightedText delay={0.6} from="left" inView={true}>
            Carleton
          </HighlightedText>
        </div>
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <RandomizedText
              split="chars"
              className="text-2xl md:text-3xl font-semibold tracking-tighter"
              inView={true}
              delay={0.2}
            >
              Hello, I&apos;m Henry.
            </RandomizedText>
            <RandomizedText
              className="text-base font-[550] tracking-tight text-muted-foreground"
              inView={true}
              delay={0.8}
            >
              I&apos;m a computer science student at Carleton University,
              specializing in full stack development and I&apos;m interested in
              building software that helps people live better lives.
            </RandomizedText>
          </div>
        </div>
        <Experience />
        <Projects />
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <Signature
            className="dark:invert-100 mt-8"
            text="Henry L."
            fontSize={16}
            color="#1D1D1F"
            inView={true}
          />
          <div className="flex gap-4 items-center mt-8">
            <Link href="https://github.com/henrylee746">
              <FaGithub className="text-2xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/hlee750/">
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
