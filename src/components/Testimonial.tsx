import React from 'react'

const Testimonial = () => {

    const Testimonials = [

    ]
  return (
    <section id="testimonials" className="min-h-screen bg-(--gradient-hero) flex items-center justify-center overflow-hidden">
        <div className="py-5 text-center ">

        <h1 className="text-(--primary) text-5xl font-bold">What Our Student Says</h1>

        <p className="text-xl text-gray-300 pt-5">
            Hear from our students who are now leading cybersecurity professionals
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 text-left">
            {/* {values.map ((value) => (
            <div className="cols border border-(--ring)/40 hover:shadow-(--shadow-cyber) p-5 rounded-lg">
                <div className="bg-linear-200 from-[#3399ff] to-[#00eaff] p-4 w-14 h-14 m-2 rounded-lg text-(--primary-foreground)">
                    <value.icon/>
                </div>

                <h3 className="font-semibold text-xl py-2">{value.title}</h3>
                <p className="text-sm text-gray-300">{value.description}</p>
            </div>
            ))} */}
          
        </div>
         </div>

    </section>
  )
}

export default Testimonial
