interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={`bg-slate-50 border-b border-border/50 py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 font-display">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
