import React from "react";
import { Container } from "./styles";
import "antd/dist/antd.css";
import { Button } from "antd";

export const ButtonIcon = (props) => {
  const { label, type, loadings, icon, htmlType } = props;
  return (
    <Container>
      <Button htmlType={htmlType} type={type} icon={icon} loading={loadings}>
        {label}
      </Button>
    </Container>
  );
};
