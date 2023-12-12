import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Drawer as AntdDrawer } from "antd"; // Rename the imported Drawer

const CustomDrawer = (visible: any) => {
  // Rename your local component
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      {" "}
      <AntdDrawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntdDrawer>
      ;
    </>
  );
};

export default CustomDrawer;
