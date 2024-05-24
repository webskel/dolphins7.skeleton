# frozen_string_literal: true

module Twenty
  class Milestone < Sequel::Model
    include Model
    validates_presence_of :name
    validates_presence_of :project

    many_to_one :project
    many_to_many :tasks,
                 class_name: "Twenty::Task",
                 join_table: :tasks_milestones
  end
end
