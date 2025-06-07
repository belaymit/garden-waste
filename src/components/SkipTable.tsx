import { Table, Tag, Avatar, Space, Typography, Row, Col, Button, Input } from 'antd';
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import type { T_List } from '../types/listTypes';

const { Text } = Typography;

type SkipTableProps = {
  data: T_List[];
}

export default function SkipTable({ data }: SkipTableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [searchText, setSearchText] = useState('');
  const [pagination, setPagination] = useState({current: 1, pageSize: 10,});
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys);
  const handleTableChange = (pagination: any) => setPagination(pagination);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const filteredData = data.filter(item => {
  const searchLower = searchText.toLowerCase();
  return (
    `${item.size} Yard Skip`.toLowerCase().includes(searchLower) || 
    item.size.toString().includes(searchLower) || 
    (item.price_before_vat * (1 + item.vat / 100)).toFixed(2).includes(searchLower) || 
    `${item.hire_period_days} days hire`.toLowerCase().includes(searchLower)
  )});

  const columns = [
    {
      title: '#',
      key: 'index',
      render: (_: any, __: any, index: number) => {
        return (pagination.current - 1) * pagination.pageSize + index + 1;
      },
      width: 50,
    },
    {
      title: 'Skip',
      dataIndex: 'image',
      key: 'skip',
      render: (image: string, record: T_List) => (
        <Space>
          <Avatar 
            src={image} 
            size="large"
            shape="square"
          />
          <Text strong>{record.size} Yard Skip</Text>
        </Space>
      ),
    },
    {
      title: 'Yards',
      dataIndex: 'size',
      key: 'yards',
      render: (size: number) =>  <Tag color="#84bbf5">{size} Yards</Tag>
    },
    {
      title: 'Price',
      dataIndex: 'price_before_vat',
      key: 'price',
      render: (price: number, record: T_List) => (
        `£${(price * (1 + record.vat / 100)).toFixed(2)}`
      ),
    },
    {
      title: 'Hire Period',
      dataIndex: 'hire_period_days',
      key: 'hire',
      render: (days: number) => (
        <Tag color="#e59866">{days} days hire</Tag>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]} justify="center">
      <Col span={24}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: 16 
        }}>
          {selectedRowKeys?.length > 0 && (
            <Button type="primary" style={{ marginRight: 8 }}>
              {selectedRowKeys.length} {selectedRowKeys.length > 1 ? 'rows' : 'row'} selected
            </Button>
          )}
          {selectedRowKeys?.length ===0 && <div/>}
          <Input
            placeholder="Search skips..."
            suffix={<SearchOutlined />}
            style={{ width: 300 }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
          />
        </div>

        <Table
          rowSelection={{
            type: 'radio',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={filteredData}
          scroll={{x: 768}}
          rowKey="id"
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20', '50'],
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
          onChange={handleTableChange}

        />
      </Col>
    </Row>
  );
}