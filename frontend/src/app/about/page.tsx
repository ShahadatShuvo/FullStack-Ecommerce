import DeveloperProfile from "@/components/About/DeveloperProfile";
import MagicLine from "@/components/SubComponent/MagicLine";

function About() {
  const devs = [
    {
      id: 1,
      name: "Shahadat Hossain",
      jobTitle: "Frontend Developer",
      portfolio: "https://shahadat-shuvo.me",
      emailLink: "mdmahin.pro@gmail.com",
      imgUrl: "/img/shahadat.jpg",
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
      imgUrl: "/img/mukto.jpg",
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
      <div className="w-screen min-h-[80vh] flex justify-center  gap-5 py-16">
        {devs.map((dev) => (
          <DeveloperProfile developerData={dev} key={dev.id} />
        ))}
      </div>
    </section>
  );
}

export default About;
