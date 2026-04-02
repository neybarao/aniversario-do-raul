import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import svgPaths from "./svg-9tneks1yzf";
import imgBgBaby from "figma:asset/0cb98f0389972eec09fd28028c649adfa52c1b35.webp";
import imgGeminiGeneratedImage87B3S887B3S887B32 from "figma:asset/595abc1fe83a13ac64981590eded523d8d411154.webp";
import imgGeminiGeneratedImage2Lw4Iv2Lw4Iv2Lw42 from "figma:asset/bc0a55f1255d6cb2b566f5bf9501b14beacfaf7b.webp";
import imgAnimals from "figma:asset/5e2d2fee9265ed38d8004c53bdb7997f26102541.webp";
import imgRaul from "figma:asset/d617e6cc7383ba62177e2c2960b9dc74e64ce014.webp";
import imgGeminiGeneratedImage2C8Wmn2C8Wmn2C8W1 from "figma:asset/nova.webp";
import imgGeminiGeneratedImageV8Fz0Zv8Fz0Zv8Fz2 from "figma:asset/841ba1fed0e5d5f4cbfa8a4b604d94027ac3d583.webp";
import imgGeminiGeneratedImageYd5O1Yyd5O1Yyd5O1 from "figma:asset/cdd136902fe7009b720010cb6f5aabf10992dfa9.webp";
import imgGeminiGeneratedImageCny0Xccny0Xccny01 from "figma:asset/87ec5067754f523a89984371d863321a0c9a543f.webp";
import imgGeminiGeneratedImageJ1Bqwtj1Bqwtj1Bq1 from "figma:asset/1481d0692724a65446fa2e67a52294d8872ee697.webp";
import { imgGeminiGeneratedImage87B3S887B3S887B31, imgGeminiGeneratedImage2Lw4Iv2Lw4Iv2Lw41 } from "./svg-xs03s";
import imgIgreja from "../assets/igreja.png";
import imgCasa from "../assets/casa.png";

function TreesLeft() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[37.83px] contents left-[calc(50%-12px)]" data-name="trees-left">
      <div
        className="-translate-x-1/2 absolute bottom-[37.83px] h-[477.17px] left-[calc(50%-12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[700px_477.17px] w-[700px]"
        data-name="Gemini_Generated_Image_87b3s887b3s887b3 1"
        style={{
          maskImage: `url('${imgGeminiGeneratedImage87B3S887B3S887B31}')`,
          WebkitMaskImage: `url('${imgGeminiGeneratedImage87B3S887B3S887B31}')`,
          maskSize: "700px 477.17px",
          WebkitMaskSize: "700px 477.17px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "0px 0px",
          WebkitMaskPosition: "0px 0px"
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage87B3S887B3S887B32} />
      </div>
    </div>
  );
}

function TreesRight() {
  return (
    <div className="absolute bottom-[-0.74px] contents right-[-186px]" data-name="trees-right">
      <div
        className="absolute bottom-[-0.74px] h-[593.736px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[871px_593.736px] right-[-186px] w-[871px]"
        data-name="Gemini_Generated_Image_2lw4iv2lw4iv2lw4 1"
        style={{
          maskImage: `url('${imgGeminiGeneratedImage2Lw4Iv2Lw4Iv2Lw41}')`,
          WebkitMaskImage: `url('${imgGeminiGeneratedImage2Lw4Iv2Lw4Iv2Lw41}')`,
          maskSize: "871px 593.736px",
          WebkitMaskSize: "871px 593.736px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "0px 0px",
          WebkitMaskPosition: "0px 0px"
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage2Lw4Iv2Lw4Iv2Lw42} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-178.74px)] top-[225.55px]">
      <div className="-translate-x-1/2 absolute flex h-[53.811px] items-center justify-center left-[calc(50%-178.74px)] top-[225.55px] w-[57.645px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[53.811px] relative w-[57.645px]" data-name="Ellipse 1 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.6446 53.8115">
              <path d={svgPaths.p261fde00} fill="var(--fill-0, #86756D)" id="Ellipse 1 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[12.648px] items-center justify-center left-[calc(50%-159.82px)] top-[248.66px] w-[19.798px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[12.648px] relative w-[19.798px]" data-name="Intersect">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7976 12.6483">
              <path d={svgPaths.pe4b1500} fill="var(--fill-0, #4C3F39)" id="Intersect" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+178.18px)] top-[225.55px]">
      <div className="-translate-x-1/2 absolute h-[53.811px] left-[calc(50%+178.18px)] top-[225.55px] w-[57.645px]" data-name="Ellipse 1 (Stroke)">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.6446 53.8115">
          <path d={svgPaths.p261fde00} fill="var(--fill-0, #86756D)" id="Ellipse 1 (Stroke)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[12.648px] left-[calc(50%+159.25px)] top-[248.66px] w-[19.798px]" data-name="Intersect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7976 12.6483">
          <path d={svgPaths.pe4b1500} fill="var(--fill-0, #4C3F39)" id="Intersect" />
        </svg>
      </div>
    </div>
  );
}

