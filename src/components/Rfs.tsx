import React, { useState, useMemo } from "react";
import { Avatar, Card, Row, Col, Divider } from "antd";
import "./rfs.less";

const BaseRFS: React.FC = () => {
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

	return (
		<>
			<Row>
				<Col xs={6} sm={4} className="f12">
					12px
				</Col>
				<Col xs={18} sm={20} className="f12">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="f14">
					14px
				</Col>
				<Col xs={18} sm={20} className="f14">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="base-font">
					16px
				</Col>
				<Col xs={18} sm={20} className="base-font">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="f18">
					18px
				</Col>
				<Col xs={18} sm={20} className="f18">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="f20">
					20px
				</Col>
				<Col xs={18} sm={20} className="f20">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="f24">
					24px
				</Col>
				<Col xs={18} sm={20} className="f24">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="f30">
					30px
				</Col>
				<Col xs={18} sm={20} className="f30">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="f36">
					36px
				</Col>
				<Col xs={18} sm={20} className="f36">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
			<Row style={{ marginTop: 40 }}>
				<Col xs={6} sm={4} className="f48">
					48px
				</Col>
				<Col xs={18} sm={20} className="f48">
					This is Responsive Font Sizes demo
				</Col>
			</Row>
		</>
	);
};

export default BaseRFS;
