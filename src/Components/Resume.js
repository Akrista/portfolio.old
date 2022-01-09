import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - Present"}
            title={"Sysadmin"}
            subTitle={"Vepagos, C.A"}
            text={
              "Deployment of web services through containers, server maintenance and database associated with services in production, programming and maintenance of web applications."
            }
          />
          <ResumeItem
            year={"2019 - 2021"}
            title={"Collections Specialist"}
            subTitle={"Disglobal, C.A"}
            text={
              "Elaborate tools for the generation of massive collection. Perform statistical reports according to the time lapse to be evaluated.Evaluate through the management indicators the efficiency in the daily processes of the collection area."
            }
          />
          <ResumeItem
            year={"2015 - 2019"}
            title={"Customer Service Manager"}
            subTitle={"Organización Italcambio, C.A"}
            text={
              "Control the processes aimed at the satisfaction of internal and external customers. Coordinate and manage the requirements of customers related to the products and services provided. Serve as an intermediary in the solution of cases and conflicts with clients and the areas involved."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2019 - Present"}
            title={"Responsive Web Design"}
            subTitle={"FreeCodeCamp"}
            text={
              "A FreeCodeCamp certification covering essential topics for developers to create web pages, such as HTML (hypertext markup language) for content, CSS (cascading style sheets) for layout, use variables in CSS, best practices for accessibility when building a web form and finally, the creation of web pages that respond to different screen sizes with flexbox."
            }
          />
          <ResumeItem
            year={"2017 - 2017"}
            title={"Philosophy"}
            subTitle={"Universidad Central de Venezuela"}
            text={
              "The philosophy career aims to deepen the analysis and critical understanding of the ethical, scientific and humanistic areas in general, in order to offer theoretical and methodological models for a more adequate interpretation of reality."
            }
          />
          <ResumeItem
            year={"2011 - 2014"}
            title={"Law (Jurisprudence)"}
            subTitle={"Universidad Santa Maria"}
            text={
              "The Lawyer graduated from the Santa María University is trained to develop in any area of the different specialties of law, in the free exercise of his profession and in public and private functions in all instances of the administration of justice, in civil and criminal matters. , administrative and of all kinds in the competent jurisdiction."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
