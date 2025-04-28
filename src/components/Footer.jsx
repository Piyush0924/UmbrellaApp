// Footer.jsx
import React from "react";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Title, Link, Text, Paragraph } = Typography;

const Footer = () => {
  return (
    <AntFooter style={{ background: "#0D1117", padding: "60px 20px", color: "#c9d1d9" }}>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#58a6ff" }}>Umbrella Services</Title>
          <Paragraph style={{ color: "#8b949e" }}>
            Your one-stop platform for food delivery, transport, and ticket booking — fast, easy, and reliable.
          </Paragraph>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#58a6ff" }}>Quick Links</Title>
          <Space direction="vertical">
            <Link href="#food" style={{ color: "#8b949e" }}>Food Delivery</Link>
            <Link href="#transport" style={{ color: "#8b949e" }}>Transport Services</Link>
            <Link href="#booking" style={{ color: "#8b949e" }}>Ticket Booking</Link>
            <Link href="#contact" style={{ color: "#8b949e" }}>Contact Us</Link>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#58a6ff" }}>Customer Support</Title>
          <Space direction="vertical">
            <Text style={{ color: "#8b949e" }}>Help Center</Text>
            <Text style={{ color: "#8b949e" }}>Terms of Service</Text>
            <Text style={{ color: "#8b949e" }}>Privacy Policy</Text>
            <Text style={{ color: "#8b949e" }}>Refund Policy</Text>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#58a6ff" }}>Connect with Us</Title>
          <Space size="large">
            <Link href="#facebook" style={{ color: "#58a6ff" }}>
              <FacebookOutlined style={{ fontSize: "26px" }} />
            </Link>
            <Link href="#twitter" style={{ color: "#58a6ff" }}>
              <TwitterOutlined style={{ fontSize: "26px" }} />
            </Link>
            <Link href="#instagram" style={{ color: "#58a6ff" }}>
              <InstagramOutlined style={{ fontSize: "26px" }} />
            </Link>
            <Link href="#linkedin" style={{ color: "#58a6ff" }}>
              <LinkedinOutlined style={{ fontSize: "26px" }} />
            </Link>
          </Space>
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "#30363d", marginTop: 40 }} />

      <Row justify="center" align="middle">
        <Col>
          <Text style={{ color: "#8b949e" }}>
            © {new Date().getFullYear()} Umbrella Services. Crafted with ❤️ for your needs.
          </Text>
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;
