"use client";
import React, { useContext } from "react";
import CardProject from "./CardProject";
import Luna from "@/assets/images/luna.png";
import Coma from "@/assets/images/COMA.png";
import ATS from "@/assets/images/ATS.png";
import Notes from "@/assets/images/note.png";
import InspiroEProc from "@/assets/images/inspiro-eproc-project.png";
import QuickAcqWebsite from "@/assets/images/quickacq-website.png";
import MenuContext from "@/context/MenuContext";

export default function Project() {
  const { projectRef } = useContext(MenuContext);

  return (
    <div
      className="section-project bg-white min-h-screen pb-10"
      ref={projectRef}
    >
      <div className="mb-8">
        <p className="flex justify-center">My Recent Project</p>
        <hr className="w-[200px] m-auto bg-brand-blue-pastel  border-black shadow-[1.8px_1px_0px_0_rgba(0,0,0)]" />
      </div>
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16 text-white">
          <CardProject
            className="bg-brand-yellow-pastel"
            image={InspiroEProc}
            title="QuickAcq e-Procurement Web Application"
            client="PT. Inspiro"
            stack={["ReactJs", "SASS", "Ant Design"]}
          ></CardProject>
          <CardProject
            className="bg-brand-yellow-pastel"
            image={QuickAcqWebsite}
            title="QuickAcq e-Procurement Website"
            client="PT. Inspiro"
            stack={["ReactJs", "Tailwind", "Vite"]}
            expose={true}
            link="https://quickacq.com/"
          ></CardProject>
          <CardProject
            image={Luna}
            title="LUNA (Life University Application) / e-Learning Application"
            vendor="PT. Inspiro"
            client="Sinarmas MSIG"
            stack={["ReactJs", "SASS", "Bootstrap"]}
          ></CardProject>
          <CardProject
            className="bg-brand-red-pastel"
            image={ATS}
            title="ATS Inspiro"
            client="PT. Inspiro"
            stack={["ReactJs", "SASS", "Bootstrap"]}
          ></CardProject>
          <CardProject
            className="bg-brand-yellow-pastel"
            image={Notes}
            title="Notes App"
            // vendor="PT. Inspiro"
            vendor="-"
            stack={["ReactJs", "Firebase", "CSS3", "Bootstrap"]}
            expose={true}
            link="https://react-notesapp.vercel.app/"
          ></CardProject>
          <CardProject
            className="bg-brand-pink-pastel"
            image={Coma}
            title="Competency Management System"
            client="AHM"
            vendor="PT. Inspiro"
            stack={["Javascript", "JQuery", "CSS3"]}
          ></CardProject>
          <CardProject
            className="bg-brand-whitist-pastel"
            title="Zurich eProc - Master Data VAT"
            client="Zurich"
            vendor="PT. Inspiro"
            stack={["VueJS", "CSS3", "Bootstrap"]}
          ></CardProject>
          <CardProject
            className="bg-brand-red-pastel"
            title="Zurich ePV - Compensation"
            client="PT. Inspiro"
            stack={["AngularJS", "CSS3"]}
          ></CardProject>
          <CardProject
            title="Inspiro Accounting"
            client="Zurich"
            vendor="PT. Inspiro"
            stack={["ReactJs", "CSS3", "Bootstrap"]}
          ></CardProject>
          <CardProject
            className="bg-brand-yellow-pastel"
            title="Enhancement SharePoint"
            client="JOB Pertamina-Medco E&P Tomori Sulawesi"
            vendor="PT. Inspiro"
            stack={[".Net MVC", "JQuery", "Bootstrap", "CSS3"]}
          ></CardProject>
          <CardProject
            className="bg-brand-whitist-pastel"
            title="eLearning"
            client=" Perusahaan Perkebunan London Sumatra Indonesia"
            vendor="PT. Inspiro"
            stack={[".Net", "JQuery", "Sharepoint", "CSS3"]}
          ></CardProject>
          <CardProject
            className="bg-brand-yellow-pastel"
            title="Sistem Infromasi Perpustakaan"
            client="SMA Negeri 15 Kota Bekas"
            vendor="Internship"
            stack={["PHP", "JQuery", "CSS3"]}
          ></CardProject>
        </div>
      </div>
    </div>
  );
}
