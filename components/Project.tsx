"use client";
import React, { useContext } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const projects = [
    {
      className: "bg-brand-yellow-pastel",
      title: "StockFlow – Inventory & Transaction Management System",
      client: "Personal SaaS Project",
      stack: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      link: "http://stockflow-dev.vercel.app/",
    },
    {
      className: "bg-brand-blue-pastel",
      title: "Workflow Management System Web Application",
      client: "Produk untuk perusahaan IT Consultant",
      stack: ["ReactJs", "SASS", "Ant Design", "Vite"],
    },
    {
      className: "bg-brand-pink-pastel",
      title: "Workflow Management System Website",
      client: "Produk untuk perusahaan IT Consultant",
      stack: ["ReactJs", "Tailwind", "Vite"],
      link: "https://quickflow.id/",
    },
    {
      className: "bg-brand-green-pastel",
      title: "Greenhouse Management System",
      client: "Produk untuk perusahaan IT Consultant",
      stack: ["ReactJs", "SASS", "Ant Design", "Vite"],
    },
    {
      className: "bg-brand-red-pastel",
      title: "e-Procurement Web Application",
      client: "Produk untuk perusahaan IT Consultant",
      stack: ["Micro Frontend", "ReactJs", "SASS", "Ant Design"],
    },
    {
      className: "bg-brand-yellow-pastel",
      title: "e-Procurement Website",
      client: "Website untuk pemasaran produk e-Procurement pada perusahaan IT Consultant",
      stack: ["ReactJs", "Tailwind", "Vite"],
      expose: true,
      link: "https://quickacq.com/",
    },
    {
      className: "bg-brand-cream-pastel",
      title: "POC Warehouse Management System",
      client: "Untuk perusahaan penjualan Granit",
      stack: ["ReactJs", "SASS", "Ant Design", "Vite"],
      expose: true,
    },
    {
      className: "bg-brand-yellow-pastel",
      title: "POC e-Procurement System",
      client: "Untuk sebuah Bank",
      stack: ["ReactJs", "SASS", "Ant Design"],
      expose: true,
    },
    {
      className: "bg-brand-pink-pastel",
      title: "Website + CMS + Booking System",
      client: "Untuk perusahaan Hiburan",
      stack: ["NextJs", "TypeScript", "SASS", "Ant Design"],
      expose: true,
    },
    {
      className: "bg-brand-red-pastel",
      title: "POC Website + CMS",
      client: "Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia",
      stack: ["ReactJs", "SASS", "Ant Design", "Vite"],
      expose: true,
    },
    {
      className: "bg-brand-red-pastel",
      title: "e-Learning Application",
      client: "Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia",
      stack: ["ReactJs", "SASS", "Bootstrap"],
    },
    {
      className: "bg-brand-red-pastel",
      title: "Competency Management System",
      client: "Untuk perusahaan otomotive, salah satu yang terbesar di Indonesia",
      stack: ["Javascript", "JQuery", "CSS3"],
    },
    {
      className: "bg-brand-blue-pastel",
      title: "e-Procourement - Master Data VAT",
      client: "Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia ",
      stack: ["VueJS", "CSS3", "Bootstrap"],
    },
    {
      className: "bg-brand-blue-pastel",
      title: "ePV - Compensation",
      client: "Untuk perusahaan asuransi, salah satu yang terbesar di Indonesia ",
      stack: ["AngularJS", "CSS3"],
    },
    {
      className: "bg-brand-red-pastel",
      title: "Enhancement SharePoint",
      client: "Untuk perusahaan oil and gas",
      stack: [".Net MVC", "JQuery", "Bootstrap", "CSS3"],
    },
    {
      className: "bg-brand-green-pastel",
      title: "eLearning System",
      client: "Untuk perusahaan perkebunan",
      stack: [".Net", "JQuery", "Sharepoint", "CSS3"],
    },
    {
      className: "bg-brand-whitist-pastel",
      title: "Sistem Infromasi Perpustakaan",
      client: "SMA Negeri 15 Kota Bekas",
      vendor: "Internship",
      stack: ["PHP", "JQuery", "CSS3"],
    },
  ];

  return (
    <div
      className="section-project bg-white min-h-screen py-10"
      ref={projectRef}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
        className="mb-8"
      >
        <p className="flex justify-center">My Recent Project</p>
        <hr className="w-[200px] m-auto bg-brand-blue-pastel border-2 border-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] rounded-md" />
      </motion.div>
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto ">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 xl:gap-8 mt-16 text-white"
        >
          {projects.map((project) => (
            <motion.div
              key={`${project.title}-${project.client}`}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <CardProject {...project} />
            </motion.div>
          ))}
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
        </motion.div>
      </div>
    </div>
  );
}
