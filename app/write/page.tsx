"use client"

import { useState } from "react"
import Link from "next/link"
import { Bold, Italic, LinkIcon, List, ImageIcon, Heading1, Heading2, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function WritePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="rounded-full bg-emerald-600 text-white w-8 h-8 flex items-center justify-center">B</span>
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Blogify</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline">Save draft</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
              Publish
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container max-w-3xl py-12">
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40&text=A" alt="Author" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Your Name</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Draft • Only you can see this</div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Title"
                className="text-3xl font-bold border-none shadow-none focus-visible:ring-0 p-0 h-auto placeholder:text-zinc-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 border-b pb-4">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Heading1 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Heading2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Quote className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <LinkIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <List className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <ImageIcon className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <Textarea
                placeholder="Tell your story..."
                className="min-h-[400px] text-lg border-none shadow-none focus-visible:ring-0 p-0 resize-none placeholder:text-zinc-400"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">Add tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-800">
                  Technology
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800">
                  Design
                </Badge>
                <Badge variant="outline" className="text-zinc-500 dark:text-zinc-400">
                  + Add tag
                </Badge>
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
