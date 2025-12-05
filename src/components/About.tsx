import { Award, Shield, Target, Users } from "lucide-react"


const About = () => {

    const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the highest standards of cybersecurity in everything we do."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our instructors are seasoned professionals with real-world experience."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Students have launched their cybersecurity careers with us and tested us out."
    },
    {
      icon: Target,
      title: "Practical Focus",
      description: "Hands-on training that prepares you for real-world security challenges."
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-(--gradient-hero) flex items-center justify-center overflow-hidden">
        <div className="py-5 text-center ">

        <h1 className="text-(--primary) text-5xl font-bold">About CyberGuardians</h1>

        <p className="text-xl text-gray-300 pt-5">
            Founded by cybersecurity experts, CyberGuardians is dedicated to empowering individuals and organizations 
            with the knowledge and skills needed to defend against evolving cyber threats. We combine cutting-edge 
            training methodologies with real-world experience to deliver exceptional results.
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 text-left">
            {values.map ((value) => (
            <div className="cols border border-(--ring)/40 hover:shadow-(--shadow-cyber) p-5 rounded-lg">
                <div className="bg-linear-200 from-[#3399ff] to-[#00eaff] p-4 w-14 h-14 m-2 rounded-lg text-(--primary-foreground)">
                    <value.icon/>
                </div>

                <h3 className="font-semibold text-xl py-2">{value.title}</h3>
                <p className="text-sm text-gray-300">{value.description}</p>
            </div>
            ))}
          
        </div>
         </div>

    </section>
   
  )
}

export default About
