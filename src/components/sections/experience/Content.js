import React from "react";

const Content = ({ title, time, items }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{time}</p>
      <ul>
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Content;

export const jobs = {
  Geodeip: {
    title: "Sr. Frontend Developer @Geodeip",
    time: "April 2021 - Present",
    items: [
      `Implement complex features such as email inbox integrations and dynamic form builder with drag-and-drop inputs for data collection.`,
      `Establish, optimized, and debugged Github CI workflows.`,
      `Communicate and collaborate with multi-disciplinary teams of engineers, clients, and stakeholders.`,
      `Build maintainable components for rapid requirement changes and successful customer acquisition.`,
      `Colaborate with UI/UX designer, Design app theme, repository architecture, and domain design.`,
      `Help solidify direction of product features.`
    ],
  },
  QuantumIr: {
    title: "Sr. Frontend Developer (consulting) @QuantumIR",
    time: "Dec 2022 - Present",
    items: [
      `Convert old jquery code to modern scalable React.`,
      `Implement desktop application via Electron.js.`,
      `Optimize data fetching via React Query.`,
      `Create cloud based analytics application for offsite customers.`,
    ],
  },
  EvolveMEP: {
    title: "Sr. Frontend Developer @EvolveMEP",
    time: "Aug 2021 - April 2022",
    items: [
      `Led eight module designs and teams resulting in streamlined development and efficient delivery of key features.`,
      `Established GitHub test workflows for front end ui repo.`,
      `Develop Graphql data api in AWS Lambda to support the front end client.`,
      `Collaborate with outside product teams to seamlessly integrate new products into existing legacy products, resulting in improved offerings for customers.`,
      `Align product goals with company objectives by working closely with the VP of Product.`,
      `Led Team standups, created user stories, and sprint goals.`,
      `Conducted thorough code reviews to ensure high-quality code and best practice adherence.`
    ],
  },
  StorageCraft: {
    title: "Frontend Developer @StorageCraft",
    time: "Jun 2019 - Present",
    items: [
      `Solved a long standing and critical bug in our internal support app which allowed for more customer tickets to be handled.`,
      `Built Frontend client using React, Hook Form, Apollo Gql, AWS Amplify.`,
      `Implemented O-Auth flow for application.`,
      `Develop GraphQL server stack with Apollo, Express, Jest, and Firebase / Firestore / Realtime Database.`,
      `Collaborate with developers for seamless integration of server and client components, improving communication and teamwork.`,
      `Ensure high-quality products and user experience through Cypress E2E, Jest unit tests.`,
    ],
  },
  Exact: {
    title: "Java Developer @Exact Sciences",
    time: "Jun 2018 - April 1019",
    items: [
      `Wrote a Python chat bot for our internal MS Teams channels to aid in code commits.`,
      `Learned industry practices, git flows, peer reviewing with Jira, and explored a veriety of tech stacks`,
      `Helped find and optimize backend functions to speed up information processing.`,
    ],
  },
  Eastern: {
    title: "Student Teaching Assistant @Eastern Washington University",
    time: "Sep 2017 - Jun 2019",
    items: [
      `Tutored new computer science undergraduates in the intro to java courses as well as intermediate courses.`,
      `Graded and gave feedback on a veriety of assignment types from object oriented principles, clean code, data structures, and performance optomizations`,
      `Met weekly with cscd 110, and 210 professors to go over exams, assignments and lecure notes for students.`,
    ],
  },
};
