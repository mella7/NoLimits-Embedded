import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center ${className}`} aria-label="NoLimits Embedded">
      <img src={logo} alt="NoLimits Embedded" className="h-9 sm:h-10 w-auto" />
    </a>
  );
}
