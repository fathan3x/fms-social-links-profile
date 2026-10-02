import { cn } from "cn";
import avatar from "./assets/jessica.webp";
import "@fontsource-variable/inter";

export function App() {
  const style = {
    "bg-new-gray-900": "bg-[hsl(0,0%,8%)]",
    "bg-new-gray-800": "bg-[hsl(0,0%,12%)]",
    "bg-new-gray-700": "bg-[hsl(0,0%,20%)]",
    "text-new-green": "text-[hsl(75,94%,57%)]",
    "button-hover": "hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,8%)]",
  };
  return (
    <main
      className={cn(
        style["bg-new-gray-900"],
        "w-screen h-screen flex items-center justify-center text-white p-6",
      )}
      style={{ fontFamily: "Inter Variable" }}
    >
      <section
        className={cn(
          style["bg-new-gray-800"],
          "p-8 rounded-lg max-w-105 w-full flex flex-col items-center space-y-6",
        )}
      >
        <img
          src={avatar}
          className="max-w-26 max-h-26 w-full h-full rounded-full"
        />
        <div className="space-y-3">
          <h1 className="text-2xl leading-none font-semibold text-center">
            Jessica Randall
          </h1>
          <p
            className={cn(
              "font-semibold text-center text-sm",
              style["text-new-green"],
            )}
          >
            London, United Kingdom
          </p>
        </div>
        <p className="text-sm text-center">
          "Front-end developer and avid reader."
        </p>
        <div className="w-full space-y-4 px-2 pb-2">
          {links.map((link) => (
            <button
              key={link.id}
              className={cn(
                "block w-full rounded-md p-3 font-bold cursor-pointer",
                style["bg-new-gray-700"],
                style["button-hover"],
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const links = [
  {
    id: "github",
    label: "GitHub",
  },
  {
    id: "frontend-mentor",
    label: "Frontend Mentor",
  },
  {
    id: "linkedin",
    label: "Linkedin",
  },
  {
    id: "twitter",
    label: "Twitter",
  },
  {
    id: "instagram",
    label: "Instagram",
  },
];
