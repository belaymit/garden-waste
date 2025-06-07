import { Row, Typography } from 'antd';
import type { SkipCategoryProps } from '../types/listTypes';
import SkipCards from "./SkipCards";

const { Title } = Typography;

export default function SkipCategory ({ skips, title }: SkipCategoryProps) {
  if (skips.length === 0) return null;

  return (
    <div style={{ marginBottom: 32 }}>
      <Title level={3} style={{ marginBottom: 16 }}>
        {title}
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {skips.map((skip) => (
          <SkipCards 
          key={skip.id} 
          skip={skip} />
        ))}
      </Row>
    </div>
  );
};
