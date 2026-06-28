import { footer } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 text-center text-[13px] text-text-low">
      {footer.text}
    </footer>
  );
}

