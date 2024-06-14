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
  course_type?: number
  enroll_type?: number
  is_free?: boolean
  status?: number
}
