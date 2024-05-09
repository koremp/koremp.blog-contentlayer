import classNames from 'classnames';

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
    <div className={classNames("flex-col min-w-screen min-h-screen px-32", className)}>
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