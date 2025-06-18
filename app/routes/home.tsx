import type { Route } from "./+types/home"
import { Welcome } from "../welcome/welcome"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pelican Building Contracting, Inc." },
    { name: "description", content: "Website for Pelican Building Contracting, Inc." },
  ]
}

export default function Home() {
  return <Welcome />
}
