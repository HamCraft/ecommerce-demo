import Link from "next/link"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"

export default function NotFound() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "404-Error", href: "/404-Error" },
      ]
  return (
    <><div className="p-4">
          <Breadcrumb items={breadcrumbItems} />
      </div><main className="flex min-h-screen flex-col items-center justify-center p-4">
              <div className="text-center">
                  <h1 className="mb-4 text-6xl font-bold tracking-tight">
                      404 Not Found
                  </h1>
                  <p className="mb-8 text-muted-foreground">
                      Your visited page not found. You may go home page.
                  </p>
                  <Link href="/">
                      <Button className="bg-[#E94E4E] hover:bg-[#D43E3E]">
                          Back to home page
                      </Button>
                  </Link>
              </div>
          </main></>
  )
}

