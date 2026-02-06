"use client";

import Footer from "@/components/ui/animated-footer";

export default function FooterSection() {
  return (
    <Footer
      leftLinks={[
        { href: "#", label: "Terms & Policies" },
        { href: "#", label: "Privacy Policy" },
      ]}
      rightLinks={[
        { href: "#", label: "Contact" },
        { href: "#", label: "About" },
        { href: "#", label: "Documentation" },
      ]}
      copyrightText="Deckcraft 2026. All Rights Reserved."
      barCount={23}
    />
  );
}
