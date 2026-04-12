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
    <section className="section-padding bg-white" id="team">
      <div className="container-custom">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            Meet the Team
          </p>
          <h2 className="mb-6">
            The People Behind<br />
            <span className="italic-text">Every Great Project</span>
          </h2>
          <p className="text-xl text-gray-medium leading-relaxed">
            A small team of big thinkers — strategists, designers, writers, and 
            developers who care deeply about craft and results in equal measure.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-light">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover image-hover-scale"
                />
              </div>

              {/* Body */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold font-poppins text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-gray-medium leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-bold uppercase tracking-tighter bg-gray-light text-gray-500 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  {member.socials.map((social, sIdx) => (
                    <Link
                      key={sIdx}
                      href={social.url}
                      className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-sm text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                      aria-label={`${member.name} ${social.platform}`}
                    >
                      {social.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}