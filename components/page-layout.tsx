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
    <div className="">
      {(title || description) && (
        <div className="">
          {title && <h1 className="">{title}</h1>}
          {description && <span className="">{description}</span>}
        </div>
      )}

      {children}
    </div>
  );
}