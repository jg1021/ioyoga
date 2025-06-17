// src/components/Pricing.jsx
const Pricing = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
      <p className="max-w-2xl mx-auto mb-4">Simple and affordable pricing. Get full access to all programs and classes.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <div className="border p-6 rounded shadow max-w-sm">
          <h3 className="text-xl font-bold mb-2">Monthly</h3>
          <p className="text-2xl font-semibold">$14.99/mo</p>
        </div>
        <div className="border p-6 rounded shadow max-w-sm">
          <h3 className="text-xl font-bold mb-2">Annual</h3>
          <p className="text-2xl font-semibold">$119.99/year</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;