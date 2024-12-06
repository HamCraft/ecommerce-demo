import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="relative flex-1 bg-[#E5F0F3]">
        <div className="flex h-full items-center justify-center p-6">
          <Image
            src="/signuplogin.png"
            alt="Shopping cart with smartphone and shopping bags"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-center text-3xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter your details below
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Name"
                className="block w-full rounded-md border-0"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Email or Phone Number"
                className="block w-full rounded-md border-0"
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                className="block w-full rounded-md border-0"
              />
            </div>

            <div>
              <Button className="w-full bg-[#E94E4E] hover:bg-[#D43E3E]">
                Create Account
              </Button>
            </div>

            <div>
              <Button
                variant="outline"
                className="w-full"
              >
                
                Sign up with Google
              </Button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?
            <Link href="/login" className="text-[#E94E4E] hover:text-[#D43E3E]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

