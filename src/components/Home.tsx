import { Shield } from "lucide-react"
import Button from "./ui/Button"


const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="py-5 text-center flex flex-col items-center justify-center gap-6">
            <div className="flex justify-center items-center border border-(--border) gap-2 p-1 w-80  rounded-2xl"> 
                <span className="text-(--primary)"><Shield/></span>
                <p>Private Cybersecurity Tutoring</p>
            </div>

        <h1 className="text-(--primary) text-4xl md:text-6xl font-bold">Protect Your Digital Future with CyberGuardians</h1>

        <h3 className="text-xs md:text-2xl">Expert cybersecurity training and services to safeguard your business and enhance your skills in the digital age</h3>

        <div className="flex justify-center gap-5 mt-10">
           <Button className="bg-linear-to-r from-[#3399ff] to-[#00eaff] text-gray-700 " onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
           </Button>
            <Button className="bg-(--secondary) border border-(--ring)" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
            </Button>
        </div>
        </div>

    </section>
   
  )
}

export default Home

