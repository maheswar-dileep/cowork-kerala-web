import Header from "@/components/ui/Header"
import Hero from "./Section/Hero"

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:gap-12 md:px-[5%]">
        <Header />
        <Hero/>
    </div>
  )
}

export default Page
