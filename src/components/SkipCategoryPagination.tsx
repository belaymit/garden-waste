import { useState } from 'react';
import { Button, Col, Row } from 'antd';
import SkipCards from './SkipCards';
import type { SkipCategoryPaginationProps } from '../types/listTypes';

export default function SkipCategoryPagination ({ 
  skips, 
  title, 
  itemsPerPage = 3 
}: SkipCategoryPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
    const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  
  if (skips.length === 0) return null;

  const totalPages = Math.ceil(skips.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleSkips = skips.slice(startIndex, startIndex + itemsPerPage);
  const hasMore = currentPage < totalPages - 1;

   const handleSelect = (id: number) => setSelectedSkipId(prevId => prevId === id ? null : id);

  return (
    <div style={{ marginBottom: 32 }}>
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <div className="card-title">
            {title}
          </div>
        </Col>
        <Col span={24}>
          {visibleSkips?.length > 0 ? (
            visibleSkips?.map((skip) => (
              <SkipCards 
                key={skip.id} 
                skip={skip}
                isSelected={selectedSkipId === skip.id}
                onSelect={handleSelect}
                />
            ))
          ) : null}
        </Col>
      </Row>

      {totalPages > 1 && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Button 
            type="primary"
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={!hasMore}
          >
            Next ({currentPage + 1}/{totalPages})
          </Button>
          
          {currentPage > 0 && (
            <Button 
              style={{ marginLeft: 8 }}
              type="default"
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Previous
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
