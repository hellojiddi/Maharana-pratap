import { useState } from 'react';
import { Megaphone, X } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-burnt relative">
      <div className="max-w-[1400px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Megaphone size={18} className="text-cream flex-shrink-0" />
          <p className="text-cream text-sm font-body truncate">
            <span className="font-medium">Admissions Open</span> for D.Pharm & B.Pharm 2025-26 — Apply Now!
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://wa.me/919709908168"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-1.5 bg-ivory text-burnt rounded-md text-[12px] uppercase tracking-wider font-body font-medium hover:scale-[1.03] transition-transform"
          >
            Apply
          </a>
          <button
            onClick={() => setVisible(false)}
            className="text-cream/80 hover:text-cream transition-colors p-1"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
