# frozen_string_literal: true

class Twenty::Task < Twenty::Model
  self.table_name = "tasks"

  ##
  # Validations
  validates :title, presence: true
  validates :content, presence: true
  validates :state, inclusion: {in: %w[open closed]}
  validates :project, presence: true

  ##
  # Associations
  belongs_to :project, class_name: "Twenty::Project"

  ##
  # Scopes
  scope :open, -> { where(state: "open") }
  scope :closed, -> { where(state: "closed") }

  def to_json(options = {})
    {id:, title:, content:, state:,
     project_id:, created_at:, updated_at:}.to_json(options)
  end
end
