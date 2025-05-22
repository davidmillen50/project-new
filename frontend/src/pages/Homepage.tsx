import React from 'react';

const sections = [
  { id: 1, bg: 'https://i.imgur.com/1I5YNzc.jpeg', content: 'Welcome to my portfolio site.' },
  { id: 2, bg: 'https://i.imgur.com/u6So3K0.jpeg', content: 'Made with React and TypeScript.' },
  { id: 3, bg: 'https://i.imgur.com/IIbXlkC.jpeg', content: "I am a software engineer with over 3 years experience." },
]

const Homepage: React.FC = () => {
  return (
    <main>
      <div className="d-flex flex-column gap-5 p-0 m-0">
        {sections.map((section) => (
          <div key={section.id}>
            <div
              key={section.id}
              className="section"
              style={{
                backgroundImage: `url('${section.bg}')`
              }}
            >
            </div>
            <h1 className={`m-0 p-2 text-dark d-flex ${section.id === 2 ? 'justify-content-start' : 'justify-content-end'}`}>{section.content}</h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Homepage;