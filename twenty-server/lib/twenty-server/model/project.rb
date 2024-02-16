# frozen_string_literal: true

class Twenty::Project < Twenty::Model
  include Twenty::ColorableMixin
  self.table_name = "projects"

  ##
  # Validations
  validates :name, presence: true
  validates :path, presence: true

  ##
  # Associations
  has_many :tasks, class_name: "Twenty::Task"

  ##
  # @return [String]
  #  The path to a project.
  def path
    super&.sub(Dir.home, "~")
  end
end
