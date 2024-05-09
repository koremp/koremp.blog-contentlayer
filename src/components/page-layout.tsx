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
    <div className={"flex-col min-h-screen min-w-screen px-10" + " " + className}>
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