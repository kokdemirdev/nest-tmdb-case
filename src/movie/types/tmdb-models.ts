export interface TMDBOkResponse<T> {
  page: number
  total_pages: number
  total_results: number
  results: T[]
}

export interface Genre {
  id?: number
  name?: string
}

export interface ProductionCompanies {
  id?: number
  name?: string
  logo_path?: string | null
  origin_country?: string
}

export interface ProductionCountries {
  name?: string
  iso_3166_1?: string
}

export interface SpokenLanguages {
  name?: string
  iso_639_1?: string
}

export type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'

export interface DiscoverMovie {
  adult?: boolean
  backdrop_path?: string | null
  belongs_to_collection?: null | object
  budget?: number
  genres?: Genre[]
  homepage?: string | null
  id?: number
  /**
   * Validations
   *
   * minLength: 9
   * maxLength: 9
   * pattern: ^tt[0-9]{7}
   */
  imdb_id?: string | null
  original_language?: string
  original_title?: string
  overview?: string | null
  popularity?: number
  poster_path?: string | null
  production_companies?: ProductionCompanies[]
  production_countries?: ProductionCountries[]
  /**
   * format: date
   */
  release_date?: string
  revenue?: number
  runtime?: number | null
  spoken_languages?: SpokenLanguages[]
  status?: MovieStatus
  tagline?: string | null
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}
