import DeveloperProfile from "@/components/About/DeveloperProfile";
import MagicLine from "@/components/SubComponent/MagicLine";

function About() {
  const devs = [
    {
      id: 1,
      name: "Shahadat Hossain",
      jobTitle: "Frontend Developer",
      portfolio: "shahadat.website",
      emailLink: "mdmahin.pro@gmail.com",
      about:
        "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
      interests:
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
    {
      id: 2,
      name: "Mahin Bin Raihan",
      jobTitle: "Frontend Developer",
      portfolio: "www.mdmahin.netlify.app",
      emailLink: "mdmahin.pro@gmail.com",
      about:
        "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
      interests:
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ];
  return (
    <section className="about pt-5 bg-light text-dark">
      <div className="container">
        <MagicLine title="About Us" />
      </div>
      <div className="flex">
        {devs.map((dev) => (
          <DeveloperProfile dev={dev} key={dev.id} />
        ))}
      </div>
    </section>
  );
}

export default About;
