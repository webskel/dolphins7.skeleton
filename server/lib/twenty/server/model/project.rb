# frozen_string_literal: true

class Twenty::Project < Sequel::Model
  include Twenty::Model
  include Twenty::ColorableMixin

  validates_presence_of :name
  validates_presence_of :path
  one_to_many :tasks, class_name: "Twenty::Task"

  ##
  # @return [String]
  #  The path to a project.
  def path
    super&.sub(Dir.home, "~")
  end

  ##
  # @return [Integer]
  #  Returns the number of open tasks a project has.
  def open_task_count
    @open_task_count ||= Twenty::Task
                           .where(project_id: id)
                           .where(Sequel.lit("status IN (0,1,2)"))
                           .count
  end
end
