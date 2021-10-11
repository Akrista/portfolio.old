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
            title={"IT Analist"}
            subTitle={"Vepagos, C.A"}
            text={
              "Deployment of web services through containers, server maintenance and database associated with services in production, programming and maintenance of web applications for deployment."
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
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2017 - 2017"}
            title={"Philosophy"}
            subTitle={"Universidad Central de Venezuela"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2011 - 2014"}
            title={"Law (Jurisprudence)"}
            subTitle={"Universidad Santa Maria"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
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
