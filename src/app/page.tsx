import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="bg-background">
      <div className="flex justify-end p-4">
        <ModeToggle />
      </div>
    </main>
  )
}
