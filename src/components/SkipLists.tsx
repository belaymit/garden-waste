import { Typography, Tabs, Button } from "antd";
import type { TabsProps } from 'antd';
import useFetchSkips from "../hooks/useFetchSkips";
import type { T_List } from "../types/listTypes";
import ServerError from "./common/ServerError";
import SkipCategoryPagination from "./SkipCategoryPagination";
import LoadingState from "./common/LoadingState";
import '../styles/skips.css';
import SkipTable from "./SkipTable";
import { useState } from "react";
import { useAppSelector } from "../store/hooks/hooks";

const postcode = 'NR32';
const area = 'Lowestoft';
const { Title } = Typography;

export default function SkipLists() {
  const { skips, loading, error } = useFetchSkips(postcode, area);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const skip = useAppSelector(state => state.skips);
  
  const categorizeSkips = (skips: T_List[]) => {
    return {
      small: {
        skips: skips.filter(skip => skip.size <= 4),
        title: 'Small Skips (up to 4 Yards)'
      },
      medium: {
        skips: skips.filter(skip => skip.size >= 6 && skip.size <= 8),
        title: 'Medium Skips (6-8 Yards)'
      },
      large: {
        skips: skips.filter(skip => skip.size >= 10),
        title: 'Large Skips (10+ Yards)'
      }
    };
  };

  const handleSelect = (id: number) => {
    setSelectedSkipId(prevId => prevId === id ? null : id);
  };

const categorizedSkips = categorizeSkips(skips);

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'View 1',
      children: (
        <>
        <SkipCategoryPagination
          skips={categorizedSkips.small.skips} 
          title={categorizedSkips.small.title} 
          selectedSkipId={selectedSkipId}
          onSelect={handleSelect}
        />
        
        <SkipCategoryPagination 
          skips={categorizedSkips.medium.skips} 
          title={categorizedSkips.medium.title} 
          selectedSkipId={selectedSkipId}
          onSelect={handleSelect}
        />
        
        <SkipCategoryPagination 
          skips={categorizedSkips.large.skips} 
          title={categorizedSkips.large.title} 
          selectedSkipId={selectedSkipId}
          onSelect={handleSelect}
        />
      </>
      ),
    },
    {
      key: '2',
      label: 'View 2',
      children: <SkipTable data={skips} />
  
    }
  ];

   const isSkipSelected = skip.id !== 0;

  if(error) return <ServerError/>

  return (
    <div style={{ padding: 24 }}>
      <Title level={2} style={{ marginBottom: 24 }}>
        Available Skips in {postcode} ({area})
      </Title>
      {loading ? <LoadingState/> :
        <Tabs
         tabBarExtraContent={isSkipSelected ? (
          <Button 
            className="skip-continue-button"
            onClick={() => {
              console.log('Proceeding with skip:', skip);
            }}
          >
            Continue
          </Button>
        ) : null}
        defaultActiveKey="1"
        items={items}
        style={{ marginBottom: 32 }}
      />
        }
    </div>
  )
}
