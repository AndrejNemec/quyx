import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage
})

function AboutPage() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}