interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageLayout({
  children,
  title,
  description,
  className,
}: PageLayoutProps) {
  return (
    <div className={"px-5 pt-7 pb-16 flex flex-col gap-5 min-h-screen min-w-screen" + " " + className}>
      {(title || description) && (
        <div className="flex flex-col gap-2">
          {title && <h1 className="text-2xl flex-col gap-2">{title}</h1>}
          {description && <span className="text-gray-500 ">{description}</span>}
        </div>
      )}
      {children}
    </div>
  );
}