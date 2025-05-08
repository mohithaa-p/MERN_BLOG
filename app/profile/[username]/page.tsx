import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage({ params }: { params: { username: string } }) {
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
              Sign In
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
              Get started
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12">
          <div className="relative mb-12">
            <div className="h-48 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl" />
            <div className="absolute -bottom-12 left-8 flex items-end">
              <Avatar className="w-24 h-24 border-4 border-white dark:border-zinc-800">
                <AvatarImage src="/placeholder.svg?height=120&width=120&text=U" alt="User Avatar" />
                <AvatarFallback className="text-2xl">{params.username.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 sticky top-20">
                <h1 className="text-2xl font-bold">{params.username}</h1>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  Writer of thoughts and ideas. Passionate about technology, design, and the future of work.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 w-full">
                    Follow
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-2">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Web Development</Badge>
                    <Badge>UX Design</Badge>
                    <Badge>Content Strategy</Badge>
                    <Badge>Technical Writing</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <Tabs defaultValue="articles" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="lists">Lists</TabsTrigger>
                </TabsList>
                <TabsContent value="articles" className="mt-0">
                  <div className="space-y-8">
                    {[1, 2, 3].map((i) => (
                      <Link href={`/article/${i}`} key={i} className="block group">
                        <article className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                          <div className="md:flex">
                            <div className="md:w-1/3">
                              <div className="h-48 md:h-full relative">
                                <Image
                                  src={`/placeholder.svg?height=200&width=200&text=Article+${i}`}
                                  fill
                                  alt="Article cover"
                                  className="object-cover"
                                />
                              </div>
                            </div>
                            <div className="p-6 md:w-2/3">
                              <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">
                                This is a sample article title that spans multiple lines
                              </h3>
                              <p className="text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mt-4">
                                <span>May 8, 2023</span>
                                <span>·</span>
                                <span>5 min read</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="about" className="mt-0">
                  <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6">
                    <div className="prose max-w-none dark:prose-invert">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                      </p>
                      <h3>Experience</h3>
                      <ul>
                        <li>Senior Writer at TechCrunch (2020-Present)</li>
                        <li>Content Strategist at Medium (2018-2020)</li>
                        <li>Freelance Writer (2015-2018)</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="lists" className="mt-0">
                  <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium mb-2">No lists created yet</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        Lists help you curate articles on different topics
                      </p>
                      <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                        Create a list
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
