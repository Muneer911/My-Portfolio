import { useState } from "react";
import { motion } from "framer-motion";
import Link from "./links/Linkss";
import "./sideBarStyle.scss";
import Toggle_Button from "./toggleButton/ToggleButtonn";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sideBar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Link />
      </motion.div>
      <Toggle_Button setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
