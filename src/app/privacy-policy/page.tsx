import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mahakal Bus Services",
  description: "Privacy Policy and data protection guidelines for Mahakal Bus Services.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 12, 2026";

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-16">
      <PageHeader 
        title="Privacy Policy" 
        imageSrc="/images/buses/bus-5.jpg" 
      />
      
      <Container className="relative z-10 -mt-16">
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8 md:p-12 lg:p-16 max-w-4xl mx-auto border border-slate-100">
          <p className="text-sm text-slate-500 font-bold tracking-widest uppercase mb-8">
            Last Updated: <span className="text-orange-500">{lastUpdated}</span>
          </p>

          <div className="space-y-8 text-slate-600 leading-relaxed font-medium">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">1. Introduction</h2>
              <p>
                Welcome to Mahakal Bus Services. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our services and tell you about your privacy rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">2. Information We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you when you book our services or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-orange-500">
                <li><span className="font-bold text-slate-700">Identity Data:</span> First name, last name, title.</li>
                <li><span className="font-bold text-slate-700">Contact Data:</span> Email address, telephone numbers (including WhatsApp).</li>
                <li><span className="font-bold text-slate-700">Transaction Data:</span> Details about payments to and from you and other details of services you have purchased from us.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-orange-500">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a bus).</li>
                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
                <p><strong>Email:</strong> info@mahakalbusservices.com</p>
                <p><strong>Phone:</strong> +91 97333 17971</p>
                <p><strong>Address:</strong> Shiva Complex, Medical Rd, Kadamtala, West Bengal 734011</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
