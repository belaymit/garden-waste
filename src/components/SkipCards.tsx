import { Card, Row, Col, Typography, Button, Tag } from 'antd';
import { ShoppingCartOutlined, CheckOutlined } from '@ant-design/icons';
import type { SkipCardProps } from '../types/listTypes';

const { Text } = Typography;
export default function SkipCards({ skip, isSelected, onSelect }: SkipCardProps)  {

  const handleSelect = () => {
     if (onSelect) {
    onSelect(skip.id);
  }
    console.log('Selected Skip:', {
      id: skip.id,
      size: skip.size,
      price: skip.price_before_vat,
      totalPrice: (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2),
      hirePeriod: skip.hire_period_days,
      allowsHeavyWaste: skip.allows_heavy_waste,
      allowedOnRoad: skip.allowed_on_road
    });
  };

  return (
    <Card style={{
        border: isSelected ? '1px solid rgb(201, 131, 132)' : "1px solid #D9D9D9",
        transition: 'border 0.3s ease',
        borderRadius: 8,
        marginBottom: 16,
        position: 'relative' 
      }}>
        {isSelected && (
        <CheckOutlined 
          className="selected-icon"
        />
      )}
      <Row align="middle" gutter={16}>
        <Col xs={24} sm={12} md={6} lg={4}>
            <img
              src={skip.image}
              alt={`${skip.size} yard skip`}
              className="skip-image"
              style={{ 
                height: '100%',
                objectFit: 'cover',
              }}
            />
        </Col>

        <Col xs={24} sm={12} md={10} lg={12} className="skip-details-col">
           <div className="skip-details">
              <div className="body-title">
                <span>{skip.size} Yard Skip</span>
                  <Tag color="blue">
                      {skip.size} Yards
                </Tag>
              </div>
              <span className="skip-description" style={{
                textAlign: "justify"
              }}>
                Perfect for {skip.size <= 4 ? 'small' : skip.size <= 8 ? 'medium' : 'large'} projects. 
                {skip.allows_heavy_waste ? ' Suitable for heavy waste.' : ' Not suitable for heavy waste.'}
              </span>
              <div style={{ marginTop: 8 }}>
                <Text type="secondary">
                  {skip.allowed_on_road ? 'Can be placed on road.' : 'Cannot be placed on road.'}
                </Text>
              </div>
            </div>
        </Col>

        <Col xs={24} md={8} lg={8}>
          <div className="skip-price">
            <Button 
              type="primary" 
              className="skip-price-button"
            >
              £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}
            </Button>
            <Tag color="#e59866">
              {skip.hire_period_days} days hire
            </Tag>
             <Button
                style={{ 
                  marginTop: 8
                }}
                type={isSelected ? "primary" : "default"}
                 icon={!isSelected ? <ShoppingCartOutlined /> : null}
                onClick={handleSelect}
                danger={isSelected}
             >
              {isSelected ? 'Selected' : 'Select'}
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
