import Link from "next/link"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="rounded-full bg-emerald-600 text-white w-8 h-8 flex items-center justify-center">B</span>
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Blogify</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/write" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
              Write
            </Link>
            <Link href="/signin" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
              Sign in
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-200 dark:bg-emerald-900/50 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200 dark:bg-blue-900/50 rounded-full blur-xl" />
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 relative">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">Join our community of writers and readers</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    Google
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-zinc-800 px-2 text-zinc-500 dark:text-zinc-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" className="bg-zinc-100 dark:bg-zinc-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" className="bg-zinc-100 dark:bg-zinc-700" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="bg-zinc-100 dark:bg-zinc-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" className="bg-zinc-100 dark:bg-zinc-700" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <Link href="/terms" className="text-emerald-600 dark:text-emerald-500 hover:underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-emerald-600 dark:text-emerald-500 hover:underline">
                      privacy policy
                    </Link>
                  </Label>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  Create account
                </Button>

                <div className="text-center text-sm">
                  <span className="text-zinc-600 dark:text-zinc-400">Already have an account? </span>
                  <Link href="/signin" className="text-emerald-600 dark:text-emerald-500 hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-white dark:bg-zinc-900">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-600 text-white w-6 h-6 flex items-center justify-center text-xs">
              B
            </span>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">© 2023 Blogify. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500"
            >
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
