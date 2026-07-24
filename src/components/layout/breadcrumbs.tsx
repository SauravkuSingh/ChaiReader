import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="sm:gap-2">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <div key={`${item.label}-${i}`} className="flex items-center gap-1.5 sm:gap-2">
              <BreadcrumbItem>
                {last || !item.href ? (
                  <BreadcrumbPage className="max-w-[45vw] truncate font-medium text-foreground sm:max-w-none">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!last ? <BreadcrumbSeparator /> : null}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
