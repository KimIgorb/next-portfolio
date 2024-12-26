
export function PageTitle({ label }: { label: string }) {
  return (
    <h2 className="text-6xl font-semibold mb-10 text-center">{label}</h2>
  );
}

export function Paragraph({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`font-normal text-lg ${className}`}>{children}</p>
  );
}

export function Subtitle({ label, className }: { label: string, className?: string }) {
  return (
    <h2 className={`mb-5 text-[40px] font-semibold ${className}`}>{label}</h2>
  )
}

export function ProjectTitle({ label }: { label: string }) {
  return (
    <h3 className="font-medium text-lg text-slate-800 dark:text-white text-center">{label}</h3>
  )
}