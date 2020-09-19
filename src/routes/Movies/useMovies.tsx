import { useState, useEffect } from 'react';
import { getMovies, getGendres } from '../../models/movies';

export type CustomMoviesType = {
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

export type ObjectKeysType = {
  [key: number]: string,
}

export type GendersType = {
  id: number,
  name: string
}

export type IconTextType = {
  label: any,
  text: number
}

const useMovies = () => {
  const [movies, setMovies] = useState<Array<CustomMoviesType>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [gendres, setGendres] = useState<ObjectKeysType>({});

  const fetchPopularMovies = async () => {
    try {
      setLoading(true)
      const res = await getMovies();
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
      const res = await getGendres();
      if(res.status === 200){
        const tempMovies = res.data.genres.reduce((a: any, b: GendersType) => (a[b.id] = b.name, a),{})
        setGendres(tempMovies)
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

  return {
    loading,
    gendres,
    movies
  }

};

export default useMovies;