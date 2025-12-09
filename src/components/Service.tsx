import { useNavigate } from 'react-router-dom';
import {trainingPrograms} from '../data/ServiceData.js' 
import Button from './ui/Button.js';

const Service = () => {
    const navigate = useNavigate();

  return (
    <section id='services' className="min-h-screen bg-(--gradient-hero) flex items-center justify-center overflow-hidden">
        <div className="py-5 text-center ">

        <h1 className="text-(--primary) text-4xl md:text-6xl font-bold">Our Services</h1>

        <p className="text-xl text-gray-300 pt-5">
            Comprehensive cybersecurity training programs designed to elevate your skills and career
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
            {trainingPrograms.map ((value: any) => {
                const Icon = value.icon;
                return(
                    <div className="cols border border-(--ring)/40 hover:shadow-(--shadow-cyber) p-5 rounded-lg flex flex-col">
                        <div className="bg-linear-200 from-[#3399ff] to-[#00eaff] p-4 w-14 h-14 m-2 rounded-lg text-(--primary-foreground)">
                        <Icon />
                        </div>

                        <h3 className="font-semibold text-xl py-2">{value.title}</h3>
                        <p className="text-md ">{value.description}</p>

                        <ul className="space-y-1 text-gray-300 mb-5  py-2 list-disc marker:text-(--primary) ps-2">
                        {value.details.map((item: string, i:any) => (
                        <li key={i} className=''> {item}</li>
                        ))}
                        </ul>
                        
                        <div className='mt-auto'>
                        <h3 className='text-(--foreground) font-semibold text-xl'>€{value.price}</h3>

                        <Button className='border border-(--border) w-full mt-2' style={{ background: "var(--gradient-primary)" }} onClick={() => navigate(`/service/${value.id}`)}>
                            Learn More
                        </Button>
                        </div>

                    
                    </div>
                )
                
            })}
            
        </div>

       
         </div>
    </section>
  )
}

export default Service
