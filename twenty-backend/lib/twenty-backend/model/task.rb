# frozen_string_literal: true

class Twenty::Task < Twenty::Model
  self.table_name = "tasks"

  STATUS = {ready: 0, in_progress: 1, complete: 2}
  enum :status, STATUS, default: :ready

  ##
  # Validations
  validates :title, presence: true
  validates :content, presence: true
  validates :project, presence: true

  ##
  # Associations
  belongs_to :project, class_name: "Twenty::Project"

  def to_json(options = {})
    {id:, title:, content:, status:,
     project_id:, created_at:, updated_at:}.to_json(options)
  end
end
