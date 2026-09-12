import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mahakal Bus Services",
  description: "Terms and conditions of service for Mahakal Bus Services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 12, 2026";

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-16">
      <PageHeader 
        title="Terms of Service" 
        imageSrc="/images/buses/bus-6.jpg" 
      />
      
      <Container className="relative z-10 -mt-16">
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8 md:p-12 lg:p-16 max-w-4xl mx-auto border border-slate-100">
          <p className="text-sm text-slate-500 font-bold tracking-widest uppercase mb-8">
            Last Updated: <span className="text-orange-500">{lastUpdated}</span>
          </p>

          <div className="space-y-8 text-slate-600 leading-relaxed font-medium">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">1. Agreement to Terms</h2>
              <p>
                By accessing our website or booking our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">2. Booking and Reservations</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-orange-500">
                <li>All bookings are subject to availability and confirmation.</li>
                <li>A valid identification may be required at the time of boarding.</li>
                <li>Mahakal Bus Services reserves the right to cancel or modify bookings in extreme circumstances such as severe weather, vehicle breakdown, or other unavoidable events.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">3. Passenger Responsibilities</h2>
              <p>
                Passengers are expected to conduct themselves in a respectful manner. Any behavior that jeopardizes the safety or comfort of other passengers or the driver may result in immediate termination of the service without a refund.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-orange-500">
                <li>Passengers must arrive at the boarding point at least 15 minutes prior to the scheduled departure time.</li>
                <li>Smoking, alcohol consumption, and carrying illegal substances are strictly prohibited on all our vehicles.</li>
                <li>Luggage is carried at the owner's risk. We are not liable for any lost or damaged items.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">4. Cancellations and Refunds</h2>
              <p>
                Cancellation policies vary depending on the type of service booked. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-orange-500">
                <li>Cancellations made 24 hours prior to departure are eligible for a partial refund subject to our processing fees.</li>
                <li>No-shows or cancellations made within 24 hours of departure are non-refundable.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">5. Limitation of Liability</h2>
              <p>
                In no event shall Mahakal Bus Services, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
