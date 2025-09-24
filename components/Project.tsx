"use client";
import React, { useContext } from "react";
import CardProject from "./CardProject";
// import Luna from "@/assets/images/luna.png";
// import Coma from "@/assets/images/COMA.png";
// import ATS from "@/assets/images/ATS.png";
// import Notes from "@/assets/images/note.png";
// import InspiroEProc from "@/assets/images/inspiro-eproc-project.png";
// import QuickAcqWebsite from "@/assets/images/quickacq-website.png";
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
            className="bg-brand-green-pastel"
            title="Greenhouse Management System"
            client="Produk untuk perusahaan IT Consultant"
            // client="PT. Inspiro"
            stack={["ReactJs", "SASS", "Ant Design", "Vite"]}
          ></CardProject>
          <CardProject
            className="bg-brand-red-pastel"
            // image={InspiroEProc}
            // title="QuickAcq e-Procurement Web Application"
            title="e-Procurement Web Application"
            // client="PT. Inspiro"
            client="Produk untuk perusahaan IT Consultant"
            stack={["Micro Frontend", "ReactJs", "SASS", "Ant Design"]}
          ></CardProject>
          <CardProject
            className="bg-brand-yellow-pastel"
            // image={QuickAcqWebsite}
            // title="QuickAcq e-Procurement Website"
            title="e-Procurement Website"
            client="Website untuk pemasaran produk e-Procurement pada perusahaan IT Consultant"
            // client="PT. Inspiro"
            stack={["ReactJs", "Tailwind", "Vite"]}
            expose={true}
            link="https://quickacq.com/"
          ></CardProject>
          <CardProject
            className="bg-brand-cream-pastel"
            title="POC Warehouse Management System"
            client="Untuk perusahaan penjualan Granit"
            stack={["ReactJs", "SASS", "Ant Design", "Vite"]}
            expose={true}
          ></CardProject>
          <CardProject
            className="bg-brand-yellow-pastel"
            title="POC e-Procurement System"
            client="Untuk sebuah Bank"
            // client="Bank Ganesha "
            stack={["ReactJs", "SASS", "Ant Design"]}
            expose={true}
          ></CardProject>
          <CardProject
            className="bg-brand-pink-pastel"
            title="Website + CMS + Booking System"
            // client="Stellar"
            client="Untuk perusahaan Hiburan"
            stack={["NextJs", "TypeScript", "SASS", "Ant Design"]}
            expose={true}
          ></CardProject>
          <CardProject
            className="bg-brand-red-pastel"
            title="POC Website + CMS"
            // client="AIA"
            client="Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia"
            stack={["ReactJs", "SASS", "Ant Design", "Vite"]}
            expose={true}
          ></CardProject>
          <CardProject
            className="bg-brand-red-pastel"
            // image={Luna}
            // title="LUNA (Life University Application) / e-Learning Application"
            title="e-Learning Application"
            // vendor="PT. Inspiro"
            client="Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia"
            stack={["ReactJs", "SASS", "Bootstrap"]}
          ></CardProject>
          <CardProject
            className="bg-brand-red-pastel"
            // image={Coma}
            title="Competency Management System"
            // client="AHM"
            client="Untuk perusahaan otomotive, salah satu yang terbesar di Indonesia"
            // vendor="PT. Inspiro"
            stack={["Javascript", "JQuery", "CSS3"]}
          ></CardProject>
          <CardProject
            className="bg-brand-blue-pastel"
            title="e-Procourement - Master Data VAT"
            // client="Zurich"
            client="Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia "
            // vendor="PT. Inspiro"
            stack={["VueJS", "CSS3", "Bootstrap"]}
          ></CardProject>
          <CardProject
            className="bg-brand-blue-pastel"
            // title="Zurich ePV - Compensation"
            title="ePV - Compensation"
            // client="Zurich"
            client="Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia "
            // vendor="PT. Inspiro"
            stack={["AngularJS", "CSS3"]}
          ></CardProject>
          <CardProject
            className="bg-brand-red-pastel"
            title="Enhancement SharePoint"
            // client="JOB Pertamina-Medco E&P Tomori Sulawesi"
            client="Untuk perusahaan oil and gas"
            // vendor="PT. Inspiro"
            stack={[".Net MVC", "JQuery", "Bootstrap", "CSS3"]}
          ></CardProject>
          <CardProject
            className="bg-brand-green-pastel"
            title="eLearning System"
            // client=" Perusahaan Perkebunan London Sumatra Indonesia"
            client="Untuk perusahaan perkebunan"
            // vendor="PT. Inspiro"
            stack={[".Net", "JQuery", "Sharepoint", "CSS3"]}
          ></CardProject>
          <CardProject
            className="bg-brand-whitist-pastel"
            title="Sistem Infromasi Perpustakaan"
            client="SMA Negeri 15 Kota Bekas"
            vendor="Internship"
            stack={["PHP", "JQuery", "CSS3"]}
          ></CardProject>
          {/* <CardProject
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
            title="Inspiro Accounting"
            client="PT. Inspiro"
            vendor="PT. Inspiro"
            stack={["ReactJs", "CSS3", "Bootstrap"]}
          ></CardProject>
         
           */}
        </div>
      </div>
    </div>
  );
}
