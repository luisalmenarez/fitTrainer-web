"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  return (
    <motion.article
      className="size-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}>
      <Link className="text-primary font-bold uppercase" href="/">
        <Image
          src="/logo.png"
          alt="Logo PFMANFIT"
          objectFit="cover"
          width={96}
          height={96}
        />
      </Link>
    </motion.article>
  );
};

export default Logo;
