export interface ParameterRoot {
  $and: And[]
}

export interface And {
  title?: string
  $or?: Or[]
  is_datetime_enrollable?: boolean
}

export interface Or {
  tag_id?: number
  status?: number
}
