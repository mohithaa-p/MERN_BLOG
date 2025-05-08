import Link from "next/link"
import Image from "next/image"
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ArticlePage({ params }: { params: { id: string } }) {
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
        <article className="container max-w-3xl py-12">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900">
                Technology
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900">
                Design
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              This is a sample article title that spans multiple lines
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="border-2 border-emerald-500">
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=A" alt="Author" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Author Name</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">May 8, 2023 · 5 min read</div>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-8 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 dark:bg-emerald-900/50 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/50 rounded-full blur-xl" />
            <Image
              src="/placeholder.svg?height=400&width=800"
              width={800}
              height={400}
              alt="Article Cover"
              className="w-full rounded-xl object-cover shadow-lg relative"
            />
          </div>
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100 prose-a:text-emerald-600 dark:prose-a:text-emerald-500">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <h2>This is a section heading</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic">
              This is a blockquote that stands out from the rest of the text and draws attention to an important point
              or quote from the article.
            </blockquote>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Comments</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=U1" alt="User" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Jane Cooper</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">2 hours ago</div>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Great article! I especially liked the part about the design principles.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <Heart className="h-4 w-4 mr-1" /> 12
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <MessageCircle className="h-4 w-4 mr-1" /> Reply
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=U2" alt="User" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Alex Morgan</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">5 hours ago</div>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    I have a question about the implementation. Would this work for larger scale applications?
                  </p>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <Heart className="h-4 w-4 mr-1" /> 5
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <MessageCircle className="h-4 w-4 mr-1" /> Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
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
