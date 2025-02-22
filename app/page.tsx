import React from 'react'

export default function HomePage() {

  const primary_width = "w-[90%]"

  const secondary_width = "w-[85%]"

  const name = "Oliver Ebsworth";

  const personal_information = [
    { text: "Fleet, Hampshire", "url": "https://www.google.com/search?q=Fleet,+Hampshire&sourceid=chrome&ie=UTF-8" },
    { text: "+44 7419 817182", "url": "tel:+447419817182" },
    { text: "ebswortholiver@gmail.com", url: "mailto:ebswortholiver@gmail.com" },
  ]

  const links = [
    { text: "oebsworth.github.io/portfolio-website-nextjs-web", url: "https://oebsworth.github.io/portfolio-website-nextjs-web" },
    { text: "github.com/oebsworth", url: "https://github.com/oebsworth" },
    { text: "oebsworth.itch.io/", url: "https://oebsworth.itch.io/" },
  ];

  const tagLine = "I'm a passionate programmer that gains gratification from the journey of designing and developing software. "

  const educationItems = [
    {
      institution: "Farnborough College of Technology, Farnborough",
      date: "September 2020 - May 2022",
      degree: "Level 3 BTEC of Game Studies.",
      details: "Overall: MMP"
    },
  ];

  const projectDescription = `Here is a list of my projects that I think are worth noting, a more in depth look at these projects can be found on my portfolio website (<a href='${links[0].url}'>${links[0].text}</a>), and my github (<a href='${links[1].url}'>${links[1].text}</a>).`

  const notableProjects = [
    {
      name: "Porfolio Website",
      linkText: "github.com/oebsworth/portfolio-website-nextjs-web",
      link: "https://github.com/oebsworth/portfolio-website-nextjs-web",
      description: "I created this to showcase my work and to link to my C.V., I plan to update this and change how it is currently formatted. You can view the code here (",

    },
    {
      name: "Procedural C.V.",
      linkText: "github.com/oebsworth/procedural-cv-nextjs-web",
      link: "https://github.com/oebsworth/procedural-cv-nextjs-web",
      description: "This is the page that you are currently on. Due to my constant learning and understanding of new things. I wanted to create a 'procedural' C.V. that I could update programmatically. Currently it is a next.js project, however I plan to adapt it into my personal portfolio website with Sanity integration. You can view the code here ("
    },
    {
      name: "Kitchen Chaos",
      linkText: "github.com/oebsworth/kitchen-chaos-unity",
      link: "https://github.com/oebsworth/kitchen-chaos-unity",
      description: `This is a course that I followed from Code Monkey's youtube channel. It teaches the ins and outs of the single-player unity workflow. This was the first big project I worked on in Unity, I have commented throughout the code to show that I understand when to use the coding principles. You can view the code and play the game at (`
    },
    {
      name: "Time Trial Car Game",
      linkText: "github.com/oebsworth/time-trial-car-game-unity",
      link: "https://github.com/oebsworth/time-trial-car-game-unity",
      description: "This was the first piece of Upwork work that I did for a client. Unfortunately the client backed out of payment so I didn't get the credit I deserved for my Upwork profile. You can view the code and play the game here ("
    },
    {
      name: "Warehouse Wreckage",
      linkText: "github.com/oebsworth/warehouse-wreckage-unreal",
      link: "https://github.com/oebsworth/warehouse-wreckage-unreal",
      description: `Warehouse wreckage is the first game that I have created for my c++ unreal engine course. It is a game set in a warehouse where you can destroy the environment with fun physics and destruction effects. This game is made with blueprint and served as a starting point for unreal engine. You can view the code and play the game at (`,
    },
    {
      name: "Obstacle Assault",
      linkText: "github.com/oebsworth/obstacle-assault-unreal",
      link: "https://github.com/oebsworth/obstacle-assault-unreal",
      description: `Obstacle assault is the second game that I have created for my c++ unreal engine course. The level is a couple of floating islands with some moving obstacles on them. This was a basic introduction to c++ and the coding principles. You can view the code and play the game at (`,
    },
    // {
    //   name: "Crypt Raider",
    //   linkText: "github.com/oebsworth/crypt-raider-unreal",
    //   link: "https://github.com/oebsworth/crypt-raider-unreal",
    //   description: `Crypt raider is the third game of the unreal engine c++ course. I am currently creating it and is so far a more advanced outlook on the previous courses. I am still finding it quite easy due to my previous experience with other languages and the coding principles that are translating over to unreal engine. You can view the code so far at (`
    // }
  ];

  const shared_technical_skills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "C#", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "Typescript", level: "Intermediate" },
        { name: "Kotlin", level: "Intermediate" }
      ]
    },
    {
      category: "Programming Frameworks",
      skills: [
        // Javascript
        { name: "ReactJS", level: "Intermediate" },
        { name: "NextJS", level: "Advanced" },
        { name: "VueJS", level: "Beginner" },
        { name: "NuxtJS", level: "Intermediate" },
        { name: "Angular", level: "Beginner" },
        { name: "Solid", level: "Beginner" },
        { name: "Stencil", level: "Beginner" },
        { name: "Svelte", level: "Beginner" },
        { name: "Electron", level: "Beginner" },
        { name: "Nextron", level: "Beginner" }
      ]
    },
    {
      category: "Programming Technologies",
      skills: [
        // Javascript
        { name: "TailwindCSS", level: "Intermediate" },
        { name: "GSAP", level: "Beginner" },
        { name: "Three.js", level: "Beginner" },
        { name: "MongoDB", level: "Beginner" },
        { name: "Mongoose", level: "Intermediate" },
        { name: "Cloudinary", level: "Beginner" },
        { name: "Sanity", level: "Beginner" },
        { name: "JSX", level: "Advanced" },
        { name: "Axios", level: "Intermediate" },

        // Python        
        { name: "OpenCV", level: "Intermediate" },
        { name: "Numpy", level: "Intermediate" },
        { name: "Tkinter", level: "Beginner" },
        { name: "customtkinter", level: "Intermediate" },
        { name: "Tensorflow", level: "Beginner" },
      ]
    },
    {
      category: "Softwares",
      skills: [
        // 3D Modeling
        { name: "Blender", level: "Advanced" },

        // Coding
        { name: "Visual Studio", level: "Beginner" },
        { name: "VS Code", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },

        // Web Development
        { name: "Figma", level: "Intermediate" },

        // Adobe
        { name: "Adobe Photoshop", level: "Intermediate" },
        { name: "Adobe Illustrator", level: "Beginner" },

        // Microsoft Office
        { name: "MS Word", level: "Intermediate" },
        { name: "MS Powerpoint", level: "Intermediate" },
        { name: "MS Excel", level: "Intermediate" },

        // Android
        { name: "Android Studio", level: "Intermediate" },
      ]
    },
    {
      category: "Game Engines",
      skills: [
        { name: "Unity", level: "Advanced" },
        { name: "Unreal Engine", level: "Intermediate" }
      ]
    },
    {
      category: "Areas of Understanding",
      skills: [
        { name: "Web Development", level: "Advanced" },
        { name: "Game Development", level: "Intermediate" },
        { name: "Machine Learning", level: "Beginner" },
      ]
    }
  ];

  const workExperience = [
    {
      location: "Farnborough, Hampshire",
      date: "2019 - 2020",
      role: "Farnborough Fins",
      description: "2019: I worked as a dedicated pool helper for Farnborough Fins, I ensured a safe environment for young children during their activities. I collaborated with a new team each shift, building new relationships in real-time to provide the best experience for teachers and the children that were taking part. Unfortunately this position ended due to covid."

    },
  ];

  const personalNotes = "During my spare time, I enjoy working on personal projects, I take great pleasure in learning new things and usually learn quickly. I also play video games with my friends, when I do we focus on teamwork, leading us to winning the game. Sometimes I am given the role of in game leader, this means that it is my job to call the strategies that we will follow during that game. I will allocate my teammates roles that they are comfortable with and focus on our mistakes so that we can better ourselves for the next round."

  const references = [
    {
      firstName: "Richie",
      firstPronunciation: "Rish-ee",
      lastName: "Mobwete",
      lastPronunciation: "Mow-bweh-tay",
      companyName: "Motion Realm",
      jobTitle: "Director",
      phone: "",
      email: "rishi@motion-realm.com",
      relationship: "College Tutor",
    },
  ]

  let pageBreak = "technical-skills"

  return (
    <main className="text-[11pt]">
      <div className="flex flex-col items-center max-w-4xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-[20.5pt] font-bold my-1">{name.toUpperCase()}</h1>
          <div className="flex flex-col items-center my-2">
            <div className="flex">
              {personal_information.map((personal, index) => (
                <div className="flex" key={`link-${index}`}>
                  {index !== 0 && <p className="mx-1">&#11046;</p>}
                  {personal.url !== "" ? (
                    <a href={personal.url}>{personal.text}</a>
                  ) : (
                    <p>{personal.text}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex">
              {links.map((link, index) => (
                <div className="flex" key={`link-${index}`}>
                  {index !== 0 && <p className="mx-1">&#11046;</p>}
                  {link.url !== "" ? (
                    <a href={link.url}>{link.text}</a>
                  ) : (
                    <p>{link.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className={`${primary_width} border-black`}></hr>
        <p className={`${secondary_width} flex justify-center my-1`}>
          {tagLine}
        </p>
        <div className={`${pageBreak === "education" ? "page-break" : null} ${primary_width} flex justify-start`}>
          <h2 className="font-bold">EDUCATION</h2>
        </div>
        <hr className={`${primary_width} border-black`}></hr>
        <div className={`${secondary_width} my-1`}>
          {educationItems.map((item, index) => (
            <div key={`education-${index}`} className="w-full mb-1 flex justify-between">
              <div>
                <p><b>{item.institution}</b></p>
                <p>{item.degree}</p>
              </div>
              <div>
                <p className="text-right"><i>{item.date}</i></p>
                {item.details && <p className="text-right">{item.details}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className={`${pageBreak === "notable-projects" ? "page-break" : null} ${primary_width} flex justify-start`}>
          <h2 className="font-bold">NOTABLE PROJECTS</h2>
        </div>
        <hr className={`${primary_width} border-black`}></hr>
        <div className={`${secondary_width} my-1`}>
          <p className="mb-1" dangerouslySetInnerHTML={{ __html: projectDescription }}></p>
          {notableProjects.map((project, index) => (
            <div key={`project-${index}`} className="mb-1">
              <h3 className="font-bold">{project.name}</h3>
              <p>{project.description}<a href={project.link} >{project.linkText}</a>).</p>
            </div>
          ))}
        </div>
        <div className={`${pageBreak === "technical-skills" ? "page-break" : null} ${primary_width} flex justify-start`}>
          <h2 className="font-bold">TECHNICAL SKILLS</h2>
        </div>
        <hr className={`${primary_width} border-black`}></hr>
        <div className={`${secondary_width} my-1`}>

          {/* <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border border-black p-2">Category</th>
                <th className="border border-black p-2">Skill</th>
                <th className="border border-black p-2">Level</th>
              </tr>
            </thead>
            <tbody>
              {shared_technical_skills.map(({ category, skills }, index) => (
                <React.Fragment key={index}>
                  {skills.map(({ name, level }, idx) => (
                    <tr key={`${index}-${idx}`}>
                      {idx === 0 ? (
                        <td className="border border-black p-2" rowSpan={skills.length}>{category}</td>
                      ) : null}
                      <td className="border border-black p-2">{name}</td>
                      <td className="border border-black p-2">{level}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <table className="w-full border-collapse border my-1">
            <thead>
              <tr>
                <th className="border border-black p-2">Category</th>
                <th className="border border-black p-2">Skills</th>
                <th className="border border-black p-2">Levels</th>
              </tr>
            </thead>
            <tbody>
              {shared_technical_skills.map(({ category, skills }) => (
                <tr key={category}>
                  <td className="border border-black p-2"><strong>{category}</strong></td>
                  <td className="border border-black p-2">{skills.map(({ name }) => name).join(", ")}</td>
                  <td className="border border-black p-2">{skills.map(({ level }) => level).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table> */}

          <table className="w-full border-collapse border my-1">
            <thead>
              <tr>
                <th className="border border-black p-2">Category</th>
                <th className="border border-black p-2">Skills ( Beginner | Intermediate | Advanced )</th>
              </tr>
            </thead>
            <tbody>
              {shared_technical_skills.map(({ category, skills }) => (
                <tr key={category}>
                  <td className="border border-black p-2"><strong>{category}</strong></td>
                  <td className="border border-black p-2">{skills.map(({ name, level }) => `${name} (${level.slice(0, 3)})`).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        <div className={`${pageBreak === "work-experience" ? "page-break" : null} ${primary_width} flex justify-start`}>
          <h2 className="font-bold">WORK EXPERIENCE</h2>
        </div>
        <hr className={`${primary_width} border-black`}></hr>
        <div className={`${secondary_width} my-1`}>
          {workExperience.map((experience, index) => (
            <div key={`experience-${index}`} className="mb-2">
              <div className="flex justify-between">
                <p><b>{experience.location}</b></p>
                <p><b>{experience.date}</b></p>
              </div>
              <p className="mb-1"><i>{experience.role}</i></p>
              <div className="pl-0">

                <p className="list-none mb-1">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${pageBreak === "personal-notes" ? "page-break" : null} ${primary_width} flex justify-start`}>
          <h2 className="font-bold">PERSONAL NOTES</h2>
        </div>
        <hr className={`${primary_width} border-black`}></hr>
        <div className={`${secondary_width} my-1`}>
          <p>{personalNotes}</p>
        </div>
        <div className={`${pageBreak === "references" ? "page-break" : null} ${primary_width} flex justify-start`}>
          <h2 className="font-bold">REFERENCES</h2>
        </div>
        <hr className={`${primary_width} border-black`}></hr>
        <div className={`${secondary_width} my-1`}>
          {references.map((reference, index) => (
            <div key={`reference-${index}`}>
              <p><b>{reference.firstPronunciation !== "" || reference.lastPronunciation !== "" ? `${reference.firstName} ${reference.lastName} - Pronounced: ` : null} {reference.firstPronunciation !== "" ? reference.firstPronunciation : reference.firstName} {reference.lastPronunciation !== "" ? reference.lastPronunciation : reference.lastName}:</b></p>
              <p><i>{reference.companyName}, {reference.jobTitle},</i></p>
              <p>{reference.phone}{reference.phone === "" || reference.email === "" ? null : ","} {reference.email},</p>
              <p>{reference.relationship}.</p>
            </div>
          ))}
        </div>
      </div >
    </main >
  );
}
