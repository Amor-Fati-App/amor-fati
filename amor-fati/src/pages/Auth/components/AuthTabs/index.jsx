import React, { useState, useEffect, useRef } from "react";
import View from "./View";
import Tabs from "./Tabs";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

const tabs = [
  {
    id: "tab-1",
    label: "Sign In",
    content: <LoginForm />
  },
  {
    id: "tab-2",
    label: "Create Account",
    content: <RegisterForm />
  },
];

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const isMounted = useMounted();

  const viewsContainerRef = useRef(null);

  const [viewsContainerWidth, setViewsContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (viewsContainerRef.current) {
        const width = viewsContainerRef.current.getBoundingClientRect().width;
        setViewsContainerWidth(width);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
  }, [viewsContainerWidth]);

  return (
    <div>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      <div id="views-container" ref={viewsContainerRef}>
        {isMounted &&
          tabs.map((tab, idx) => (
            <View
              key={tab.id}
              containerWidth={viewsContainerWidth}
              viewIndex={idx}
              activeIndex={tabs.findIndex((t) => t.id === activeTab)}
            >
              {tab.content}
            </View>
          ))}
      </div>
    </div>
  );
};

export default AuthTabs;
