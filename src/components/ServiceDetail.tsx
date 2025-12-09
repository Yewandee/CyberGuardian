// import React, { useState } from 'react'
import { trainingPrograms } from '../data/ServiceData.js'
import Button from './ui/Button.js'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Timer } from 'lucide-react'
// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const ServiceDetail = () => {
  const { id } = useParams()
  const service = trainingPrograms.find((s) => s.id === id)
  const navigate = useNavigate()
  // const [showPaymentOption, setShowPaymentOption] = useState(false)

    if (!service) {
        return (
        <div className="min-h-screen flex items-center justify-center text-center">
            <p className="text-xl text-gray-500">Service not found.</p>
            <Button className="mt-4" onClick={() => navigate('/')}>
            Go Back
            </Button>
        </div>
        )
    }
    const Icon = service.icon


//  const paypalOptions = {
//     "client-id": "test",
//     currency: "EUR",

//   }

//   const initialOptions = {
//   clientId: "AbxcGWCPVeK23qlstblwvh_y4_PJ7b8AI3IPgC99pxpw8Xl3ipZW5QATP6vcLeNjUDNW6v1GOu09HZRt",
//   currency: "EUR",
//   components: "buttons",
// };

  return (
    <div className="min-h-screen bg-background px-6 md:px-20 py-10">
      <Link
        className="mb-8 flex items-center text-gray-300 hover:text-primary"
        to="/"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          {service.title}
        </h1>

        <div className='flex gap-2 justify-center'>
            <Timer/>

        <p className="text-lg text-gray-400 mb-2">{service.duration}</p>
        </div>
      </div>

      <div className="border border-gray-700/40 rounded-xl p-8 shadow-lg bg-gray-800 text-white text-left">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-primary p-4 w-16 h-16 rounded-lg flex items-center justify-center text-white mr-4">
            <Icon className="w-8 h-8" />
          </div>
          <p className="text-lg font-semibold text-(--primary)/80">{service.description}</p>
        </div>

        <ul className="list-disc list-inside space-y-2  mb-6">
          {service.fullDetails.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className='text-(--foreground) font-semibold text-2xl text-center'>€{service.price}</h3>

          {/* {!showPaymentOption && (
          <Button className="bg-gradient-primary text-white border-none w-full py-2" onClick={() => setShowPaymentOption(true)}>
            Enroll Now
          </Button>
          )} */}

          {/* {showPaymentOption && (
            <div className="mt-6">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                style={{ layout: "vertical", color: "blue" }}

                createOrder={async () => {
                  try {
                    const response = await fetch("http://localhost:5000/api/paypal/create-order", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      title: service.title,
                      price: service.price,
                      id: service.id
                    }),
                  });

                  const data = await response.json();
                   const orderData = await response.json();

                            if (orderData.id) {
                                return orderData.id;
                            }
                      console.log("Datattaaa", orderData) 
                        if (!orderData.id) {
                          throw new Error("No order ID returned from server");
                        }


                  } catch (error) {
                    console.error("Error creating order:", error);
                    throw error;
                  }
                }}

                onApprove={async (data) => {
                  try {
                    const response = await fetch("http://localhost:5000/api/paypal/capture-order", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ orderId: data.orderID }),
                    });

                    const result = await response.json();
                    console.log("Capture result:", result);

                    if (result.status === "COMPLETED") {
                      window.location.href = "/success";
                    }
                  } catch (error) {
                    console.error("Error capturing order:", error);
                    alert("Payment failed, please try again.");
                  }
                }}

                onError={(err) => {
                  console.error("PayPal error:", err);
                  alert("PayPal error occurred.");
                }}
            />

          </PayPalScriptProvider>
        </div>
          )} */}
        
       
      </div>
    </div>
  )
}

export default ServiceDetail
