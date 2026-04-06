'use client';

import { useEffect, useRef } from 'react';

interface TerminalMockupProps {
  title?: string;
  code?: string;
  typingSpeed?: number;
}

const DEFAULT_CODE = `const website = new SandMedia({
  client: "Your Business",
  tech: ["React", "Next.js", "Node"],
  goal: "Exceptional Results",
  performance: "100/100",
  seo: "Optimised",
  mobile: "Responsive"
});

website.launch();
// → Live in 4–6 weeks 🚀`;

export default function TerminalMockup({ 
  title = "sandmedia.js", 
  code = DEFAULT_CODE,
  typingSpeed = 28 
}: TerminalMockupProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let i = 0;
    const el = codeRef.current;
    if (!el) return;
    
    el.textContent = '';
    const interval = setInterval(() => {
      el.textContent += code[i];
      i++;
      if (i >= code.length) clearInterval(interval);
    }, typingSpeed);
    
    return () => clearInterval(interval);
  }, [code, typingSpeed]);

  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]">
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-xs text-[#8b949e]">{title}</span>
      </div>

      {/* Terminal Body */}
      <pre className="p-6 min-h-70 relative overflow-x-auto">
        <code 
          ref={codeRef} 
          className="font-mono text-sm leading-relaxed text-[#e6edf3] whitespace-pre-wrap"
        />
        <span className="inline-block w-0.5 h-5 bg-amber-500 animate-pulse align-text-bottom" />
      </pre>
    </div>
  );
}