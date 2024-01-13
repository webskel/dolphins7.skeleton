# frozen_string_literal: true

class Twenty::Task < Twenty::Model
  self.table_name = "tasks"

  STATUS = {backlog: 0, ready: 1, in_progress: 2, complete: 3}
  enum :status, STATUS, default: :backlog

  ##
  # Validations
  validates :title, presence: true
  validates :content, presence: true
  validates :project, presence: true

  ##
  # Associations
  belongs_to :project, class_name: "Twenty::Project"
end
