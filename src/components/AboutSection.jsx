import { Briefcase, Code, User } from "lucide-react";
import resume from "../assets/nikhil.pdf"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Business Analyst and Data Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a fresher with a strong foundation in both Business analyst
              and Data Engineering. complemented by hands-on experience in data
              analysis using tools like Python, SQL, Excel, and Power BI.
              Currently pursuing an MBA in Business Analytics, I aim to bridge
              the gap between technology and business strategy by delivering
              impactful, data-driven solutions.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about transforming complex data into meaningful
              insights and building data-driven solutions that solve real-world
              problems. I’m constantly learning new tools and techniques in
              analytics, engineering, and business to stay at the forefront of
              the ever-evolving data landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={resume}
                target="_blank"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software QA Tester</h4>
                  <p className="text-muted-foreground">
                   Ensuring software quality by executing test cases, identifying bugs, and automating tests using Selenium, SQL, and Python.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics</h4>
                  <p className="text-muted-foreground">
                    Skilled in performing data analysis using tools like Excel,
                    Power BI, and Python to extract insights and support
                    decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineer</h4>
                  <p className="text-muted-foreground">
                    Familiar with basic data engineering concepts, including
                    data cleaning, transformation, and working with SQL
                    databases and ETL pipelines using Python.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