function BatizadoE1Aniversario() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-2.92px)] top-[167.99px]" data-name="Batizado e 1º Aniversário">
      <div className="-translate-x-1/2 absolute h-[16.846px] left-[calc(50%+164.77px)] top-[223.73px] w-[16.753px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7535 16.8461">
          <path d={svgPaths.p15c37e00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[19.245px] left-[calc(50%+155.28px)] top-[212.55px] w-[13.533px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5335 19.2452">
          <path d={svgPaths.p26e81b80} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[14.564px] left-[calc(50%+145.35px)] top-[210.66px] w-[16.048px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0478 14.5644">
          <path d={svgPaths.p3bd50d80} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[22.452px] left-[calc(50%+130.77px)] top-[199.16px] w-[18.442px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4421 22.4518">
          <path d={svgPaths.p366cd680} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[16.752px] left-[calc(50%+113.88px)] top-[195.92px] w-[15.451px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.451 16.7524">
          <path d={svgPaths.p306f9000} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[15.468px] left-[calc(50%+101.55px)] top-[190.36px] w-[14.546px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5459 15.4681">
          <path d={svgPaths.p2542c900} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[16.965px] left-[calc(50%+85.71px)] top-[185.75px] w-[15.704px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7037 16.9653">
          <path d={svgPaths.p33e79a00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[17.218px] left-[calc(50%+70.06px)] top-[180.19px] w-[14.895px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8954 17.2183">
          <path d={svgPaths.p20f4fc00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[21.488px] left-[calc(50%+57.07px)] top-[173.26px] w-[7.237px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.23662 21.4877">
          <path d={svgPaths.p3f94aa00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[17.59px] left-[calc(50%+43.41px)] top-[175.92px] w-[15.258px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2583 17.5899">
          <path d={svgPaths.p14b15480} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[22.05px] left-[calc(50%+24.09px)] top-[169.36px] w-[18.701px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7014 22.0496">
          <path d={svgPaths.p978b200} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[9.625px] left-[calc(50%+0.61px)] top-[167.99px] w-[9.686px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.68556 9.62501">
          <path d={svgPaths.p3389dd00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[21.182px] left-[calc(50%-11.88px)] top-[168.43px] w-[9.065px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.06522 21.1817">
          <path d={svgPaths.p3a04a080} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[16.745px] left-[calc(50%-34.76px)] top-[174.96px] w-[15.356px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3564 16.7448">
          <path d={svgPaths.p3e60ff80} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[16.831px] left-[calc(50%-61.95px)] top-[179.28px] w-[16.545px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5446 16.8307">
          <path d={svgPaths.pae64df0} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[23.982px] left-[calc(50%-80.57px)] top-[176.87px] w-[17.397px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3967 23.9822">
          <path d={svgPaths.p1111bc00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[18.565px] left-[calc(50%-99.08px)] top-[188.16px] w-[17.726px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7256 18.5652">
          <path d={svgPaths.p34244c00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[18.634px] left-[calc(50%-115.44px)] top-[195.07px] w-[17.005px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0049 18.6338">
          <path d={svgPaths.p38119780} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[20.248px] left-[calc(50%-127.31px)] top-[196.01px] w-[11.594px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5945 20.2484">
          <path d={svgPaths.p19a56f0} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[17.303px] left-[calc(50%-135.48px)] top-[203.06px] w-[15.252px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2523 17.3034">
          <path d={svgPaths.pd1b0a70} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[19.092px] left-[calc(50%-148.41px)] top-[210.67px] w-[18.475px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4755 19.0921">
          <path d={svgPaths.p32560c80} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[23.511px] left-[calc(50%-167.74px)] top-[218.68px] w-[22.503px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5029 23.5111">
          <path d={svgPaths.p185aab00} fill="var(--fill-0, #46322E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.28px)] top-[156px]" data-name="banner">
      <Group1 />
      <Group />
      <div className="-translate-x-1/2 absolute h-[106.359px] left-[calc(50%-0.47px)] top-[156px] w-[399.28px]" data-name="Ellipse 1 (Stroke)">
        <div className="absolute inset-[0_0.26%_0.98%_0.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 397.2 105.321">
            <path d={svgPaths.p36b86500} fill="var(--fill-0, #D1B9A1)" id="Ellipse 1 (Stroke)" />
          </svg>
        </div>
      </div>
      <BatizadoE1Aniversario />
    </div>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yTrees = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yAnimals = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const yRaul = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);

  return (
    <div ref={ref} className="h-[762px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <motion.div style={{ y: yBackground }} className="-translate-x-1/2 absolute bottom-[-139px] h-[732px] left-[calc(50%+1px)] w-[1786px]" data-name="bg-baby">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBgBaby} />
          </div>
          <div className="absolute bg-gradient-to-b from-[#fbf7ed] inset-0 to-[12.418%] to-[rgba(251,247,237,0)]" />
        </div>
      </motion.div>
      <motion.div style={{ y: yTrees }} className="absolute inset-0 pointer-events-none">
        <TreesLeft />
        <TreesRight />
      </motion.div>
      <motion.div style={{ y: yAnimals }} className="-translate-x-1/2 absolute bottom-0 h-[303px] left-[calc(50%-0.5px)] w-[1487px]" data-name="animals">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAnimals} />
        </div>
      </motion.div>
      <Banner />
      <motion.div style={{ y: yRaul }} className="-translate-x-1/2 absolute h-[111.827px] left-1/2 top-[62.42px] w-[244px]" data-name="Raul">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[203.98%] left-[-42.54%] max-w-none top-[-65.6%] w-[171.39%]" src={imgRaul} />
        </div>
      </motion.div>
    </div>
  );
}

function FadeInWhenInView({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
}

function Frame6() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] relative rounded-[32px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex items-start p-[24px] relative w-full">
        <p className="flex-[1_0_0] font-bold leading-[normal] min-h-px min-w-px relative text-[#386f1e] text-[18px] text-center">Com o coração transbordando de alegria, convidamos você para celebrar conosco o primeiro aninho do nosso Raul, e o seu encontro com a luz por meio do Batismo. Sua presença tornará esse dia ainda mais abençoado e inesquecível.</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#273421] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-bold leading-[normal] relative shrink-0 text-[#a9e98b] text-[20px] text-center whitespace-nowrap">MATEUS 19:14</p>
    </div>
  );
}

function Cite() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-full" data-name="Cite">
      <p className="font-bold leading-[normal] min-w-full relative shrink-0 text-[#273421] text-[24px] text-center w-[min-content]">{`"Deixai vir a mim os pequeninos”`}</p>
      <Tag />
    </div>
  );
}

function Intro() {
  return (
    <div className="relative shrink-0 w-full" data-name="Intro">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[40px] py-[120px] relative w-full">
          <div className="absolute h-[245px] left-0 top-[-108px] w-[262px]" data-name="Gemini_Generated_Image_2c8wmn2c8wmn2c8w 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 size-full object-cover" src={imgGeminiGeneratedImage2C8Wmn2C8Wmn2C8W1} />
            </div>
          </div>
          <p className="font-bold leading-[normal] min-w-full relative shrink-0 text-[#273421] text-[24px] text-center w-[min-content]">Uma celebração dupla e especial</p>
          <Frame6 />
          <Cite />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#273421] border-solid border-t-10 inset-0 pointer-events-none" />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#273421] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-bold leading-[normal] relative shrink-0 text-[#a9e98b] text-[20px] text-center whitespace-nowrap">8h00</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p577c100} fill="var(--fill-0, #273421)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <a
      href="https://maps.app.goo.gl/ZiiLGVu5Ep8GhTQbA"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#c1b86a] content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 hover:bg-[#b0a75a] transition-colors cursor-pointer no-underline"
    >
      <Frame />
      <p className="font-bold leading-[normal] relative shrink-0 text-[#273421] text-[24px] text-center whitespace-nowrap">Ver no Mapa</p>
    </a>
  );
}

function Frame1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(251,247,237,0.8)] relative rounded-[32px] shrink-0 w-full overflow-hidden shadow-lg">
      <div className="h-[200px] w-full overflow-hidden">
        <img src={imgIgreja} alt="Capela São Domingos Sávio" className="w-full h-full object-cover" />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Tag1 />
        <p className="font-bold leading-[normal] relative shrink-0 text-[#273421] text-[32px] text-center whitespace-nowrap">Batizado</p>
        <p className="font-bold leading-[normal] min-w-full relative shrink-0 text-[#386f1e] text-[24px]">Capela São Domingos Sávio</p>
        <p className="font-bold leading-[normal] min-w-full relative shrink-0 text-[#386f1e] text-[18px]">R. Flamboiant, 277 - Cidade Jardim</p>
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#273421] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0" data-name="tag">
      <p className="font-bold leading-[normal] relative shrink-0 text-[#a9e98b] text-[20px] text-center whitespace-nowrap">11h00</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p577c100} fill="var(--fill-0, #273421)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <a
      href="https://maps.app.goo.gl/cwQKxWHmwTjTGvcn7"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#c1b86a] content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 hover:bg-[#b0a75a] transition-colors cursor-pointer no-underline"
    >
      <Frame2 />
      <p className="font-bold leading-[normal] relative shrink-0 text-[#273421] text-[24px] text-center whitespace-nowrap">Ver no Mapa</p>
    </a>
  );
}

function Frame3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(251,247,237,0.8)] relative rounded-[32px] shrink-0 w-full overflow-hidden shadow-lg">
      <div className="h-[200px] w-full overflow-hidden">
        <img src={imgCasa} alt="Alaya Garden" className="w-full h-full object-cover" />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Tag2 />
        <p className="font-bold leading-[normal] relative shrink-0 text-[#273421] text-[32px] text-center whitespace-nowrap">Festa</p>
        <p className="font-bold leading-[normal] relative shrink-0 text-[#386f1e] text-[24px]">Alaya Garden</p>
        <p className="font-bold leading-[normal] relative shrink-0 text-[#386f1e] text-[18px]">Rua Lourenço Alves da Costa, 193</p>
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Blocks() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[1024px] relative shrink-0 w-full" data-name="blocks">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Intro1() {
  return (
    <div className="bg-[#f2eee5] relative shrink-0 w-full" data-name="Intro">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[40px] py-[120px] relative w-full">
          <p className="font-bold leading-[normal] min-w-full relative shrink-0 text-[#273421] text-[24px] text-center w-[min-content]">Programação do Dia</p>
          <div className="absolute h-[232px] right-0 top-[-99px] w-[310px]" data-name="Gemini_Generated_Image_v8fz0zv8fz0zv8fz 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-76.29%] max-w-none top-0 w-[176.29%]" src={imgGeminiGeneratedImageV8Fz0Zv8Fz0Zv8Fz2} />
            </div>
          </div>
          <Blocks />
          <div className="absolute bottom-[-50px] h-[272px] left-[-119px] w-[278px]" data-name="Gemini_Generated_Image_yd5o1yyd5o1yyd5o 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-39.73%] max-w-none top-0 w-[179.45%]" src={imgGeminiGeneratedImageYd5O1Yyd5O1Yyd5O1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#4d3a34] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0">
      <p className="font-bold leading-[normal] relative shrink-0 text-[#ffb68d] text-[20px] text-center whitespace-nowrap">Contagem Regressiva</p>
    </div>
  );
}

function Frame8({ value }: { value: number }) {
  return (
    <div className="backdrop-blur-[10px] bg-[#f2eee5] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-bold items-center justify-center leading-[normal] pb-[32px] pt-[24px] px-[8px] relative text-center w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#273421] text-[40px]">{String(value).padStart(2, '0')}</p>
          <p className="relative shrink-0 text-[#827500] text-[12px] uppercase">Dias</p>
        </div>
      </div>
    </div>
  );
}

function Frame9({ value }: { value: number }) {
  return (
    <div className="backdrop-blur-[10px] bg-[#f2eee5] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-bold items-center justify-center leading-[normal] pb-[32px] pt-[24px] px-[8px] relative text-center w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#273421] text-[40px]">{String(value).padStart(2, '0')}</p>
          <p className="relative shrink-0 text-[#827500] text-[12px] uppercase">Horas</p>
        </div>
      </div>
    </div>
  );
}

function Frame10({ value }: { value: number }) {
  return (
    <div className="backdrop-blur-[10px] bg-[#f2eee5] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-bold items-center justify-center leading-[normal] pb-[32px] pt-[24px] px-[8px] relative w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#273421] text-[40px] text-center">{String(value).padStart(2, '0')}</p>
          <p className="relative shrink-0 text-[#827500] text-[12px] text-center uppercase">Mins</p>
        </div>
      </div>
    </div>
  );
}

function FrameSegs({ value }: { value: number }) {
  return (
    <div className="backdrop-blur-[10px] bg-[#f2eee5] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-bold items-center justify-center leading-[normal] pb-[32px] pt-[24px] px-[8px] relative w-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#273421] text-[40px] text-center">{String(value).padStart(2, '0')}</p>
          <p className="relative shrink-0 text-[#827500] text-[12px] text-center uppercase">Segs</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-04-12T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame8 value={timeLeft.days} />
      <Frame9 value={timeLeft.hours} />
      <Frame10 value={timeLeft.minutes} />
      <FrameSegs value={timeLeft.seconds} />
    </div>
  );
}

function Intro2() {
  const handleAddToCalendar = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Aniversario do Raul//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "UID:batizado-raul-2026",
      "DTSTAMP:20260401T230000Z",
      "DTSTART:20260412T120000Z",
      "DTEND:20260412T143000Z",
      "SUMMARY:Batizado do Raul",
      "DESCRIPTION:∙ Capela São Domingos Sávio: https://maps.app.goo.gl/ZiiLGVu5Ep8GhTQbA\\n∙ Alaya Garden: https://maps.app.goo.gl/cwQKxWHmwTjTGvcn7",
      "LOCATION:Capela São Domingos Sávio",
      "END:VEVENT",
      "BEGIN:VEVENT",
      "UID:festa-raul-2026",
      "DTSTAMP:20260401T230000Z",
      "DTSTART:20260412T150000Z",
      "DTEND:20260413T020000Z",
      "SUMMARY:Aniversário do Raul - 1 Aninho",
      "DESCRIPTION:∙ Capela São Domingos Sávio: https://maps.app.goo.gl/ZiiLGVu5Ep8GhTQbA\\n∙ Alaya Garden: https://maps.app.goo.gl/cwQKxWHmwTjTGvcn7",
      "LOCATION:Alaya Garden",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Aniversario_do_Raul.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#c6ab96] relative shrink-0 w-full" data-name="Intro">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center pb-[240px] pt-[80px] px-[40px] relative w-full">
          <Frame7 />
          <Frame11 />
          <button
            onClick={handleAddToCalendar}
            className="z-10 bg-[#f5ac57] content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 hover:bg-[#e69b46] transition-colors cursor-pointer border-none shadow-lg"
          >
            <FrameCalendarIcon />
            <p className="font-bold leading-[normal] relative shrink-0 text-[#273421] text-[20px] text-center whitespace-nowrap">Adicione à agenda</p>
          </button>
          <div className="absolute bottom-[-25px] flex h-[233px] items-center justify-center right-[-42px] w-[238px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[233px] relative w-[238px]" data-name="Gemini_Generated_Image_cny0xccny0xccny0 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-39.73%] max-w-none top-0 w-[179.45%]" src={imgGeminiGeneratedImageCny0Xccny0Xccny01} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-53px] h-[288px] left-[-61px] w-[287px]" data-name="Gemini_Generated_Image_j1bqwtj1bqwtj1bq 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-44.33%] max-w-none top-0 w-[184.25%]" src={imgGeminiGeneratedImageJ1Bqwtj1Bqwtj1Bq1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FrameCalendarIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p28fb4080} fill="var(--fill-0, #1F1F1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p28fb4080} fill="var(--fill-0, #A39C5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DateSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#d7cd76] content-stretch flex gap-[16px] items-center justify-center left-1/2 px-[32px] py-[16px] rounded-[24px] top-[715px]" data-name="Date">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame12 />
      <p className="font-bold leading-[normal] relative shrink-0 text-[#1f2a1c] text-[32px] text-center whitespace-nowrap">12 de Abril, 2026</p>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#fbf7ed] content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <Hero />
      <FadeInWhenInView>
        <Intro />
      </FadeInWhenInView>
      <FadeInWhenInView>
        <Intro1 />
      </FadeInWhenInView>
      <FadeInWhenInView>
        <Intro2 />
      </FadeInWhenInView>
      <FadeInWhenInView>
        <DateSection />
      </FadeInWhenInView>
    </div>
  );
}