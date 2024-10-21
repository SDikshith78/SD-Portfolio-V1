import IconCloud from "../../utils/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "react",
  "java",
  "figma",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "typescript",
  "express",
  "nodedotjs",
  "mongodb",
  "dart",
  "flutter",
  "android",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "jira",
  "gitlab",
  "androidstudio",
  "sonarqube",
];

export default function IconCloudDemo() {
  return (
    <div className="relative flex justify-center items-center z-30">

      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
