import React from "react";
import { motion } from "motion/react";

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <ul>
      {tabs.map((tab, idx) => (
        <motion.li
          key={tab.id}
          style={{
            padding:
              idx === 0
                ? "4px 0px 4px 4px"
                : idx === tabs.length - 1
                  ? "4px 4px 4px 0px"
                  : 4,
          }}
        >
          <motion.button
            style={{
              color: activeTab === tab.id ? "#f5f5f5" : "#ffffff",
            }}
            whileFocus={{
              outline: "2px solid #ffffff",
            }}
            onClick={() => onTabChange(tab.id)}
          >
            <span>{tab.label}</span>
            {tab.id === activeTab ? (
              <motion.span
                layoutId="activeTab"
                id="activeTab"
                transition={{
                  type: "spring",
                  stiffness: 600,
                  damping: 40,
                }}
              />
            ) : null}
          </motion.button>
        </motion.li>
      ))}
    </ul>
  );
};

export default Tabs;
