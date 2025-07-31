import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default async function Page({ params }) {
  const { handle } = params
  const client = await clientPromise
  const db = client.db("LinkTree")
  const collection = db.collection("links")

  const item = await collection.findOne({ handle })
  if (!item) {
    return notFound()
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 font-mono text-white overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Card container */}
      <div className="z-10 bg-stripes border-4 border-white rounded-xl shadow-[4px_4px_0px_0px_#233554] p-8 sm:p-10 flex flex-col items-center gap-6 w-full max-w-xl sm:max-w-2xl">
        {/* Profile picture - fixed */}
        <div className="h-28 w-28 rounded-full bg-blue-800 p-1 border-4 border-white shadow-[2px_2px_0px_#233554] overflow-hidden flex items-center justify-center">
          <img
            className="h-full w-full rounded-full object-cover"
            src={item.pic}
            alt={item.handle ? `Profile picture of @${item.handle}` : "Profile picture"}
          />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-wide text-center">
          @{item.handle}
        </h1>
        {(item.github || item.linkedin || item.twitter) && (
          <div className="flex gap-4 text-white text-2xl mt-1">
            {item.github && (
              <a href={item.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="hover:text-blue-300 transition" />
              </a>
            )}
            {item.linkedin && (
              <a href={item.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>
            )}
            {item.twitter && (
              <a href={item.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="hover:text-sky-400 transition" />
              </a>
            )}
          </div>
        )}
        {item.desc && (
          <p className="text-center text-blue-200 text-base font-light italic px-4">
            {item.desc}
          </p>
        )}
        {item.email && (
          <a
            href={`mailto:${item.email}`}
            className="text-sm underline text-blue-300 hover:text-blue-200 mt-1"
          >
            Contact Me
          </a>
        )}
        <div className="w-full flex flex-col items-center gap-4 mt-4">
          {item.links.map((link, index) => (
            <Link key={index} href={link.link} target="_blank" className="w-full">
              <div className="w-full px-6 py-4 rounded-md shadow-[3px_3px_0px_#233554] bg-blue-800 hover:bg-blue-700 transition text-center font-semibold text-white border-2 border-white">
                {link.linktext}
                {link.desc && (
                  <div className="text-sm text-blue-100 mt-1">{link.desc}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <footer className="text-xs text-white/50 mt-6 text-center">
          © {new Date().getFullYear()} @{item.handle} • Built with Next.js
        </footer>
      </div>
    </div>
  )
}
