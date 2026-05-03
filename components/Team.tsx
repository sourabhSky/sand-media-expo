import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Zaid Rana",
    role: "Founder & Strategy Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=face",
    bio: "10+ years shaping brands and growth strategies for startups and multinationals. Previously at Ogilvy and a VC-backed SaaS company.",
    expertise: ["Brand Strategy", "GTM", "Growth"],
    socials: [
      { platform: "LinkedIn", label: "in", url: "#" },
      { platform: "Twitter", label: "𝕏", url: "#" },
    ],
  },
  {
    name: "Aisha Khan",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop&crop=face",
    bio: "Award-winning creative with a background in editorial design and brand identity. Leads all creative output and design standards across the studio.",
    expertise: ["Brand Identity", "Art Direction", "UI"],
    socials: [
      { platform: "LinkedIn", label: "in", url: "#" },
      { platform: "Instagram", label: "📷", url: "#" },
    ],
  },
  {
    name: "Omar Farooq",
    role: "Head of Digital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&crop=face",
    bio: "Leads our SEO, social, and content practice. Eight years building organic growth engines for e-commerce, SaaS, and professional services brands.",
    expertise: ["SEO", "Social", "Analytics"],
    socials: [
      { platform: "LinkedIn", label: "in", url: "#" },
      { platform: "Twitter", label: "𝕏", url: "#" },
    ],
  },
  {
    name: "Nadia Siddiqui",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&fit=crop&crop=face",
    bio: "Full-stack developer specialising in performant, accessible web experiences. Builds everything from marketing sites to complex web applications.",
    expertise: ["React", "Next.js", "Node.js"],
    socials: [
      { platform: "LinkedIn", label: "in", url: "#" },
      { platform: "GitHub", label: "⌥", url: "#" },
    ],
  },
];

export default function Team() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="team">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            Meet the Team
          </p>
          <h3 className="mb-6">
            The People Behind<br />
            <span className="italic-text text-gradient">Every Great Project</span>
          </h3>
          <p className="text-xl lg:text-sm text-gray-medium leading-relaxed">
            A small team of big thinkers — strategists, designers, writers, and
            developers who care deeply about craft and results in equal measure.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container with Hover Effect */}
              <div className="relative z-10 bg-white transition-all duration-500 group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-[5/5] rounded-2xl overflow-hidden mb-6 bg-gray-50 shadow-sm transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Socials Reveal */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {member.socials.map((social, sIdx) => (
                      <Link
                        key={sIdx}
                        href={social.url}
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm text-black hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
                        aria-label={`${member.name} ${social.platform}`}
                      >
                        {social.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-4 px-1">
                  <div className="relative">
                    <h3 className="text-lg font-bold font-poppins text-black mb-1 group-hover:text-black transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-600 transition-colors">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm lg:text-xs text-gray-medium leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {member.expertise.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold uppercase tracking-wider bg-gray-50 text-gray-500 border border-gray-100 px-2 py-1 rounded-md group-hover:bg-gray-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative background element that appears on hover */}
              <div className="absolute -inset-4 bg-gray-50/50 rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}