import React from 'react';
import { List, Space, Spin, Typography, Avatar } from 'antd';
import useMovies, { IconTextType } from './useMovies';

const Movies = () => {
  const { loading, gendres, movies } = useMovies();
  
  const IconText = (data: IconTextType) => (
    <Space>
      {data.label}: {data.text}
    </Space>
  );

  const GenerateGendres = (data: Array<number>) => {
    const temp = data.map((itemGendres) => gendres[itemGendres])
    return temp.join(', ');
  }

  return (
    <div style={{padding: '50px'}}>
      <Typography.Title level={3} style={{paddingLeft: '24px'}}> Movies List </Typography.Title>
      {loading && <Spin className="demo-loading" />}
      <List
        itemLayout="vertical"
        size="large"
        dataSource={movies}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText label="Popularity" text={item.popularity} key="list-vertical-star-o" />,
              <IconText label="Vote Count" text={item.vote_count} key="list-vertical-like-o" />,
              <IconText label="Vote Average" text={item.vote_average} key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar> {item?.title?.substr(0,1)} </Avatar> }
              title={item.title}
              description={GenerateGendres(item.genre_ids)}
            />
            {item.overview}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Movies;