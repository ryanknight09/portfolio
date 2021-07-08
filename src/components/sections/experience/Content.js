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
  StorageCraft: {
    title: "Frontend Developer @ StorageCraft",
    time: "Jun 2019 - Present",
    items: [
      `Front end lead developer for Saas Cloud Backup and Recovery for O365, G-suit, and other services.`,
      `Architected and implimented a back end for front end GQL Apollo Express server to consume REST api's, and handle authorization / authentication.`,
      `Built a new scalable and more maintainable React / Apollo frontend client while simultaneosly maintaining a legacy sencha.js application still production.`,
      `Communicated with UI/UX designer for implimentation specifications, regularly met with project manager, and led back log grooming / daily standup.`,
    ],
  },
  Exact: {
    title: "Java Developer @ Exact Sciences",
    time: "Jun 2018 - April 1019",
    items: [
      `Wrote code optimizations inside of monolithic javaEE application and built automated QA testing environment features for business analysts.`,
      `Learned industry practices, git flows, peer reviewing with Jira, and explored a veriety of tech stacks`,
      `Worked closely with peer interns to solve fun challenges while mainting guidence and direction from lead developers.`,
    ],
  },
  Eastern: {
    title: "Student Teaching Assistant @ Eastern Washington University",
    time: "Sep 2017 - Jun 2019",
    items: [
      `Tutored new computer science undergraduates in the intro to java courses as well as intermediate courses.`,
      `Graded and gave feedback on a veriety of assignment types from object oriented principles, clean code, data structures, and performance optomizations`,
      `Met weekly with cscd 110, and 210 professors to go over exams, assignments and lecure notes for students.`,
    ],
  },
};
