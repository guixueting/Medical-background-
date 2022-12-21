/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select, Table, Tabs, Tag } from "antd"
import TextArea from "antd/lib/input/TextArea";
import React from "react"
import './index.scss'
import { column, dataColumn } from "./mock"
const { RangePicker } = DatePicker;
const Test = () => {

  const formItemLayout = {
    labelCol: {
      span: 5
    },
    wrapperCol: {
      span: 19
    }
  }
  return <div className="test">
    <Form name="control-hooks" onFinish={() => console.log('000')}>
      <Divider>
        <div className="divider">
          <span className="num-badge">1</span>
          <span>协议主体</span>
        </div>
      </Divider>
      <div className="card">
        <Row>
          <Col
            xl={12} xxl={12} sm={24}
          >
            <Form.Item
              label="协议客户"
              name="协议客户"
              rules={[{ required: true, message: '请输入协议客户!' }]}
            >
              <Button>选择客户</Button>
              <span className="pl10">上海正也医药有限公司</span>
            </Form.Item>

          </Col>
          <Col xl={12} xxl={12} sm={24}>
            <Form.Item
              label="协议状态"
              name="协议状态"
            >
              <Select
                size={'middle'}
                defaultValue="a1"
                onChange={() => null}
                style={{ width: 200 }}
                options={[]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xl={12} xxl={12} sm={24}
          >
            <Form.Item
              label="购进指标"
              name="购进指标"
            >
              <Select
                size={'middle'}
                defaultValue="a1"
                onChange={() => null}
                style={{ width: 90 }}
                options={[]}
              />
              <Input style={{ width: '240px' }} placeholder='请输入金额/数量' disabled className='ml10'></Input>
            </Form.Item>

          </Col>
          <Col xl={12} xxl={12} sm={24}>
            <Form.Item
              label="纯销指标"
              name="纯销指标"
            >
              <Input style={{ width: '90px' }} value='金额'></Input>
              <Input style={{ width: '240px' }} placeholder='请输入金额/数量' disabled className='ml10'></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xl={12} xxl={12} sm={24}
          >
            <Form.Item
              label="销售区域"
              name="销售区域"
            >
              <Button>选择区域</Button>
              <Tag closable color="blue" className="ml10 tag">
                全国
              </Tag>
            </Form.Item>
          </Col>
          <Col xl={12} xxl={12} sm={24}>
            <Form.Item
              label="签订时间"
              name="签订时间"
            >
              <DatePicker showTime onChange={null} onOk={null} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item
            label="购进渠道"
            name="购进渠道"
          >
            <Select
              size={'middle'}
              defaultValue="指定渠道"
              onChange={() => null}
              style={{ width: 90 }}
              options={[]}
            />
            <Button className="ml10">请选择渠道</Button>
          </Form.Item>
        </Row>
        <Table style={{ marginLeft: '90px' }} columns={column} pagination={{ hideOnSinglePage: true }} dataSource={dataColumn} />
      </div>
      <Divider>
        <div className="divider">
          <span className="num-badge">2</span>
          <span>产品政策</span>
        </div>
      </Divider>
      <div className="df aic pb10">
        <Button type='primary' className="mr20">添加产品</Button>
        <div className="df">
          <div className="pl10">购进总指标：<span className="fw5 fz16">$152.65</span></div>
          <div className="pl30">指标按季分解(万元)：<span className="fw5 fz16">$152.65</span></div>
          <div className="pl30">纯销总指标(万元)：<span className="fw5 fz16">$152.65</span></div>
        </div>
      </div>
      <div className="card prodect">
        <div className="header df jcsb">
          <div className="left pl30 df">
            <div>
              <span>产品：</span>
              <Button>选择产品</Button>
              <span className="pl20 fc25">美复胶丸 24粒/盒</span>
            </div>
            <div className="pl30">
              <span>协议效期：</span>
              <RangePicker />
            </div>
          </div>
          <div className="right">
            <Button>删除</Button>
          </div>
        </div>
        {/* content */}
        <div className="table-content">
          <div className="table-header">
            <div>协议价(元)</div>
            <div>票价(元)</div>
            <div>购进指标量(元)</div>
            <div>购进指标量(元)</div>
            <div>购机金额(元)</div>
            <div>纯销指标量(元)</div>
            <div>纯销指标金额(元)</div>
          </div>
          <div className="table-input ">
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
          </div>
        </div>
        <div className="table-content">
          <div className="table-header">
            <div>协议价(元)</div>
            <div>票价(元)</div>
            <div>购进指标量(元)</div>
            <div>购进指标量(元)</div>
            <div>购机金额(元)</div>
            <div>纯销指标量(元)</div>
            <div>纯销指标金额(元)</div>
            <div>纯销指标金额(元)</div>
          </div>
          <div className="table-input ">
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div>
              <Select
                size={'small'}
                defaultValue="指定渠道"
                onChange={() => null}
                style={{ width: '100%', paddingLeft: 0 }}
                options={[]}
              /></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div>
              <Select
                size={'small'}
                defaultValue="指定渠道"
                onChange={() => null}
                style={{ width: '100%', paddingLeft: 0 }}
                options={[]}
              /></div>
            <div><Input size="small" placeholder="请输入" disabled></Input></div>
            <div>
              <Select
                size={'small'}
                defaultValue="指定渠道"
                onChange={() => null}
                style={{ width: '100%', paddingLeft: 0 }}
                options={[]}
              />
            </div>
            <div> <DatePicker style={{ width: '100%', paddingLeft: 0 }} size="small" onChange={null} onOk={null} /></div>
            <div> <DatePicker style={{ width: '100%', paddingLeft: 0 }} size="small" onChange={null} onOk={null} /></div>
          </div>
        </div>
      </div>
      <Divider>
        <div className="divider">
          <span className="num-badge">3</span>
          <span>补充协议</span>
        </div>
      </Divider>
      <div className="card psr add-content">
        <Tabs
          // onChange={onChange}
          className="fl1"
          type="card"
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `补充协议 ${id}`,
              key: id,
              children: <div>
                <div className="df jcsb pb10 aic">
                  <div className="">协议内容{id}：</div>
                  <Button >删除</Button>
                </div>
                <TextArea disabled></TextArea>
              </div>,
            };
          })}
        />
        <Button className="psa add-btn" type="primary">新增</Button>
      </div>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form >


  </div >
}

export default Test