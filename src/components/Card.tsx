import React, { useState, useMemo } from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Row, Col, Divider } from 'antd';

const { Meta } = Card;

const BaseCard: React.FC = () => {
  const gridProps = useMemo(() => {
    const defaultGridProps = {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 12 },
      lg: { span: 8 },
      xxl: { span: 6 },
    };
    return defaultGridProps;
  }, []);

  const threeCard1 = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 8 },
  };

  const threeCard2 = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 8 },
  };

  return (
    <>
      <Col style={{ marginBottom: 20 }}>
        <h1>四个卡片</h1>
      </Col>
      <Row gutter={[24, 24]}>
        <Col {...gridProps}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 1"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col {...gridProps}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 2"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col {...gridProps}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 3"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col {...gridProps}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 4"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>

      <Col style={{ marginTop: 40, marginBottom: 20 }}>
        <h1>三个卡片 - 等分卡片</h1>
      </Col>
      <Row gutter={[24, 24]}>
        <Col {...threeCard1}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 1"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col {...threeCard1}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 2"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col {...threeCard1}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 3"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>

      <Col style={{ marginTop: 40, marginBottom: 20 }}>
        <h1>三个卡片 - 2 个主要内容区域的 + 1 个少许内容区域的</h1>
      </Col>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={8} xxl={6}>
          <Card
            cover={
              <img
                style={{ maxWidth: 333, maxHeight: 202 }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 1"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={16} xxl={9}>
          <Card
            cover={
              <img
                style={{ maxWidth: 333, maxHeight: 202 }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 2"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} xxl={9}>
          <Card
            cover={
              <img
                style={{ maxWidth: 333, maxHeight: 202 }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 3"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>

      <Col style={{ marginTop: 40, marginBottom: 20 }}>
        <h1>三个卡片 - 1 个主要内容区域的 + 2 个少许内容区域的</h1>
      </Col>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} xxl={6}>
          <Card
            cover={
              <img
                style={{ maxWidth: 333, maxHeight: 202 }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 2"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} xxl={6}>
          <Card
            cover={
              <img
                style={{ maxWidth: 333, maxHeight: 202 }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 3"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} xxl={12}>
          <Card
            cover={
              <img
                style={{ maxWidth: 333, maxHeight: 202 }}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card 1"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BaseCard;
