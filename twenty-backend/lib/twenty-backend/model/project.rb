# frozen_string_literal: true

class Twenty::Project < Twenty::Model
  self.table_name = "projects"

  ##
  # Validations
  validates :name, presence: true
  validates :path, presence: true

  ##
  # Associations
  has_many :tasks, class_name: "Twenty::Task"

  def to_json(options = {})
    {id:, name:, path:}.to_json(options)
  end

  ##
  # @return [String]
  #  The path to a project.
  def path
    super&.sub(Dir.home, "~")
  end
end
