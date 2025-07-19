import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nikhil
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kathale
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a business analyst and developer with a strong foundation in
            both software development and data analytics. I have hands-on
            experience building web applications, automating processes with
            Python, and deploying systems using AWS, Docker, and CI/CD
            pipelines. In parallel, I’ve worked extensively on data analysis and
            visualization using tools like Excel, Power BI, and SQL, delivering
            insights that drive smarter business decisions. From building
            scalable ERP systems to leading data-focused projects across
            sectors, I’ve delivered end-to-end solutions that turn raw data into
            meaningful outcomes. Currently pursuing an MBA in Business
            Analytics, I’m focused on bridging the gap between technology and
            business strategy.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
