import { Card, Row, Col, Button, Tag } from 'antd';
import { ArrowRightOutlined, CheckOutlined } from '@ant-design/icons';
import type { SkipCardProps } from '../types/listTypes';
import { useMediaQuery } from "react-responsive";
import { useAppDispatch } from "../store/hooks/hooks";
import { setSkip } from "../store/slices/storeSkipsSlices";

export default function SkipCards({ skip, isSelected, onSelect }: SkipCardProps)  {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  const dispatch = useAppDispatch();

  const handleSelect = () => {
     if (onSelect) {
    onSelect(skip.id);
  }
    const selectedSkip = {
      id: skip.id,
      size: skip.size,
      price: skip.price_before_vat,
      totalPrice: (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2),
      hirePeriod: skip.hire_period_days,
      allowsHeavyWaste: skip.allows_heavy_waste,
      allowedOnRoad: skip.allowed_on_road
    };

    dispatch(setSkip(selectedSkip));

    console.log('Selected Skip:', selectedSkip);
  };

  return (
    <Card 
       onClick={handleSelect}
       hoverable
      style={{
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
               <Tag color={skip.allowed_on_road ? '#92e2a5' : '#c46b99'}>
                  {skip.allowed_on_road ? 'Can be placed on road' : 'Cannot be placed on road'}
                </Tag>
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
                 icon={!isSelected ? <ArrowRightOutlined /> : null}
                 onClick={(e) => {
                  e.stopPropagation(); 
                  handleSelect();
                }}
                danger={isSelected}
              >
                {isSelected ? 'Selected' : (isMobile ? 'Select' : 'Select the Skip')}
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
