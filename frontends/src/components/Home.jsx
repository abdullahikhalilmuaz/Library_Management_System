import React, { useState } from "react";
import Headerone from "./Headerone";
import Sider from "./Sider";
export default function Home() {
  const [search, setSearch] = useState("");
  const [showComponent, setShowComponent] = useState();
  const [nav, setNav] = useState(false);
  return (
    <div>
      <Headerone
        setSearch={setSearch}
        search={search}
        setNav={setNav}
        nav={nav}
      />
      <div>
        <Sider
          showComponent={showComponent}
          setShowComponent={setShowComponent}
          nav={nav}
        />
      </div>
    </div>
  );
}
