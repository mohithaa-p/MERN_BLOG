import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="rounded-full bg-emerald-600 text-white w-8 h-8 flex items-center justify-center">B</span>
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Blogify</span>
          </Link>
          <div className="hidden md:flex mx-auto max-w-md w-full">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full pl-8 bg-zinc-100 dark:bg-zinc-800 border-none"
              />
            </div>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/write" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
              Write
            </Link>
            <Link href="/signin" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-500">
              Sign In
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
              Get started
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Ideas that shape the future.
                  </h1>
                  <p className="max-w-[600px] text-zinc-700 dark:text-zinc-300 md:text-xl">
                    Share your thoughts, discover new perspectives, and engage with a community of curious minds.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 px-8">
                    Start reading
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-200 dark:bg-emerald-900/50 rounded-full blur-xl" />
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200 dark:bg-blue-900/50 rounded-full blur-xl" />
                  <Image
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="Hero Image"
                    className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Trending
                  </span>{" "}
                  on Blogify
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Link href={`/article/${i}`} key={i} className="group">
                  <article className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Article+${i}`}
                        width={400}
                        height={200}
                        alt="Article cover"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full overflow-hidden w-6 h-6 border-2 border-white">
                            <Image
                              src={`/placeholder.svg?height=24&width=24&text=U${i}`}
                              width={24}
                              height={24}
                              alt="User Avatar"
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-white">Author Name {i}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                        This is a sample article title that spans multiple lines
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                          <span>May 8, 2023</span>
                          <span>·</span>
                          <span>5 min read</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-emerald-600 dark:text-emerald-500 p-0 h-auto hover:bg-transparent hover:text-emerald-700 dark:hover:text-emerald-400"
                        >
                          Read <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Join our community</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                Get the best content delivered straight to your inbox. Stay updated with the latest trends and ideas.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-white dark:bg-zinc-800" />
                <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
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
