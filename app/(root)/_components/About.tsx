import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Our Company
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            With over 15 years of experience in the real estate market, we
            specialize in developing premium properties that combine innovative
            design, quality materials, and strategic locations. Our commitment
            to excellence has made us a trusted name in the industry.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
            <h3 className="text-xl font-bold">Quality Construction</h3>
            <p className="mt-2 text-muted-foreground">
              We use only the highest quality materials and work with
              experienced contractors to ensure durability and longevity.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
            <h3 className="text-xl font-bold">Modern Design</h3>
            <p className="mt-2 text-muted-foreground">
              Our properties feature contemporary architecture and thoughtful
              interior design that maximizes space and comfort.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
            <h3 className="text-xl font-bold">Prime Locations</h3>
            <p className="mt-2 text-muted-foreground">
              We carefully select locations that offer convenience, amenities,
              and potential for appreciation in value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
