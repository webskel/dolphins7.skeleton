# frozen_string_literal: true

class Twenty::Project < Sequel::Model
  include Twenty::Model
  include Twenty::ColorableMixin

  validates_presence_of :name
  validates_presence_of :path
  one_to_many :tasks, class_name: "Twenty::Task"

  ##
  # @api private
  def validate
    super
    errors.add(:path, "does not exist on disk") if !path_exist?
  end

  ##
  # @return [String]
  #  The path to a project.
  def path
    super&.sub(Dir.home, "~")
  end

  ##
  # @return [Boolean]
  #  Returns true when {#path} exists on disk.
  def path_exist?
    File.exist? File.expand_path(path)
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
