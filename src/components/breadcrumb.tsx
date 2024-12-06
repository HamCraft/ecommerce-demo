import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <span className="mx-1 text-muted-foreground">/</span>}
          <Link
            href={item.href}
            className={`hover:text-foreground ${
              index === items.length - 1 ? "text-foreground" : ""
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

