import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ThanksPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¡Gracias por contactarnos!</h1>
          <p className="text-gray-500 md:text-xl">
            Hemos recibido tu mensaje. Te responderemos lo antes posible a tu correo electrónico.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}