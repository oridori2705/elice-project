export type TagName =
  | 'korean'
  | 'english'
  | 'c'
  | 'cpp'
  | 'java'
  | 'python'
  | 'programmer'
  | 'dataScientist'
  | 'webDeveloper'
  | 'javascript'
  | 'r'
  | 'htmlcss'
  | 'aiml'
  | 'algorithm'
  | 'sql'
  | 'scratch'
  | 'kotlin'
  | 'swift'
  | 'Level1'
  | 'Level2'
  | 'Level3'
  | 'Level4'

export type CardTagNameType =
  | 'programmer'
  | 'dataScientist'
  | 'webDeveloper'
  | 'aiml'
  | 'algorithm'

export type FilterKeys =
  | 'category'
  | 'courseType'
  | 'format'
  | 'level'
  | 'price'
  | 'programmingLanguage'

export interface ResponseDataType {
  _result: Result
  courses: Course[]
  course_count: number
}

export interface Result {
  status: string
  reason: string
}

export interface Course {
  id: number
  is_recommended: boolean
  is_chat_room_disabled: boolean
  is_post_student_info_visible: boolean
  is_post_student_email_enabled: boolean
  is_post_tutor_email_enabled: boolean
  is_user_completed?: boolean
  user_unit?: boolean | null
  is_user_enrollable?: boolean | null
  total_page_count?: number
  completed_page_count?: number | null
  normal_lecture_progress?: number
  preference: Preference
  enroll_begin_datetime: number
  enroll_end_datetime: number | null
  release_datetime: number | null
  begin_datetime: number
  end_datetime: number | null
  complete_datetime: number | null
  enrolled_role_period: number | null
  brushup_info: string | null
  enroll_type: number
  subscription_level: string | null
  enroll_limit_number: number | null
  price: string
  price_usd: string
  unit: number | null
  discounted_price: string
  discounted_price_usd: string
  discount_begin_datetime: number | null
  discount_end_datetime: number | null
  discount_title: string | null
  discount_rate: string | null
  completion_info: CompletionInfo
  course_type: number
  info_summary_visibility_dict: InfoSummaryVisibilityDict
  is_exercise_deprecated: boolean
  last_course_info_id: number
  title: string
  code: string
  short_description: string
  class_times: string | null[]
  class_type: number
  taglist: string[]
  promote_video_url: string | null
  logo_file_url: string
  image_file_url: string | null
  period: number
  version: number
  is_discounted: boolean
  attend_info: AttendInfo
  last_attend_updated_date: string | null
  leaderboard_ranking_type: number
  leaderboard_info: LeaderboardInfo
  is_free: boolean
  status: number
  library_access_type: string | null
  library_credit: string | null
  library_type: number
  is_enroll_noti_enabled: boolean
  is_datetime_enrollable: boolean
  agreement_info: AgreementInfo
  is_enroll_guest_enabled: boolean
  is_legacy_test: boolean
  last_review_status: number
  course_agreed_datetime: string | null
  course_role: number
  has_past_course_role: boolean
  ern: string
  aibot_info: AibotInfo
  prerequisite_course_ids: string | null[]
  enrolled_user_count: number
  enrolled_student_count: number
  normal_lecture_count: number
  test_lecture_count: number
  normal_lecture_page_count: number
  is_library_material_instance_exist: boolean
  is_library_material_instance_sync_enabled: boolean
  enrolled_role_begin_datetime: string | null
  enrolled_role_end_datetime: string | null
  enrolled_role_brushup_begin_datetime: string | null
  enrolled_role_brushup_end_datetime: string | null
  lecture_page_read_info: string | null
  tags: Tag[]
  tracks: Track[]
  instructors: string | null[]
  test_lecture: string | null
}

export interface Preference {
  chatting?: boolean
  overview?: Overview
  helpcenter?: boolean
  live_streaming?: boolean
  tab_menus_visibility?: TabMenusVisibility
  boards?: boolean
  images?: boolean
  manage?: boolean
  configs?: boolean
  landing?: Landing
  members?: boolean
  lectures?: boolean
  requests?: boolean
  sections?: boolean
  tutoring?: boolean
  dashboard?: boolean
  libraries?: boolean
  attendance?: boolean
  leaderboard?: boolean
  lectureroom?: boolean
  ai_dashboard?: boolean
  attendance_admin?: boolean
  section_schedule?: boolean
}

export interface TabMenusVisibility {
  boards: boolean
  images: boolean
  manage: boolean
  configs: boolean
  members: boolean
  roadmap?: boolean
  lectures: boolean
  requests: boolean
  sections: boolean
  tutoring: boolean
  dashboard: boolean
  libraries: boolean
  attendance: boolean
  leaderboard: boolean
  lectureroom: boolean
  ai_dashboard: boolean
  attendance_admin: boolean
  section_schedule: boolean
  roadmap_management?: boolean
}

export interface Overview {
  level: boolean
  period: boolean
  page_count: boolean
  class_times: boolean
  student_count: boolean
  video_running_time: boolean
  programming_language: boolean
}

export interface Landing {
  mode: string
  configs_v2: ConfigsV2
}

export interface ConfigsV2 {
  bg_color: string
  sections: Section[]
  title_color: string
  ad_banner_link: string
  promotion_type: string
  cover_image_url: string
  ad_banner_image_url: string
  short_description_color: string
}

export interface Section {
  type: string
  uuid: string
  payload: Payload
}

export interface Payload {
  cards?: Card[]
  label: string
  title: string
  visible: boolean
  align_mode?: string
  description: string
  anchor_enabled: boolean
  objectives?: ObjectivesType[]
  file_url?: string
}

export interface Card {
  title: string
  description: string
  caption?: string
  image_url?: string
}

export interface ObjectivesType {
  title: string
  description?: string
}

export interface CompletionInfo {
  unit: Unit
  condition: Condition
  certificate_info?: CertificateInfo
}

export interface CertificateInfo {
  is_enabled: boolean
  template_id: string
}

export interface Unit {
  value: number
  is_enabled: boolean
}

export interface Condition {
  score: number
  progress: number
  is_enabled: boolean
}

export interface InfoSummaryVisibilityDict {
  level: boolean
  period: boolean
  class_type: boolean
  class_times: boolean
  completion_unit: boolean
  exercise_page_count: boolean
  completion_condition: boolean
  programming_language: boolean
  total_video_duration: boolean
  enrolled_student_count: boolean
  lecture_page_access_period: boolean
}

export interface AttendInfo {
  is_enabled: boolean
  active_end_date: string
  active_begin_date: string
  check_in_end_time: string
  check_out_end_time: string
  check_in_begin_time: string
  check_out_begin_time: string
  required_stay_seconds: number
}

export interface LeaderboardInfo {
  entry_type: number
  score_type: number
  score_ratio: string | null
  ranking_type: number
  submit_count_limit: string | null
  score_open_datetime: string | null
}

export interface AgreementInfo {
  title: string
  is_enabled: boolean
  description: string
}

export interface AibotInfo {
  is_enabled: boolean
}

export interface Tag {
  id: number
  tag_type: number
  name: TagName
}

export interface Track {
  id: number
  title: string
}
