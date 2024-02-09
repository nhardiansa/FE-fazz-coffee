import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Login'
}

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return children
}
