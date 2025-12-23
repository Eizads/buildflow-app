import { HomeIcon, CompassIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import Logo from "../common/logo"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { Suspense } from "react"
import AuthSkeleton from "../skeleton/auth-skeleton"

function Header() {
  return (
    <header className="bg-background/20 border-b border-zinc-300 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container flex flex-row items-center justify-between py-4 ">
        <Logo />
        <nav className="flex flex-row items-center justify-start gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground  hover:text-foreground transition-colors hover:bg-muted/50"
          >
            <HomeIcon className="w-4 h-4 text-gray-500" /> Home
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground  hover:text-foreground transition-colors hover:bg-muted/50"
          >
            <CompassIcon className="w-4 h-4 text-gray-500" />
            Explore
          </Link>
        </nav>

        <div className="flex flex-row items-center justify-start gap-3">
          <Suspense fallback={<AuthSkeleton />}>
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/submit-project">
                  <SparklesIcon className="w-4 h-4" /> Submit a Project
                </Link>
              </Button>
              <UserButton />
            </SignedIn>
          </Suspense>
        </div>
      </div>
      {/* <AuthSkeleton /> */}
    </header>
  )
}

export default Header
