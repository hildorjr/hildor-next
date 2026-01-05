export default function AboutMe() {
  const currentYear = new Date().getFullYear();
  const startingYear = 2016;
  const yearsOfExperience = currentYear - startingYear;

  const content = {
    intro: `I'm a full-stack engineer with over ${yearsOfExperience} years of experience building software across finance, healthcare, logistics, and other fields. I've worked with teams of all sizes, from scrappy startups to large enterprises, and I love the challenge of turning complex problems into elegant solutions.`,
    education: `I hold a Bachelor's in Information Systems and a postgraduate degree in Leadership, Innovation & Management, both from PUCRS. This foundation, combined with hands-on experience across diverse projects, has shaped my approach to building robust and scalable software.`,
    philosophy: `I'm big on agile methodologies and believe the best software comes from truly understanding what people need. Whether it's a small feature or a complete system, I focus on delivering real value.`,
    connect: `Want to know more about what I'm working on? I share insights, lessons learned, and tech deep-dives on `,
  };

  return (
    <div className='columns is-centered' id='about'>
      <div className='column is-10'>
        <h3 className='title'>About me</h3>
        <div className='content'>
          <p>{content.intro}</p>
          <p>{content.education}</p>
          <p>{content.philosophy}</p>
          <p>
            {content.connect}
            <a target='_blank' href='https://blog.hildor.dev'>
              my blog
            </a>
            {' and '}
            <a target='_blank' href='https://youtube.com/@hildordev'>
              YouTube channel
            </a>
            {". Let's connect!"}
          </p>
        </div>
      </div>
    </div>
  );
}
