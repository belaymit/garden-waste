import { Typography, Tabs } from "antd";
import type { TabsProps } from 'antd';
import useFetchSkips from "../hooks/useFetchSkips";
import type { T_List } from "../types/listTypes";
import ServerError from "./common/ServerError";
import SkipCategoryPagination from "./SkipCategoryPagination";
import LoadingState from "./common/LoadingState";
import '../styles/skips.css';
import SkipTable from "./SkipTable";

const postcode = 'NR32';
const area = 'Lowestoft';
const { Title } = Typography;

export default function SkipLists() {
  const { skips, loading, error } = useFetchSkips(postcode, area);

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
        />
        
        <SkipCategoryPagination 
          skips={categorizedSkips.medium.skips} 
          title={categorizedSkips.medium.title} 
        />
        
        <SkipCategoryPagination 
          skips={categorizedSkips.large.skips} 
          title={categorizedSkips.large.title} 
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


  if(error) return <ServerError/>

  return (
    <div style={{ padding: 24 }}>
      <Title level={2} style={{ marginBottom: 24 }}>
        Available Skips in {postcode} ({area})
      </Title>
      {loading ? <LoadingState/> :
        <Tabs 
          defaultActiveKey="1" 
          items={items} 
          style={{ marginBottom: 32 }}
        />
        }
    </div>
  )
}
