import React, { useState, useEffect } from 'react';
import { List, Space, Spin, Avatar, Typography } from 'antd';
import axios from 'axios';


type CustomMovies = {
  popularity: number,
  vote_count: number,
  video: boolean,
  poster_path: string,
  id: number,
  adult: boolean,
  backdrop_path: string,
  original_language: string,
  original_title: string,
  genre_ids: Array<number>,
  title: string,
  vote_average: number,
  overview:  string,
  release_date: string
}

type IconTextType = {
  label: any,
  text: number
}

const Movies = () => {
  const [movies, setMovies] = useState<Array<CustomMovies>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [gendres, setGendres] = useState<Object>({});

  const fetchPopularMovies = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7e6ee7fd5967d5c0eadebda3f9b9ad4f&language=en-US&page=1`)
      if(res.status === 200){
        setMovies(res.data.results)
      }
    } catch(e) {
      console.log('error popular movies', e);
    } finally {
      setLoading(false)
    }
  }

  const fetchGendres = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7e6ee7fd5967d5c0eadebda3f9b9ad4f&language=en-US&page=1`)
      if(res.status === 200){
        console.log(res);
        // setMovies(res.data.results)
      }
    } catch (e) {
      console.log('error gendres', e);
    } finally {
      setLoading(false)
    }
    
  }

  useEffect(() => {
    fetchGendres();
    fetchPopularMovies();
  }, [])

  const IconText = (data: IconTextType) => (
    <Space>
      {data.label}: {data.text}
    </Space>
  );

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
              avatar={<Avatar src={`https://api.themoviedb.org${item.poster_path}`} />}
              title={item.title}
              description={item.overview}
            />
            {item.overview}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Movies;