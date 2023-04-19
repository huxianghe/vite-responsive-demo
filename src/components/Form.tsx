import React, { useState, useMemo } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
	Card,
	Button,
	Col,
	Form,
	Input,
	Row,
	Select,
	theme,
	Grid,
	Divider,
	FormProps,
} from "antd";

const BaseForm: React.FC<{ collapsed?: boolean }> = ({ collapsed }) => {
	const { token } = theme.useToken();
	const [expand, setExpand] = useState(false);
	const [form] = Form.useForm();
	const [form2] = Form.useForm();
	const { useBreakpoint } = Grid;
	const screens = useBreakpoint();

	const formProps = useMemo(() => {
		const { colorFillAlter, borderRadiusLG } = token;
		const { xs, sm, md, lg, xl, xxl } = screens;
		return {
			layout: md ? "horizontal" : "vertical",
			style: {
				maxWidth: "none",
				background: colorFillAlter,
				borderRadius: borderRadiusLG,
			},
		} satisfies FormProps;
	}, [token, screens]);

	const gridProps = useMemo(() => {
		const defaultGridProps = {
			xs: { span: 24 },
			sm: { span: 12 },
			md: { span: 12 },
			lg: { span: 8 },
			xl: { span: 6 },
		};

		const evenGridLastItemProps = {
			...defaultGridProps,
			lg: {
				span: 8,
				offset: 16,
			},
			xl: {
				span: 6,
				offset: 0,
			},
		};

		const oddGridLastItemProps = {
			...defaultGridProps,
			sm: {
				span: 12,
				offset: 12,
			},
			lg: {
				span: 8,
				offset: 8,
			},
			xl: {
				span: 6,
				offset: 18,
			},
		};

		return {
			defaultGridProps,
			evenGridLastItemProps,
			oddGridLastItemProps,
		};
	}, [collapsed, screens]);

	return (
		<>
			<Card bordered={false}>
				<Form form={form} {...formProps}>
					<Row justify="start" gutter={[24, 0]}>
						<Col {...gridProps.defaultGridProps}>
							<Form.Item name="name" label="用户名">
								<Input
									allowClear
									placeholder="请输入用户名"
									style={{ width: "100%" }}
								/>
							</Form.Item>
						</Col>
						<Col {...gridProps.defaultGridProps}>
							<Form.Item name="staff_num" label="工号">
								<Input
									allowClear
									placeholder="请输入工号"
									style={{ width: "100%" }}
								/>
							</Form.Item>
						</Col>
						<Col {...gridProps.defaultGridProps}>
							<Form.Item name="city" label="城市">
								<Select
									placeholder="请选择"
									defaultValue="上海"
									style={{ width: "100%" }}
								>
									<Select.Option value="上海">上海</Select.Option>
									<Select.Option value="北京">北京</Select.Option>
									<Select.Option value="重庆">重庆</Select.Option>
									<Select.Option value="南京">南京</Select.Option>
									<Select.Option value="西藏">西藏</Select.Option>
								</Select>
							</Form.Item>
						</Col>
						<Col
							{...gridProps.evenGridLastItemProps}
							style={{ textAlign: "right" }}
						>
							<Form.Item label=" " colon={false}>
								<>
									<Button type="primary" htmlType="submit">
										搜索
									</Button>
									<Button
										style={{
											margin: "0 8px",
										}}
										onClick={() => {
											form.resetFields();
										}}
									>
										重置
									</Button>
									{/* <a
                style={{
                  fontSize: 12,
                }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? <><UpOutlined /> 收起</> : <><DownOutlined /> 展开</>}
              </a> */}
								</>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Card>
			<Card bordered={false} style={{ marginTop: 40 }}>
				<Form form={form2} {...formProps}>
					<Row justify="start" gutter={[24, 0]}>
						<Col {...gridProps.defaultGridProps}>
							<Form.Item name="name" label="用户名">
								<Input
									allowClear
									placeholder="请输入用户名"
									style={{ width: "100%" }}
								/>
							</Form.Item>
						</Col>
						<Col {...gridProps.defaultGridProps}>
							<Form.Item name="staff_num" label="工号">
								<Input
									allowClear
									placeholder="请输入工号"
									style={{ width: "100%" }}
								/>
							</Form.Item>
						</Col>
						<Col {...gridProps.defaultGridProps}>
							<Form.Item name="city" label="城市">
								<Select
									placeholder="请选择"
									defaultValue="上海"
									style={{ width: "100%" }}
								>
									<Select.Option value="上海">上海</Select.Option>
									<Select.Option value="北京">北京</Select.Option>
									<Select.Option value="重庆">重庆</Select.Option>
									<Select.Option value="南京">南京</Select.Option>
									<Select.Option value="西藏">西藏</Select.Option>
								</Select>
							</Form.Item>
						</Col>
						<Col {...gridProps.defaultGridProps}>
							<Form.Item name="age" label="年龄">
								<Input
									allowClear
									placeholder="请输入年龄"
									style={{ width: "100%" }}
								/>
							</Form.Item>
						</Col>
						<Col
							{...gridProps.oddGridLastItemProps}
							style={{ textAlign: "right" }}
						>
							<Form.Item label=" " colon={false}>
								<>
									<Button type="primary" htmlType="submit">
										搜索
									</Button>
									<Button
										style={{
											margin: "0 8px",
										}}
										onClick={() => {
											form.resetFields();
										}}
									>
										重置
									</Button>
									{/* <a
                style={{
                  fontSize: 12,
                }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? <><UpOutlined /> 收起</> : <><DownOutlined /> 展开</>}
              </a> */}
								</>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Card>
		</>
	);
};

export default BaseForm;
