import React, { useState } from "react";
import "./styles.css";

export const content = [
  {
    key: "1",
    tab: "section 1",
    section: "I'm content section 1",
  },
  {
    key: "2",
    tab: "section 2",
    section: "I'm content section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) return;
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItems: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
